export interface IUser {
  id: string,
  userName: string,
  leaderLineId: string | null,
  avatar: string | null,
  role: string,
  email: string,
  phoneNumber: string
}