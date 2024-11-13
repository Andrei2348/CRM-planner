import { defineComponent } from 'vue'
import { useUserStore } from '@/store/user'
import { useUxuiStore } from '@/store/uxui'
import SearchComponent from '@/components/SearchComponent/SearchComponent.vue'

export default defineComponent({
  name: 'NavbarComponent',
  components: {
    SearchComponent
  },
  setup(_, { emit }) {
		const userStore = useUserStore()
    const uxuiStore = useUxuiStore()

    const logoutHandler = (): void => {
      emit('logoutUserHandler')
    }

    const asideShowHandler = (): void => {
      uxuiStore.setShowAsidePanel(!uxuiStore.getShowAsidePanel)
    }
    
    return {
			userStore,
      uxuiStore,
      logoutHandler,
      asideShowHandler
		}
  },
})