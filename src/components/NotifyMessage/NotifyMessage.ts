import { defineComponent, onBeforeUnmount, PropType, ref } from 'vue'
import { ParticipationDataProject, Project } from '@/types/projects'
import { useDataStore } from '@/store/data'

export default defineComponent({
  name: 'NotifyMessage',
  props: {  
		data: {  
			type: Object as PropType<ParticipationDataProject>,  
			required: true  
		}
  },
  setup() {
    const dataStore = useDataStore()
    const projectInfo = ref<Project | null>(null)

    const cancelHandler = (id: number | undefined) => {
      if(id){
        dataStore.deleteProjectsParticipationRequest(id)
      }
    }

    const approvalHandler = async (data: ParticipationDataProject) => {  
      await dataStore.projectInfoRequest(data.project_id)  
      const selectedProject = dataStore.getSelectedProject  
    
      if (selectedProject && data.id) {  
        projectInfo.value = selectedProject  
    
        const newUser = {  
          id: data.user_id,  
          username: data.user_name  
        }  
    
        const userExists = projectInfo.value.users.some(user => user.id === newUser.id) 

        if (!userExists) {  
          projectInfo.value.users.push(newUser)
          await dataStore.projectPatchRequest(projectInfo.value)  
        }    
        await dataStore.deleteProjectsParticipationRequest(data.id) 
      }  
    }

    onBeforeUnmount(() => {
      dataStore.setSelectedProject(null)
    })
    
    return {  
      cancelHandler,
      approvalHandler
    }
  },
})
