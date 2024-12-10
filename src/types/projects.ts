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
	project: string,
	user_id?: number | null,
	description: string,
	users: User[],
	color: Colors  
}  

export interface PatchTaskResponse{
	id: number,
  status?: TasksStatuses
}

export type Invitation = 'developer' |  'project'

export interface ParticipationDataProject{
	id?: number,
	projectId: number,
	projectName: string,
	user_id: number,
	username: string,
	teamleadId: number,
	invitation: Invitation,
	invitationId?: number
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

type NotifyType = 'success' | 'alert'

export interface Notify{
	id: number
	type: NotifyType,
	message: string
}