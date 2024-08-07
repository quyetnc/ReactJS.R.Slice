import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../config/hooks";

function AuthRoute(props: any) {
  const token = useAppSelector((state) => state);
  // const token = useAppSelector((state) => state.auth.token);

  // const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(handleFetchLoginRequest());
  }, []);

  if (!token) {
    return (
      <Navigate
        to={{
          pathname: "/login",
          // state: { from: props.location },
        }}
      />
    );
  }
  return props.children;
}

export default AuthRoute;
