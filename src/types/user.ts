export interface UserItem {
	id: number | null,
	username: string,
	email: string,
	password: string
}

export interface UserLoginItem {
	email: string,
	password: string
}

