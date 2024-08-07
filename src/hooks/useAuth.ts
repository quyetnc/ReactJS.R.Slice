import { useAppDispatch, useAppSelector } from "config/hooks";
import { userActions } from "features/user/userSlice";
import { useEffect, useState } from "react";
import { getToken, getUsers, removeToken } from "utils/helper/token.helper";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const token = getToken();
  const userLocalStorage = getUsers();

  const [initLoading, setInitLoading] = useState<boolean>(true);
  const { user, getCurrentUserLoading } = useAppSelector((state) => state.user);
  const loading = getCurrentUserLoading || initLoading;

  if (!loading && !user) {
    removeToken();
  }

  useEffect(() => {
    dispatch(userActions.getCurrentUser());
    setInitLoading(false);
  }, []);

  return {userLocalStorage, token, loading, user };
};
