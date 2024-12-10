import { defineComponent, PropType, computed, ref } from 'vue'
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
    const isDisabled = ref(false)

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

    const projectRequestHandler = async (payload: Project) => {  
      isDisabled.value = true
      const participationData: ParticipationDataProject = {  
        projectId: payload.id as number, 
        projectName: payload.project, 
        username: userStore.getUserInfo?.username as string,
        teamleadId: payload.user_id as number,
        user_id: userStore.getUserInfo?.id as number,  
        invitation: 'project'
      } 
      
      await dataStore.projectParticipationRequest(participationData)  
    }

    const leaveTheProjectHandler = (payload: Project) => {
      dataStore.setProjectForEdit(payload)
      uxuiStore.setModalName('ModalLeaveProject')
    }

    return {
      userStore,
      goToProjectHandler,
      isTeamLead,
      isDisabled,
      useOpenCreatePanelHandler,
      deleteProjectHandler,
      isUserInProject,
      projectRequestHandler,
      leaveTheProjectHandler
    }
  },
})