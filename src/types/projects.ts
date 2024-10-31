import { User } from './user'

export interface Task {  
	id?: number;  
	projectId: number;  
	executorId: number | null;  
	task: string;  
	timeCreate: string;  
	deadline: string;  
	comment: string;  
	status: TasksStatuses;   
}  

export type TasksStatuses = 'inProgress' | 'review' | 'tested' | 'finished' | 'blocked' | 'deferred' | 'cancelled';
  
export interface Project {  
	id: number;  
	name: string;
	teamLead: number;
	users: User[];  
}  

export interface PatchTaskResponse{
  status?: string,
  comment?: string,
}