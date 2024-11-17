import { TasksStatuses } from './projects'

export interface MenuItem {
	name: string,
	url: string,
	icon: string,
  prefix: string | null,
  color: string
}

export interface StatusItemDropdown {
  id: number,
  title: string,
  status: TasksStatuses,
  color: string
}

