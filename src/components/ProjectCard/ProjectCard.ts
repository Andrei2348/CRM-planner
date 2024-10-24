import { defineComponent, PropType } from 'vue'
import { Project } from '@/types/projects'

export default defineComponent({
  name: 'ProjectCard',
  props: {  
		project: {  
			type: Object as PropType<Project>,  
			required: true  
		},
  }, 
  setup() {
    return {
    }
  },
})