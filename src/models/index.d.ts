export {};

export * from "./event";
export * from "./employee";
export * from "./device.model";

export enum EUserRole {
  AdminHR,
  Bul,
}

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

export type Optional = any;
