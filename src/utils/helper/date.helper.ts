import moment from "moment";
import { DATE_FORMAT, DATE_TIME_FORMAT } from "../constants/dateTime.constant";

export const formatDate = (date: string | undefined) => {
  if (!date) return "";
  return moment(date).format(DATE_FORMAT);
};

export const timeSorter = (a: any, b: any) => {
  return moment(b, DATE_FORMAT).diff(moment(a, DATE_FORMAT));
};

export const formatDateTime = (date: string | undefined) => {
  if (!date) return "";
  return moment(date).format(DATE_TIME_FORMAT);
};