import { defineComponent, PropType, computed } from 'vue'
import { Project } from '@/types/projects'
import { useUserStore } from '@/store/user'
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
    const router = useRouter()

    const isTeamLead = computed(() => props.project.teamLead === userStore.userInfo?.id);  

		const goToProjectHandler = () => {  
			userStore.setIsTeamLead(isTeamLead.value);  
			router.push(`/project/${props.project.id}`);  
		};  
    return {
      userStore,
      goToProjectHandler,
      isTeamLead
    }
  },
})