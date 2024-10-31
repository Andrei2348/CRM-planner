export interface User {
  id: number;
  username: string;
}

export interface UserItem {
  username: string;
  email: string;
  password: string;
  repassword?: string;
}

export interface UserItemResponse extends UserItem {
  id: number;
}

export interface UserLoginItem {
  email: string;
  password: string;
}

export interface UserApiResponse {
  data: UserItemResponse;
  token: string;
}
