export type IDevice = {
  id?: string;
  assetCode?: string;
  barcode?: string;
  ownerShip?: number | any;
  legalCode?: string;
  assetType?: number;
  description?: string;
  pic?: string;
  userDepartment?: string;
  wareHousing?: string;
  deviceStatus?: number;
  note?: string;
  assetHistories?: any;
  osType?: any;
  osVersion?: any;
  project?: any;
};

export interface ActionType {
  type: string;
  payload: any;
}

export type TBorrowDevice = {
  assetId: string;
  employeeId?: string;
  projectId?: string;
  project: string;
  pic: string;
  note: string;
  assignedTime: Date;
};

export type TReturnDevice = {
  id: string;
  pic: string;
  note: string;
  returnedTime: Date;
};
