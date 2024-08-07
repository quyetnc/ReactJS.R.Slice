export interface IChartOfLineDataResponse {
  lineName: string;
  juniors: number;
  seniors: number;
}

interface IChartOnboardResign {
  month: string;
  onboard?: number;
  outDate?: number;
}

export interface IChartOfLineResponse extends Array<IChartOfLineDataResponse> {}
export interface IChartOnboardResignResponse
  extends Array<IChartOnboardResign> {}
