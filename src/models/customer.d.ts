import { UploadFile } from "antd";

export interface ICustomer {
  pic: string;
  presenter: string;
  attendant: string;
  customerName: string;
  domain: string;
  market: number;
  meetingDate: Date;
  content: string;
  potential: number;
  customerFiles: IUploadFileCustomerResponse[];
  status: number;
  parentId: string;
  children: ICustomer[];
  key: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  isDeleted: boolean;
}

export interface ICustomerRequest {
  parentId: string;
  pic: string;
  presenter: string;
  market: number | string;
  attendant: string | string[];
  customerName: string;
  domain: string;
  meetingDate: string;
  content: string;
  potential: number;
  status: number;
  files?: UploadFile[];
  listUrl: string[];
}

export interface IUploadFileCustomerResponse {
  customerManagementId: string;
  name: string;
  fileUrl: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  isDeleted: boolean;
}

export interface IOptionSelect {
  value: string;
  label: JSX.Element | string;
}
