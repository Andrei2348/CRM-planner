import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import useApiCall from '@/composables/useApiCall'
import { Project, Task, PatchTaskResponse, ParticipationDataProject, Link, Invitation } from '@/types/projects'
import { User, Technology } from '@/types/user'
import { useUserStore } from '@/store/user'
import { useRoute } from 'vue-router'

export const useDataStore = defineStore('data', () => {
	const route = useRoute()
	const userStore = useUserStore()
	const projectList = ref<Project[] | null>(null)
	const isLoadingTasks = ref(true)
	const isLoadingUsers = ref(true)
	const isLoading = ref(true)
	const tasksList = ref<Task[] | null>(null)
	const usersList = ref<User[] | null>(null)

	// =======================
	const etalonUsersList = ref<User[] | null>(null)
	// =======================

	const taskForEdit = ref<Task | null>(null)
	const projectForEdit = ref<Project | null>(null)
	const linkForEdit = ref<Link | null>(null)
	const selectedProject = ref<Project | null>(null)
	const notifyProjectList = ref<ParticipationDataProject[] | null>(null)
	const linksList = ref<Link[] | null>(null)

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

	const setIsLoadingTasks = (payload: boolean): void => {
		isLoadingTasks.value = payload
	}

	const setIsLoadingUsers = (payload: boolean): void => {
		isLoadingUsers.value = payload
	}

	const setIsLoading = (payload: boolean): void => {
		isLoading.value = payload
	}

	const getIsLoading = computed(() => {  
		return isLoading.value 
	})

	const setProjectList = (payload: Project[] | null): void => {  
		projectList.value = payload
	}

	const setTasksList = (payload: Task[] | null): void => {
		tasksList.value = payload
	}

	const setUsersList = (payload: User[] | null): void => {
		usersList.value = payload
	}

	const setEtalonUsersList = (payload: User[] | null): void => {
		if (payload !== null && payload.length !== 0){
			etalonUsersList.value = payload
		} else {
			etalonUsersList.value = null
		}
	}

	const getUsersList = computed(() => {  
		return usersList.value 
	})

	const getEtalonUsersList = computed(() => {  
		return etalonUsersList.value 
	})

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

	const setLinksList = (payload: Link[] | null) => {
		linksList.value = payload
	}

	const getLinksList = computed(() => {  
		return linksList.value  
	})

	const updateProjectsList = (changedProject: Project): void => {  
		if (projectList.value) {  
			projectList.value = projectList.value.map(project => 
				project.id === changedProject.id ? { ...project, ...changedProject } : project
			)
		}
	}  

	const updateLinksList = (changedLink: Link): void => {  
		if (linksList.value) {  
			linksList.value = linksList.value.map(link => 
				link.id === changedLink.id ? { ...link, ...changedLink } : link
			)
		}
	}  

	const addProjectToProjectList = (payload: Project): void => {  
    projectList.value = projectList.value ?? []  
    projectList.value.push(payload)
	} 
	
	const removeProjectById = (id: number | null): void => {  
    if (projectList.value) {  
			projectList.value = projectList.value.filter(item => item.id !== id);  
    }  
	}

	const removeLinkById = (id: number | null): void => {  
    if (linksList.value) {  
			linksList.value = linksList.value.filter(item => item.id !== id);  
    }  
	}

	const removeTaskById = (id: number | null): void => {  
    if (tasksList.value) {  
			tasksList.value = tasksList.value.filter(item => item.id !== id);  
    }  
	}

	const setNotifyProjectList = (payload: ParticipationDataProject[] | null) => {  
    if (!notifyProjectList.value) {  
			notifyProjectList.value = []
    }  

    if (payload) {  
			payload.forEach(newItem => {  
				const exists = notifyProjectList.value!.some(existingItem => existingItem.id === newItem.id)
				if (!exists) {  
					notifyProjectList.value!.push(newItem)  
				}  
			}) 
    } else {
			notifyProjectList.value = null
		}
	}
	
	const getNotifyProjectList = computed(() => {  
		return notifyProjectList.value  
	})

	const removeNotifyProject = (id: number) => { 
		if(notifyProjectList.value){
			notifyProjectList.value = notifyProjectList.value.filter(item => item.id !== id)  
		}
	}

	const setLinkForEdit = (payload: Link | null) => {
		linkForEdit.value = payload
	}

	const getLinkForEdit = computed(() => {  
		return linkForEdit.value  
	})

	// Получение списка проектов
	const projectsListRequest = async (): Promise<void> => {
		try{
			if(userStore.getUserInfo){
				setIsLoading(true)
				const {status, data} = await useApiCall.get(`projects?users.id=${userStore.getUserInfo.id}`)
				if(status === 200 || status === 201){
					setProjectList(data)
				}
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	// Получение проекта по id
	const projectInfoRequest = async (payload: number = Number(route.params.id)): Promise<void> => {
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
				setEtalonUsersList(data[0].users)
			}
		} catch (error) {
			console.log(error)
		} finally {
      setIsLoadingUsers(false)
    }
	}

	// Поиск людей
	const searchUsersListRequest = async (payload: string): Promise<void> => {
		try{
			setIsLoadingUsers(true)
			const {status, data} = await useApiCall.get(`users?username=*${payload}*`)
			if(status === 200 || status === 201){
				setUsersList(data)
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoadingUsers(false)
    }
	}

	// Создание нового проекта
	const projectCreateRequest = async (payload: Project): Promise<void> => {
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
	const projectPatchRequest = async (payload: Project, notifyStatus?: Invitation): Promise<void> => {
		try {  
			const { status, data } = await useApiCall.patch(`projects/${payload.id}`, payload)  
			if (status === 200 || status === 201) {   
				updateProjectsList(data) 
				if(notifyStatus === 'developer'){
					addProjectToProjectList(data)
				}
			} 
    } catch (error) {  
			console.error(error)
		}
	}

	// Удаление выбранного проекта
	const projectDeleteRequest = async (): Promise<void> => {
		if(projectForEdit.value && projectForEdit.value.id){
			try {  
				const { status } = await useApiCall.delete(`projects/${projectForEdit.value.id}`)  
				if (status === 200 || status === 201) {  
					removeProjectById(projectForEdit.value.id)  
				} 
			} catch (error) {  
				console.error(error)
			}
		}
	}

	// Удаление выбранного задания
	const taskDeleteRequest = async (): Promise<void> => {
		if(taskForEdit.value && taskForEdit.value.id){
			try {  
				const { status } = await useApiCall.delete(`tasks/${taskForEdit.value.id}`)  
				if (status === 200 || status === 201) {  
					removeTaskById(taskForEdit.value.id)  
				} 
			} catch (error) {  
				console.error(error)
			}
		}
	}

	// Поиск проектов
	const searchProjectsListRequest = async (payload: string): Promise<void> => {
		try{
			if(userStore.getUserInfo){
				setIsLoading(true)
				const {status, data} = await useApiCall.get(`projects?project=*${payload}*`)
				if(status === 200 || status === 201){
					setProjectList(data)
				}
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
    }
	}

	// Создание запроса на участие в проекте
	const projectParticipationRequest = async (payload: ParticipationDataProject): Promise<void> => {
		try {  
			const { status, data } = await useApiCall.post('project-request/', payload)  
			if (status === 200 || status === 201) {  
				console.log(data)
				// Сюда добавить оповещение об отправке заявки на участие в проекте
			} 
    } catch (error) {  
			console.error(error) 
    }
	}

	// Получение списка запросов
	const getProjectsParticipationRequest = async (payload: number | null, searchKey: string): Promise<void> => {
		if(payload !== null){
			try{
				const {status, data} = await useApiCall.get(`project-request?${searchKey}=${payload}`)
				if(status === 200 || status === 201){
					setNotifyProjectList(data)
				}
			} catch (error) {
				console.log(error)
			}
		}
	}

	// Удаление заявки на участие в проекте
	const deleteProjectsParticipationRequest = async (payload: number | null): Promise<void> => {
		if(payload){
			try{
				const {status} = await useApiCall.delete(`project-request/${payload}`)
				if(status === 200 || status === 201){
					removeNotifyProject(payload)
				}
			} catch (error) {
				console.log(error)
			}
		}
	}

	// Создание новой ссылки
	const linkCreateRequest = async (payload: Link): Promise<void> => {
		try {  
			const { status, data } = await useApiCall.post('links/', payload)  
			if (status === 200 || status === 201) {  
				if(!linksList.value){
					linksList.value = []
				}
				linksList.value.push(data)
			} 
    } catch (error) {  
			console.error(error) 
    }
	}

	// Получение списка ссылок
	const linksListRequest = async (projectId: number): Promise<void> => {
		try{
			setIsLoading(true)
			const {status, data} = await useApiCall.get(`links?projectId=${projectId}`)
			if(status === 200 || status === 201){
				setLinksList(data)
			}
		} catch (error) {
			console.log(error)
		} finally {
      setIsLoading(false)
    }
	}

	// Удаление выбранной ссылки
	const linkDeleteRequest = async (): Promise<void> => {
		if(linkForEdit.value && linkForEdit.value.id){
			try {  
				const { status } = await useApiCall.delete(`links/${linkForEdit.value.id}`)  
				if (status === 200 || status === 201) {  
					removeLinkById(linkForEdit.value.id)  
				} 
			} catch (error) {  
				console.error(error)
			}
		}
	}

	// Редактирование существующей ссылки
	const linkPatchRequest = async (payload: Link): Promise<void> => {
		try {  
			const { status, data } = await useApiCall.patch(`links/${payload.id}`, payload)  
			if (status === 200 || status === 201) {  
				updateLinksList(data) 
			} 
    } catch (error) {  
			console.error(error)
		}
	}
	
	// Получение списка стека  
	const stackListRequest = async (): Promise<Technology[]> => {  
		try {  
			setIsLoading(true)
			const { status, data } = await useApiCall.get('stack/') 
			if (status === 200 || status === 201) {  
				return data
			} else {  
				return [] 
			}  
		} catch (error) {  
			console.log(error) 
			return [] 
		} finally {  
			setIsLoading(false)  
		}  
	}

  return {
		projectsListRequest,
		projectInfoRequest,
		tasksListRequest,
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
		projectDeleteRequest,
		taskDeleteRequest,
		getProjectForEdit,
		searchProjectsListRequest,
		getUsersList,
		projectParticipationRequest,
		getProjectsParticipationRequest,
		getNotifyProjectList,
		deleteProjectsParticipationRequest,
		linkCreateRequest,
		linksListRequest,
		getLinksList,
		getIsLoading,
		linkDeleteRequest,
		setLinkForEdit,
		getLinkForEdit,
		linkPatchRequest,
		stackListRequest,
		searchUsersListRequest,
		getEtalonUsersList,
		setNotifyProjectList,
		addProjectToProjectList
  }
})