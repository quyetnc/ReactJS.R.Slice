import { notification } from "antd";

const notificationProps = {
  top: 10,
  duration: 3,
};

export const showSuccessNotification = (message: string) => {
  notification.success({
    message: message || "Success",
    ...notificationProps,
  });
};

export const showErrorNotification = (message: string) => {
  notification.error({
    message: message || "Error",
    ...notificationProps,
  });
};

export const showInfoNotification = (message: string) => {
  notification.info({
    message: message || "Info",
    ...notificationProps,
  });
};
