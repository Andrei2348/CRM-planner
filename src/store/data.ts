import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import useApiCall from '@/composables/useApiCall'
import { Project, Task, PatchTaskResponse } from '@/types/projects'
import { User } from '@/types/user'
import { useUserStore } from '@/store/user'

export const useDataStore = defineStore('data', () => {
	const userStore = useUserStore()
	const projectList = ref<Project[] | null>(null)
	const isLoadingProjects = ref(true)
	const isLoadingTasks = ref(true)
	const isLoadingUsers = ref(true)
	const tasksList = ref<Task[] | null>(null)
	const usersList = ref<User[] | null>(null)
	const taskForEdit = ref<Task | null>(null)
	const projectForEdit = ref<Project | null>(null)
	const selectedProject = ref<Project | null>(null)

	const changeTaskData = (newTask: Task): void => {
		if(tasksList.value){
			const index = tasksList.value.findIndex(task => task.id === newTask.id) 
			if (index !== -1) {  
				tasksList.value[index] = { ...tasksList.value[index], ...newTask } 
			}  
		}
	}  

	const setTaskForEdit = (payload: Task | null): void => {
		taskForEdit.value = payload
	}

	const setProjectForEdit = (payload: Project | null): void => {
		projectForEdit.value = payload
	}

	const getTaskForEdit = computed(() => {  
    return taskForEdit.value
  }) 

	const getProjectForEdit = computed(() => {  
    return projectForEdit.value
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
	})

	const setSelectedProject = (payload: Project | null) => {
		selectedProject.value = payload
	}

	const getSelectedProject = computed(() => {  
		return selectedProject.value  
	})

	const updateProjectsList = (changedProject: Project): void => {  
		if (projectList.value) {  
			projectList.value = projectList.value.map(project => 
				project.id === changedProject.id ? { ...project, ...changedProject } : project
			)
		}
	}  

	const addProjectToProjectList = (payload: Project): void => {  
    projectList.value = projectList.value ?? []  
    projectList.value.push(payload)
	}
	
	// Получение списка проектов
	const projectsListRequest = async (): Promise<void> => {
		try{
			if(userStore.getUserInfo){
				setIsLoadingProjects(true)
				const {status, data} = await useApiCall.get(`projects?users.id=${userStore.getUserInfo.id}`)
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

	// Получение проекта по id
	const projectInfoRequest = async (payload: number): Promise<void> => {
		if(!selectedProject.value){
			try{
				const {status, data} = await useApiCall.get(`projects?id=${payload}`)
				if(status === 200 || status === 201){
					if(data){
						setSelectedProject(data[0])
					}
				}
			} catch (error) {
				console.log(error)
			}
		}
	}

	// Получение списка задач по выбранному проекту
	const tasksListRequest = async (id: number): Promise<void> => {
		try{
			setIsLoadingTasks(true)
			const {status, data} = await useApiCall.get(`tasks?projectId=${id}`)
			if(status === 200 || status === 201){
				setTasksList(data)
			}
		} catch (error) {
			console.log(error)
		} finally {
      setIsLoadingTasks(false)
    }
	}

	// Изменение данных тасков
	const taskPatchRequest = async (payload: Task | PatchTaskResponse): Promise<void> => {  
    try {  
			const { status, data } = await useApiCall.patch(`tasks/${payload.id}`, payload)  
			if (status === 200 || status === 201) {  
				changeTaskData(data)  
			}
    } catch (error) {  
			console.error(error) 
    }
	}

	// Создание таски
	const taskCreateRequest = async (payload: Task): Promise<void> => {  
    try {  
			const { status, data } = await useApiCall.post('tasks/', payload)  
			if (status === 200 || status === 201) {  
				addTaskData(data)  
			}
    } catch (error) {  
			console.error(error) 
    }
	}

	// Получение списка пользователей в проекте
	const usersListRequest = async (projectId: number): Promise<void> => {
		try{
			setIsLoadingUsers(true)
			const {status, data} = await useApiCall.get(`projects?id=${projectId}`)
			if(status === 200 || status === 201){
				setUsersList(data[0].users)
			}
		} catch (error) {
			console.log(error)
		} finally {
      setIsLoadingUsers(false)
    }
	}

	// Создание нового проекта
	const projectCreateRequest = async (payload: Project) => {
		try {  
			const { status, data } = await useApiCall.post('projects/', payload)  
			if (status === 200 || status === 201) {  
				addProjectToProjectList(data)
			} 
    } catch (error) {  
			console.error(error) 
    }
	}

	// Редактирование существующего проекта
	const projectPatchRequest = async (payload: Project) => {
		try {  
			const { status, data } = await useApiCall.patch(`projects/${payload.id}`, payload)  
			if (status === 200 || status === 201) {   
				updateProjectsList(data) 
			} 
    } catch (error) {  
			console.error(error)
    }
	}

  return {
		projectsListRequest,
		projectInfoRequest,
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
		setProjectForEdit,
		getTaskForEdit,
		setSelectedProject,
		getSelectedProject,
		projectCreateRequest,
		projectPatchRequest,
		getProjectForEdit
  }
})