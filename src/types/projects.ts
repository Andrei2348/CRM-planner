export interface User {  
	id: number;  
	username: string;  
}  
  
export interface Task {  
	id: number;  
	executor: number;  
	task: string;  
	timeCreate: string;  
	deadline: string;  
	comment: string;  
	status: 'inProgress' | 'finished' | 'review' 
}  
  
export interface Project {  
	id: number;  
	name: string;  
	users: User[];  
	tasks: Task[];  
}  
