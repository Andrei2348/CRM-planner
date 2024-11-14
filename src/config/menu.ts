import { ImenuItem, StatusItemDropdown } from '@/types/common'

export const MENU_DATA: ImenuItem[] = [
	{
		icon:'home',
		name: 'Проекты',
		url: '/',
		prefix: null
	},
	{
		icon:'home',
		name: 'Задания',
		url: '/project',
		prefix: ''
	},
	{
		icon:'payments',
		name: 'Участники',
		url: '/users',
		prefix: ''
	},
	{
		icon:'orders',
		name: 'Полезные ссылки',
		url: '/links',
		prefix: ''
	},
	{
		icon:'settings',
		name: 'Настройки',
		url: '/settings',
		prefix: null
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
