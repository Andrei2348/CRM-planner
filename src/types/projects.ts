export interface User {  
	id: number;  
	username: string;  
}  
  
export interface Task {  
	id?: number;  
	projectId: number;  
	executorId: number;  
	task: string;  
	timeCreate: string;  
	deadline: string;  
	comment: string;  
	status: TasksStatuses;   
}  

export type TasksStatuses = 'inProgress' | 'finished' | 'review';
  
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