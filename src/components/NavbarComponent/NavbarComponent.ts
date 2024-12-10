import { defineComponent, ref } from 'vue'
import { useUserStore } from '@/store/user'
import { useUxuiStore } from '@/store/uxui'
import { useDataStore } from '@/store/data'
import SearchComponent from '@/components/SearchComponent/SearchComponent.vue'

export default defineComponent({
  name: 'NavbarComponent',
  components: {
    SearchComponent,
  },
  setup(_, { emit }) {
		const userStore = useUserStore()
    const uxuiStore = useUxuiStore()
    const dataStore = useDataStore()

    const showNotify = ref(false)

    const logoutHandler = (): void => {
      emit('logoutUserHandler')
    }

    const toggleNotify = () => { 
      dataStore.setShowInvitationMessage(!dataStore.getShowInvitationMessage)
    }
    const closeNotify = () => {
      dataStore.setShowInvitationMessage(false)
    }

    const asideShowHandler = (): void => {
      uxuiStore.setShowAsidePanel(!uxuiStore.getShowAsidePanel)
    }

    return {
			userStore,
      uxuiStore,
      dataStore,
      logoutHandler,
      asideShowHandler,
      showNotify,
      toggleNotify,
      closeNotify,
		}
  },
})

