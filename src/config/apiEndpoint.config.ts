export const API_ENDPOINT = {
  RESOURCE_ALLOCATION: {
    GET_RESOURCE_ALLOCATION: "/Report/resources-allocation",
  },
  RESOURCE_PLANNING: {
    GET_ALL: "EmployeePlanning/Get-All",
    UPDATE_EMPLOYEE_PLANNING: "EmployeePlanning/Update-Employee-Planning",
    FILTER: "EmployeePlanning/Filter-Employee",
  },
  EE: {
    CAL_EE: "/Report/calculate-ee",
  },
  ODC_ALLOWANCE: {
    EXPORT: "/Report/export-odc-allowance",
  },
  FILE: {
    UPLOAD: "/File/Upload-File?folderType=",
  },
  USER: {
    IMPORT: "/User/import-users",
  },
  ASSET: {
    BASE_URL: "/Asset",
    GET_ALL: "/Asset/Get-All",
    FILTER: "/Asset/Filter-Asset",
    BORROW: "/Asset/Assign-Asset",
    RETURN: "/Asset/Return-Asset",
    IMPORT: "/Asset/import-assets",
    REPORT_BROKEN: "/Asset/Report-Broken",
  },
};
