import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import useApiCall from '@/composables/useApiCall'
import { Project, Task, PatchTaskResponse } from '@/types/projects'
import { User } from '@/types/user'
import { useUserStore } from '@/store/user'
import { useUxuiStore } from '@/store/uxui'

export const useDataStore = defineStore('data', () => {
	const userStore = useUserStore()
	const uxuiStore = useUxuiStore()
	const projectList = ref<Project[] | null>(null)
	const isLoadingProjects = ref(true)
	const isLoadingTasks = ref(true)
	const isLoadingUsers = ref(true)
	const tasksList = ref<Task[] | null>(null)
	const usersList = ref<User[] | null>(null)
	const taskForEdit = ref<Task | null>(null)

	const changeTaskData = (newTask: Task): void => {
		if(tasksList.value){
			const index = tasksList.value.findIndex(task => task.id === newTask.id) 
			if (index !== -1) {  
				tasksList.value[index] = { ...tasksList.value[index], ...newTask } 
				console.log(tasksList.value)
			}  
		}
	}  

	const setTaskForEdit = (payload: Task | null): void => {
		uxuiStore.setIsCreateTaskPanelVisible(true)
		taskForEdit.value = payload
	}

	const getTaskForEdit = computed(() => {  
    return taskForEdit.value
  }) 

	const setIsLoadingProjects = (payload: boolean): void => {
		isLoadingProjects.value = payload
	}

	const setIsLoadingTasks = (payload: boolean): void => {
		isLoadingTasks.value = payload
	}

	const setIsLoadingUsers = (payload: boolean): void => {
		isLoadingUsers.value = payload
	}

	const setProjectList = (payload: Project[] | null): void => {  
		projectList.value = payload
	}

	const setTasksList = (payload: Task[] | null): void => {
		tasksList.value = payload
	}

	const setUsersList = (payload: User[] | null): void => {
		usersList.value = payload
	}

	const addTaskData = (payload: Task) => {
		if(!tasksList.value){
			tasksList.value = []
		}
		tasksList.value.push(payload)
	}

	const canProceed = computed(() => {  
		return !isLoadingTasks.value && !isLoadingUsers.value;  
	});
	
	// Получение списка проектов
	const projectsListRequest = async (): Promise<void> => {
		try{
			if(userStore.userInfo){
				setIsLoadingProjects(true)
				const {status, data} = await useApiCall.get(`projects?users.id=${userStore.userInfo.id}`)
				if(status === 200 || status === 201){
					setProjectList(data)
				}
			}
		} catch (error) {
			console.log(error)
		} finally {
      setIsLoadingProjects(false)
    }
	}

	// Получение списка задач по выбранному проекту
	const tasksListRequest = async (id: number): Promise<void> => {
		try{
			if(userStore.userInfo){
				setIsLoadingTasks(true)
				const {status, data} = await useApiCall.get(`tasks?projectId=${id}`)
				if(status === 200 || status === 201){
					setTasksList(data)
				}
			}
		} catch (error) {
			console.log(error)
		} finally {
      setIsLoadingTasks(false)
    }
	}

	// Изменение данных тасков
	const taskPatchRequest = async (id: number, payload: PatchTaskResponse): Promise<void> => {  
    try {  
			const { status, data } = await useApiCall.patch(`tasks/${id}`, payload);  
			console.log(status, data)
			if (status === 200 || status === 201) {  
				changeTaskData(data)  
			} else {  
				console.error(`Error: Unexpected status code ${status}`); 
			}  
    } catch (error) {  
			console.error("Error during task patch request:", error); 
    }
	}

	// Создание таски
	const taskCreateRequest = async (payload: PatchTaskResponse): Promise<void> => {  
    try {  
			const { status, data } = await useApiCall.post('tasks/', payload);  
			console.log(status, data)
			if (status === 200 || status === 201) {  
				addTaskData(data)  
			} else {  
				console.error(`Error: Unexpected status code ${status}`); 
			}  
    } catch (error) {  
			console.error("Error during task patch request:", error); 
    }
	}

	// Получение списка пользователей в проекте
	const usersListRequest = async (projectId: number): Promise<void> => {
		try{
			if(userStore.userInfo){
				setIsLoadingUsers(true)
				const {status, data} = await useApiCall.get(`projects?id=${projectId}`)
				if(status === 200 || status === 201){
					setUsersList(data[0].users)
				}
			}
		} catch (error) {
			console.log(error)
		} finally {
      setIsLoadingUsers(false)
    }
	}
  return {
		projectsListRequest,
		tasksListRequest,
		isLoadingProjects,
		projectList,
		tasksList,
		usersList,
		setProjectList,
		usersListRequest,
		canProceed,
		taskPatchRequest,
		taskCreateRequest,
		setTaskForEdit,
		getTaskForEdit
  }
})