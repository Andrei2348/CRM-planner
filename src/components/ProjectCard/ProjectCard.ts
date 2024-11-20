import { defineComponent, PropType, computed } from 'vue'
import { Project } from '@/types/projects'
import { useUserStore } from '@/store/user'
import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'
import { useRouter } from 'vue-router'
import { useOpenCreatePanelHandler } from '@/composables/useTaskPanelOpen'
import { ParticipationDataProject } from '@/types/projects'

export default defineComponent({
  name: 'ProjectCard',
  props: {  
		project: {  
			type: Object as PropType<Project>,  
			required: true  
		},
  }, 
  setup(props) {
    const userStore = useUserStore()
    const dataStore = useDataStore()
    const uxuiStore = useUxuiStore()
    const router = useRouter()

    const isTeamLead = computed(() => props.project.user_id === userStore.getUserInfo?.id);  

		const goToProjectHandler = (payload: Project) => {  
			userStore.setIsTeamLead(isTeamLead.value)
      dataStore.setSelectedProject(payload)
			router.push(`/project/${props.project.id}`)  
		}

    const deleteProjectHandler = (payload: Project) => {
      dataStore.setProjectForEdit(payload)
      uxuiStore.setModalName('ModalDeleteProject')
    }

    const isUserInProject = computed(() => {  
      return props.project.users.some(user => user.id === userStore.getUserInfo?.id)  
    })

    const projectRequestHandler = (payload: Project) => {  
      
      const participationData: ParticipationDataProject = {  
        project_id: payload.id as number, 
        project_name: payload.name, 
        user_id: userStore.getUserInfo?.id as number,  
        user_name: userStore.getUserInfo?.username as string,
        teamlead_id: payload.user_id as number 
      } 
      
      dataStore.projectParticipationRequest(participationData)  
    }

    const leaveTheProjectHandler = (payload: Project) => {
      dataStore.setProjectForEdit(payload)
      uxuiStore.setModalName('ModalLeaveProject')
    }

    return {
      userStore,
      goToProjectHandler,
      isTeamLead,
      useOpenCreatePanelHandler,
      deleteProjectHandler,
      isUserInProject,
      projectRequestHandler,
      leaveTheProjectHandler
    }
  },
})