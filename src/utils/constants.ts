
export const AnhVD7 = "anhvd7";
export const ADMIN_ROLE = "ADMIN_ROLE";
export const VIETNAM_COUNTRY_CODE = "+84";
export const FPT_MAIL_DOMAIN = "@fpt.com";
export const TIME_EXPIRE_TOKEN = 15 * 60;
export const DEBOUNCE_TIME = 1000;
export const DATE_FORMAT = "DD/MM/YYYY";
export const NEW_DATE_FORMAT = "YYYY-MM-DD";
export const STATUS: any = {
  Onboard: 0,
  Offboard_OUT: 1,
  Offboard_ROTATE: 2,
  Maternity_Leave: 3,
  NoStatus: 4,
  ContractSuspension: 5,
  Longterm_Leave: 6,
  TransferToEC: 7,
};
export const CONTRACT_TYPE: any = {
  Official: 0,
  FixedTerm: 1,
  IndefiniteTerm: 2,
  OJT: 3,
  Other: 4,
};
export const MARITAL_STATUS: any = {
  Single: 0,
  Married: 1,
  Divorced: 2,
};
export const ACTION_TYPE: any = ["ADD", "EDIT", "DELETE", "IMPORT"];
export const ACTION_TYPE_ENUM = {
  ADD: 0,
  EDIT: 1,
  DELETE: 2,
  IMPORT: 3,
};
export const DRIVE_PREFIX = "https://drive.google.com/file/d";

export const MARKET_TYPE_ENUM = {
  1: "English (EN)",
  2: "Vietnam (VN)",
  3: "Japan (JP)",
  4: "Other",
};

export const MARKET_TYPE_TEMP = [
  { name: "English (EN)", id: 1 },
  { name: "Vietnam (VN)", id: 2 },
  { name: "Japan (JP)", id: 3 },
  { name: "Other", id: 4 },
];

export const COLORS = [
  "#3366CC",
  "#FF9900",
  "#3B3EAC",
  "#109618",
  "#990099",
  "#66AA00",
  "#0099C6",
  "#AAAA11",
  "#316395",
  "#22AA99",
  "#994499",
  "#E67300",
  "#6633CC",
  "#329262",
  "#5574A6",
  "#1ffd26",
  "#3B3EAC",
  "#29082F",
  "#458B74",
  "#F1C40F",
  "#0B5345",
  "#8E44AD",
];

export const FOLDER_TYPE = {
  Avatar: 1,
  Document: 2,
  Customer: 3,
  MeetingNote: 4,
  CV: 5,
  Events: 6,
  Certificates: 7,
};

export const genderList = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
  { label: "Other", value: 2 },
];
export const maritalStatusList = [
  { label: "Single", value: 0 },
  { label: "Married", value: 1 },
  { label: "Divorced", value: 2 },
  { label: "No Status", value: 3 },
];

export const statusList = [
  { label: "Onboard", value: 0 },
  { label: "Offboard (OUT)", value: 1 },
  { label: "Offboard (ROTATE)", value: 2 },
  { label: "Maternity Leave", value: 3 },
  { label: "No Status", value: 4 },
  { label: "Contract Suspension", value: 5 },
  { label: "Long-term Leave", value: 6 },
  { label: "Transfer to EC", value: 7 },
  { label: "Inactive", value: 8 },
];

export const contractTypeList = [
  { label: "Official Contract", value: 0 },
  { label: "Fixed-term Contract", value: 1 },
  { label: "Indefinite-term Contract", value: 2 },
  { label: "OJT", value: 3 },
  { label: "Other", value: 4 },
];

export const marketOptions = [
  { label: "English (EN)", value: "1" },
  { label: "Vietnam (VN)", value: "2" },
  { label: "Japan (JP)", value: "3" },
  { label: "Other", value: "4" },
];

export const EMOJIES = [
  {
    value: 1,
    label: "Extremely Satisfied",
    symbol: "😍",
  },
  {
    value: 2,
    label: "Satisfied",
    symbol: "😘",
  },
  {
    value: 3,
    label: "Normal",
    symbol: "🙂",
  },
  {
    value: 4,
    label: "Unsatisfied",
    symbol: "🙁",
  },
  {
    value: 5,
    label: "Disappointed",
    symbol: "😭",
  },
];

export const SATISFACTION_LEVEL = {
  EXTREMELY_SATISFIED: 1,
  SATISFIED: 2,
  NORMAL: 3,
  UNSATISFIED: 4,
  DISAPPOINTED: 5,
};

export enum EMOTIONS {
  EXTREMELY_SATISFIED = "Extremely satisfied",
  SATISFIED = "Satisfied",
  NORMAL = "Normal",
  UNSATISFIED = "Unsatisfied",
  DISAPPOINTED = "Disappointed",
}

export const customerStatusOptions = [
  {
    value: "0",
    label: "First Meeting",
    color: "#F1C40F",
  },
  {
    value: "1",
    label: "Second Meeting",
    color: "#FF9900",
  },
  {
    value: "2",
    label: "Final Meeting",
    color: "#22AA99",
  },
  {
    value: "3",
    label: "Submitted",
    color: "#109618",
  },
  {
    value: "4",
    label: "Negotiating",
    color: "#994499",
  },
  {
    value: "5",
    label: "Signed",
    color: "#316395",
  },
  {
    value: "6",
    label: "Won",
    color: "#1ffd26",
  },
  {
    value: "7",
    label: "Cancelled",
    color: "#E60031",
  },
  {
    value: "8",
    label: "Lost",
    color: "#E60031",
  },
  {
    value: "9",
    label: "Unknown",
    color: "#E60031",
  },
];

