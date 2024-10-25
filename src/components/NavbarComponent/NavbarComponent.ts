import { defineComponent } from 'vue'
import { useUserStore } from '@/store/user'

export default defineComponent({
  name: 'NavbarComponent',
 
  setup() {
		const userStore = useUserStore()
    return {
			userStore
		}
  },
})