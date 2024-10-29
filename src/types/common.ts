import { TasksStatuses } from './projects'

export interface ImenuItem {
	name: string,
	url: string,
	icon: string
}

export interface MenuItemDropdown {
  id: number,
  title: string,
  status: TasksStatuses,
  color: string,
}

