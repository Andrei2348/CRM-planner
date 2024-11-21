import { User } from './user'

export interface Task {  
	id?: number, 
	projectId: number,  
	executorId: number | null,  
	task: string,  
	timeCreate: string,  
	deadline: string,  
	comment: string,
	color: Colors,  
	status: TasksStatuses  
}  

export type TasksStatuses = 'inProgress' | 'review' | 'tested' | 'finished' | 'blocked' | 'deferred' | 'cancelled'
export type Colors = '#FF5733' |  '#33FF57' | '#3357FF' | '#F1C40F' | '#9B59B6' | '#A5260A'
  
export interface Project {  
	id?: number, 
	name: string,
	user_id?: number | null,
	description: string,
	users: User[],
	color: Colors  
}  

export interface PatchTaskResponse{
	id: number,
  status?: TasksStatuses
}

export interface ParticipationDataProject{
	id?: number,
	project_id: number,
	project_name: string,
	user_id: number,
	user_name: string,
	teamleadId: number
}

export interface Link{
	id?: number,
	link: string,
	description: string,
	user_id: number,
	author: string,
	date: string,
	projectId: number
}