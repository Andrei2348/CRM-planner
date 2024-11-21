import { defineComponent, PropType } from 'vue'
import { Link } from '@/types/projects'

export default defineComponent({
  name: 'LinkCard',
  props: {  
		data: {  
			type: Object as PropType<Link>,
			required: true  
		}
  },
  setup() {
    return {}
  }
})
