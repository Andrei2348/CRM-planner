import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmptyListComponent',
  props: {  
		message: {  
			type: String,  
			required: true  
		},
  }, 

  setup() {
    return {
    }
  },
})