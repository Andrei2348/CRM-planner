import { ImenuItem } from '@/types/common'

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

export const DROPDOWN_STATUS_MENU = [
	{
		'id': 0,
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
		'id': 2,
		'title': 'Завершено',
		'status': 'finished',
		'color': '#22690d'
	}
]
