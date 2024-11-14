import { defineComponent, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useUxuiStore } from '@/store/uxui'
import SearchComponent from '@/components/SearchComponent/SearchComponent.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'NavbarComponent',
  components: {
    SearchComponent
  },
  setup(_, { emit }) {
		const userStore = useUserStore()
    const uxuiStore = useUxuiStore()
    const route = useRoute()

    const logoutHandler = (): void => {
      emit('logoutUserHandler')
    }

    const asideShowHandler = (): void => {
      uxuiStore.setShowAsidePanel(!uxuiStore.getShowAsidePanel)
    }

    const showSearch = computed(() => {   
      return route.path === '/'  
    });
    
    return {
			userStore,
      uxuiStore,
      logoutHandler,
      asideShowHandler,
      showSearch
		}
  },
})