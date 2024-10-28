import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import useApiCall from '@/composables/useApiCall'
import { Project, Task, User } from '@/types/projects'
import { useUserStore } from '@/store/user'

export const useDataStore = defineStore('data', () => {
	const userStore = useUserStore()
	const projectList = ref<Project[] | null>(null)
	const isLoadingProjects = ref(true)
	const isLoadingTasks = ref(true)
	const isLoadingUsers = ref(true)
	const tasksList = ref<Task[] | null>(null)
	const usersList = ref<User[] | null>(null)

	const setIsLoadingProjects = (payload: boolean) => {
		isLoadingProjects.value = payload
	}

	const setIsLoadingTasks = (payload: boolean) => {
		isLoadingTasks.value = payload
	}

	const setIsLoadingUsers = (payload: boolean) => {
		isLoadingUsers.value = payload
	}

	const setProjectList = (payload: Project[] | null) => {  
		projectList.value = payload
	}

	const setTasksList = (payload: Task[] | null) => {
		tasksList.value = payload
	}

	const setUsersList = (payload: User[] | null) => {
		usersList.value = payload
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

	const taskPatchRequest = async (id: number): Promise<void> => {
		try{
			if(userStore.userInfo){
				setIsLoadingTasks(true)
				const {status, data} = await useApiCall.patch(`tasks?projectId=${id}`)
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
		canProceed
  }
})