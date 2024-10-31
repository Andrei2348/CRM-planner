import { TasksStatuses } from './projects'

export interface ImenuItem {
	name: string,
	url: string,
	icon: string
}

export interface StatusItemDropdown {
  id: number,
  title: string,
  status: TasksStatuses,
  color: string,
}

