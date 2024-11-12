import { defineComponent, PropType, computed } from 'vue'
import { Project } from '@/types/projects'
import { useUserStore } from '@/store/user'
import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'
import { useRouter } from 'vue-router'
import { useOpenCreatePanelHandler } from '@/composables/useTaskPanelOpen'

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

    const deleteProjectHandler = (id: number) => {
      console.log(id)
      uxuiStore.setModalName('ModalDeleteProject')
    }

    return {
      userStore,
      goToProjectHandler,
      isTeamLead,
      useOpenCreatePanelHandler,
      deleteProjectHandler
    }
  },
})