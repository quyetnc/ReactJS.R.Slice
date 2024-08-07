import { Moment } from "moment";

export interface IEvent {
  id?: string;
  title: string;
  description: string | any;
  thumbnail: string;
  startAt?: string;
  endAt?: string;
  eventTime?: (Moment | null)[];
  isActive?: boolean;
  isDeleted?: boolean;
}
