import { UserItem } from '@/types/user'
import { UserLoginItem } from '@/types/user'

export const EMPTY_USER: UserItem = {
	"id": null,
	"username": "",
	"email": "",
	"password": ""
}

export const EMPTY_LOGIN_FORM: UserLoginItem = {
	"email": "",
	"password": ""
}