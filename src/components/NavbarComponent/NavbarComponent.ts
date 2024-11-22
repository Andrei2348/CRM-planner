import { defineComponent, computed, ref } from 'vue'
import { useUserStore } from '@/store/user'
import { useUxuiStore } from '@/store/uxui'
import { useDataStore } from '@/store/data'
import SearchComponent from '@/components/SearchComponent/SearchComponent.vue'
import NotifyLayout from '@/components/NotifyLayout/NotifyLayout.vue'
import clickOutside from '@/directives/clickOutside'

export default defineComponent({
  name: 'NavbarComponent',
  components: {
    SearchComponent,
    NotifyLayout
  },
  directives: {
    clickOutside,
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
      showNotify.value = !showNotify.value
    }
    const closeNotify = () => {
      showNotify.value = false
    }

    const asideShowHandler = (): void => {
      uxuiStore.setShowAsidePanel(!uxuiStore.getShowAsidePanel)
    }

    const showNotifyPermission = computed(() => {  
      const notifyList = dataStore.getNotifyProjectList  
      return (showNotify.value && Array.isArray(notifyList) && notifyList.length > 0) 
    })
    
    return {
			userStore,
      uxuiStore,
      dataStore,
      logoutHandler,
      asideShowHandler,
      showNotify,
      toggleNotify,
      closeNotify,
      showNotifyPermission
		}
  },
})
