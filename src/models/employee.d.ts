export interface IEmployeeOnboard {
  id?: string;
  fullName: string;
  account: string;
  onboardDate: string;
  avatar: string;
  dateOfBirth: string;
}

export interface IEmployee {
  id: string;
  fullName: string;
  account: string;
  dateOfBirth: string;
  employeeSkills: any;
  employeeProject: any;
  onboardDate: string;
  expireDate: string;
  cheDate: string;
  status: string;
  employeeLines: any;
  employeeJobRanks: IEmployeeJobRank[];
  employeePositions: IEmployeePosition[];
  maritalStatus: string;
  createdAt: string;
  avatar?: string;
}

export interface IEmployeeLine {
  lineId: string;
  line: ILine;
}

export interface ILine {
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string | null;
  isActive: boolean;
  isDeleted: boolean;
}

export interface IEmployeeJobRank {
  jobRankId: string;
  jobRank: IJobRank;
}

export interface IJobRank {
  name: string;
  id: string;
  createdAt: string;
  updatedAt: null | string;
  isActive: boolean;
  isDeleted: boolean;
}
export interface IEmployeePosition {
  positionId: string;
  position: IPosition;
}

export interface IPosition {
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string | null;
  isActive: boolean;
  isDeleted: boolean;
}

export interface EmployeeModel {
  fullName: string;
  account: string;
  phone?: string;
  birthDay?: Date;
  gender: number;
  employeeLines: string[];
  employeeJobRanks: string[];
  employeePositions: string[];
  status: number;
  onboardDate?: Date;
  expireDate?: Date;
}

export interface IPagination {
  pageSize: number;
  totalCount: number;
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  hasPreviousPage: boolean;
}

export interface IEmployeeNotesRequest {
  id?: string;
  notes?: string;
}