export const DEFAULT_PAGINATION = {
  pageSize: 10,
  totalCount: -1,
  totalPages: -1,
  currentPage: 1,
  hasNext: false,
  hasPreviousPage: false,
};

export enum EmailType {
  NewAccount = "NewAccount",
  ResetPassword = "ResetPassword",
  ExpireContract = "ExpireContract",
}

export const BulRole = "Bul";
export const LeaderRole = "Leader";
export const EmployeeRole = "Employee";
export const AdminHRRole = "AdminHR";
export const ListSidebarAdmin = [
  "/admin/create-onboard",
  "/admin/list-onboard",
  "/admin/list-employee",
  "/events/create",
  "/events",
  "/devices",
];
export const ListRoutesEmployee = (userId: number) => {
  return ["/Profile", "/history-action", "/feedback", `/employees/${userId}`];
};

export const STATUS_DEVICE_KEY = {
  NEW: 0,
  AVAILABLE: 1,
  IN_USED: 2,
  BROKEN: 3,
  OTHERS: 4,
};

export const STATUS_DEVICE_NAME = {
  NEW: "New",
  AVAILABLE: "Available",
  IN_USED: "In-used",
  BROKEN: "Broken",
  OTHERS: "Others",
};

export const STATUS_DEVICE_LIST = [
  {
    value: 0,
    label: "New",
    color: "#59981A",
  },
  {
    value: 1,
    label: "Available",
    color: "#3D550C",
  },
  {
    value: 2,
    label: "In-used",
    color: "#FF9900",
  },
  {
    value: 3,
    label: "Broken",
    color: "#3F4122",
  },
  {
    value: 4,
    label: "Others",
    color: "#22AA99",
  },
];

export const STATUS_DEVICE_ACTION = [
  {
    value: 0,
    label: "---",
    color: "#ffffff",
  },
  {
    value: 1,
    label: "Borrowing",
    color: "#1ffd26",
  },
  {
    value: 2,
    label: "Return",
    color: "#316395",
  },
];

export const DEVICE_OWNER_SHIP_KEY = {
  COMPANY: "Company",
  CUSTOMER: "Customer",
  OTHERS: "Others",
};
export const DeviceOwnerOptions = [
  { label: "-", value: 0 },
  { label: "Company", value: 1 },
  { label: "Customer", value: 2 },
  { label: "Others", value: 3 },
];
export const DEVICE_OWNER_SHIP = [
  {
    id: "",
    label: "-",
    value: 0,
  },
  {
    id: DEVICE_OWNER_SHIP_KEY.COMPANY,
    label: DEVICE_OWNER_SHIP_KEY.COMPANY,
    value: 1,
  },
  {
    id: DEVICE_OWNER_SHIP_KEY.CUSTOMER,
    label: DEVICE_OWNER_SHIP_KEY.CUSTOMER,
    value: 2,
  },
  {
    id: DEVICE_OWNER_SHIP_KEY.OTHERS,
    label: DEVICE_OWNER_SHIP_KEY.OTHERS,
    value: 3,
  },
];

export const DEVICE_TYPE_KEY = {
  MOBILE: "Mobile",
  HEADPHONE: "Headphone",
  TABLET: "Tablet",
  OTHERS: "Others",
};
export const AssetTypeOptions = [
  { label: "-", value: 0 },
  { label: "Mobile", value: 1 },
  { label: "Headphone", value: 2 },
  { label: "Tablet", value: 3 },
  { label: "Others", value: 4 },
];

export const DEVICE_TYPE = [
  {
    id: "",
    value: 0,
  },
  {
    id: DEVICE_TYPE_KEY.MOBILE,
    value: 1,
  },
  {
    id: DEVICE_TYPE_KEY.HEADPHONE,
    value: 2,
  },
  {
    id: DEVICE_TYPE_KEY.TABLET,
    value: 3,
  },
  {
    id: DEVICE_TYPE_KEY.OTHERS,
    value: 4,
  },
];

export const EMPTY_STRING = "";

export const EMPTY_CONTENT = "-";

export const PAGE_SIZE = 10;

export const DEVICE_MANAGEMENT_KEY = {
  BAR_CODE: "barcode",
  OWNER_SHIP: "ownerShip",
  LEGAL_CODE: "legalCode",
  ASSET_TYPE: "assetType",
  DESCRIPTION: "description",
  ACCOUNT: "account",
  USER_DEPARTMENT: "userDepartment",
  WARE_HOUSING: "wareHousing",
  DEVICE_STATUS: "deviceStatus",
  NOTE: "note",
  ID: "id",
  PIC: "pic",
  OS: "osType",
  OS_VERSION: "osVersion",
  PROJECT: "project",
  ASSET_HISTORY: "assetHistories",
};

export const MODAL_DEVICE_ACTION = {
  BORROW_RETURN: "borrow_return",
  ASSET_HISTORY: "asset_history",
  SHOW_DETAIL: "show_detail",
  ADD_DEVICE: "add_device",
};

export const DEVICE_ACTION = {
  BORROW: "borrow",
  RETURN: "return",
  SHOW_HISTORY: "show_history",
};

export const DEVICE_ACTION_VALUE = [
  {
    key: DEVICE_ACTION.BORROW,
    label: "Mượn thiết bị",
  },
  {
    key: DEVICE_ACTION.RETURN,
    label: "Trả thiết bị",
  },
];

export const DATE_FORMAT_DEFAULT = "DD/MM/YYYY";

export const STATUS_ACTION = {
  SUCCESS: 1,
  FAILURE: 0,
};

export const OS_TYPE = {
  ANDROID: "0",
  IOS: "1",
};

export const OS_VALUE_TYPE = [
  {
    key: OS_TYPE.ANDROID,
    label: "Android",
  },
  {
    key: OS_TYPE.IOS,
    label: "IOS",
  },
];
