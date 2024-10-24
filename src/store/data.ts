import { defineStore } from 'pinia'
import { ref } from 'vue'
import useApiCall from '@/composables/useApiCall'
import { Project } from '@/types/projects'
import { useUserStore } from '@/store/user'

export const useDataStore = defineStore('data', () => {
	const userStore = useUserStore()
	const projectList = ref<Project[] | null>(null)
	const isLoadingProjects = ref(true)

	const setIsLoadingProjects = (payload: boolean) => {
		isLoadingProjects.value = payload
	}

	const setProjectList = (payload: Project | null) => {    
    if (projectList.value === null) {  
			projectList.value = []  
    }    
    if (payload !== null) {  
			projectList.value.push(payload)
    } else {
			projectList.value = payload
		}
	}

	const checkIsInProject = (projects: Project[] | null) => {
		if(projects && userStore.userInfo){
			return projects.map(project => {  
				if(project.users.some(user => user.id === userStore.userInfo?.id)){
					setProjectList(project)
				}	
			})
		}  
	}
	
	const projectsListRequest = async (): Promise<void> => {
		try{
			setIsLoadingProjects(true)
			const {status, data} = await useApiCall.get('projects')
			if(status === 200 || status === 201){
				checkIsInProject(data)
			}
		} catch (error) {
			console.log(error)
		} finally {
      setIsLoadingProjects(false)
    }
	}
  return {
		projectsListRequest,
		isLoadingProjects,
		projectList,
		setProjectList
  }
})