import { TasksStatuses } from './projects'

export interface MenuItem {
  id: number,
	name: string,
	url: string,
	icon: string,
  prefix: string | null,
  color: string,
  in_project: boolean
}

export interface StatusItemDropdown {
  id: number,
  title: string,
  status: TasksStatuses,
  color: string
}

