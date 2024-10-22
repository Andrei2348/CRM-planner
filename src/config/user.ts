import { UserItem } from '@/types/user'
import { UserLoginItem } from '@/types/user'

export const EMPTY_USER: UserItem = {
	"username": "",
	"email": "",
	"password": "",
	"repassword": ""
}

export const EMPTY_LOGIN_FORM: UserLoginItem = {
	"email": "",
	"password": ""
}

export const TOKEN_KEY: string = 'crmToken'