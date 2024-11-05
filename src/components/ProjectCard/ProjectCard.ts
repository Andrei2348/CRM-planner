import { defineComponent, PropType, computed } from 'vue'
import { Project } from '@/types/projects'
import { useUserStore } from '@/store/user'
import { useDataStore } from '@/store/data'
import { useRouter } from 'vue-router'

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
    const router = useRouter()

    const isTeamLead = computed(() => props.project.teamLead === userStore.getUserInfo?.id);  

		const goToProjectHandler = (payload: Project) => {  
			userStore.setIsTeamLead(isTeamLead.value)
      dataStore.setSelectedProject(payload)
			router.push(`/project/${props.project.id}`)  
		};  
    return {
      userStore,
      goToProjectHandler,
      isTeamLead
    }
  },
})