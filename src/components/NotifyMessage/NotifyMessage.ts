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
      await dataStore.projectInfoRequest(data.projectId)
      const selectedProject = dataStore.getSelectedProject
    
      if (selectedProject && data.id) {
        projectInfo.value = selectedProject
    
        const userId = data.invitation === 'project' ? data.user_id : data.invitationId
        if (userId !== undefined) {
          const newUser = {
            id: userId,
            username: data.username,
          }
    
          if (!projectInfo.value.users.some(user => user.id === newUser.id)) {
            projectInfo.value.users.push(newUser)
            await dataStore.projectPatchRequest(projectInfo.value, data.invitation)
          }
    
          await dataStore.deleteProjectsParticipationRequest(data.id)
        }
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
