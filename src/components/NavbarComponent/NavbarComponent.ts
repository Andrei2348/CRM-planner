import { defineComponent } from 'vue'
import { useUserStore } from '@/store/user'
import { useUxuiStore } from '@/store/uxui'

export default defineComponent({
  name: 'NavbarComponent',
 
  setup(_, { emit }) {
		const userStore = useUserStore()
    const uxuiStore = useUxuiStore()

    const logoutHandler = (): void => {
      emit('logoutUserHandler')
    }

    const asideShowHandler = (): void => {
      uxuiStore.setshowAsidePanel(!uxuiStore.getshowAsidePanel)
    }
    
    return {
			userStore,
      logoutHandler,
      asideShowHandler
		}
  },
})