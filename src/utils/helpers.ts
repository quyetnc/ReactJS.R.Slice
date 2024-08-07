import { message } from "antd";
import type { RcFile } from "antd/es/upload/interface";
import { IEmployeeJobRank, IEmployeeLine, IEmployeePosition } from "models";
import moment, { Moment } from "moment";
import { DATE_FORMAT, TIME_EXPIRE_TOKEN } from "./constants"; 
import { ImagePlaceholder } from "./media";

export const getPasswordRules = (extendRule = []) => {
  return [
    {
      required: true,
      message: "Password is required",
      title: "Required",
    },
    {
      pattern: /\d/,
      message: "Password has at least 1 digit",
      title: "At least 1 digit",
    },
    {
      pattern: /[a-z]/,
      message: "Password has at least 1 lowercase",
      title: "At least 1 lowercase",
    },
    {
      pattern: /[A-Z]/,
      message: "Password has at least 1 uppercase",
      title: "At least 1 uppercase",
    },
    {
      pattern: /[!@#$%^&*?]/,
      message: "Password has at least 1 special character",
      title: "At least 1 special character",
    },
    {
      pattern: /^.{8,50}$/,
      message: "Password has 8 to 50 characters",
      title: "8 to 50 characters",
    },
    ...extendRule,
  ];
};

export interface IToken {
  aud: string;
  exp: number;
}

export interface DataType {
  id: string;
  fullName: string;
  account: string;
  gender: number;
  dateOfBirth: string;
  employeeSkills: any;
  employeeProjects: any;
  lineId: any;
  line: any;
  onboardDate: string;
  expireDate: string;
  cheDate: string;
  status: number;
  contractType: number;
  employeeLines: IEmployeeLine[];
  employeeJobRanks: IEmployeeJobRank[];
  employeePositions: IEmployeePosition[];
  maritalStatus: number;
  createdAt: string;
  lastWorkingDate: string;
  notes: string;
  isTranferContract: boolean;
}

export const checkTokenExpire = () => {
  // const accessToken = localStorage.getItem("token");
  // if (accessToken) {
  //   const decoded: any = 1;
  //   // jwt_decode(accessToken);
  //   const expireDate = moment(decoded.exp * 1000);
  //   return moment().diff(moment(expireDate), "minutes") >= TIME_EXPIRE_TOKEN;
  // }
  return true;
};

export const checkLogined = () => {
  const userLogined = localStorage.getItem("users");
  return userLogined != null;
};

export const convertToOption = (data: any) => {
  if (data) {
    return data.map((line: { name: string; id: string }) => ({
      label: line.name,
      value: line.name,
    }));
  }
  return [];
};

export const formatDate = (date: string) => {
  if (date && moment(date)) {
    return moment(date).format(DATE_FORMAT);
  }
};

export const getMonth = (date: string) => {
  return moment(date).format("M");
};

export const getYear = (date: string) => {
  return moment(date).format("Y");
};

interface IWelcomePopupStatus {
  lastDate?: string;
  role?: string;
}

export const getWelcomePopupStatus = (): IWelcomePopupStatus | undefined => {
  const welcomePopup = localStorage.getItem("welcomePopup");
  if (!welcomePopup) {
    return;
  }
  const welcomePopupStatus = JSON.parse(welcomePopup);
  return welcomePopupStatus as IWelcomePopupStatus;
};

export const setWelcomePopupStatus = (lastDate: Moment, role: string) => {
  const welcomePopupStatus: IWelcomePopupStatus = {
    lastDate: lastDate.toString(),
    role,
  };
  localStorage.setItem("welcomePopup", JSON.stringify(welcomePopupStatus));
};

export const paginate = (employee: Array<DataType>) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(employee?.length / itemsPerPage);

  const newEmployees = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return employee.slice(start, start + itemsPerPage);
  });

  return newEmployees;
};

export const checkImgFileBeforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export const replaceErrorImage = ({ currentTarget }: any) => {
  currentTarget.onerror = null; // prevents looping
  currentTarget.src = ImagePlaceholder;
};

export const clearTokenWhenLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("welcomePopup");
};

/**
 * debounce function
 * @param fn
 * @param wait
 * @param immediate
 */
export const debounce = (
  fn: (...params: any[]) => any,
  wait: number,
  immediate = true
) => {
  let timeout: NodeJS.Timeout | undefined;
  return function (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const context = this; // eslint-disable-line @typescript-eslint/no-this-alias,@typescript-eslint/no-unsafe-assignment
    const later = () => {
      timeout = undefined;
      if (!immediate) {
        fn.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout as NodeJS.Timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      fn.apply(context, args);
    }
  };
};

export function getCurrentTime() {
  const today = new Date();
  return (
    ("0" + today.getHours()).slice(-2) +
    ":" +
    ("0" + today.getMinutes()).slice(-2)
  );
}

export function getCurrentDate() {
  const today = new Date();
  return (
    ("0" + today.getDate()).slice(-2) +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    today.getFullYear()
  );
}

export const formatDateTime = (value: Date) => {
  if (!value) return "";
  return moment(value).format("DD/MM/YYYY HH:MM");
};

export function createMarkup(html: string) {
  return { __html: html.split('/head>')[1] };
}
