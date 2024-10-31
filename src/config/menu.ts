import { ImenuItem, StatusItemDropdown } from '@/types/common'

export const MENU_DATA: ImenuItem[] = [
	{
		icon:'home',
		name: 'Проекты',
		url: '/'
	},
	
	{
		icon:'payments',
		name: 'Payments',
		url: '/payments'
	},
	{
		icon:'orders',
		name: 'Orders',
		url: '/orders'
	},
	{
		icon:'feedback',
		name: 'Feedback',
		url: '/feedback'
	},
	{
		icon:'settings',
		name: 'Settings',
		url: '/settings'
	},
]

export const DROPDOWN_STATUS_MENU: StatusItemDropdown[] = [
	{
		'id': 1,
		'title': 'В разработке',
		'status': 'inProgress',
		'color': '#D8320E'
	},
	{
		'id': 2,
		'title': 'На ревью',
		'status': 'review',
		'color': '#a7a41f'
	},
	{
		'id': 3,
		'title': 'На тестировании',
		'status': 'tested',
		'color': '#4184bb'
	},
	{
		'id': 4,
		'title': 'Завершено',
		'status': 'finished',
		'color': '#22690d'
	},
	{
		'id': 5,
		'title': 'Приостановлено',
		'status': 'blocked',
		'color': '#B22222'
	},
	{
		'id': 6,
		'title': 'Отложено',
		'status': 'deferred',
		'color': '#2E8B57'
	},
	{
		'id': 7,
		'title': 'Отмена',
		'status': 'cancelled',
		'color': '#808000'
	}
]
