import { defineComponent, PropType } from 'vue'
import { Project } from '@/types/projects'
import { useUserStore } from '@/store/user'

export default defineComponent({
  name: 'ProjectCard',
  props: {  
		project: {  
			type: Object as PropType<Project>,  
			required: true  
		},
  }, 
  setup() {
    const userStore = useUserStore()
    return {
      userStore
    }
  },
})