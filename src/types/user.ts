export interface User {
  id: number,
  username: string
}

// Нужен для валидации данных
export interface UserItem {
  username: string,
  email: string,
  password: string,
  repassword?: string
}

export interface UserItemResponse {  
  id?: number;  
  telegram?: string;  
  phone?: string;  
  description?: string;  
  github?: string;  
  username?: string;  
  email?: string;  
  password?: string;  
  repassword?: string;  
}  

export interface UserLoginItem {
  email: string,
  password: string
}

export interface UserApiResponse {
  data: UserItemResponse,
  token: string
}

export interface Technology {  
  id: number;  
  category: string;  
  name: string;  
}  