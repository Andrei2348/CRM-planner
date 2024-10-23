import { defineComponent } from 'vue'
import AsideComponent from '@/components/AsideComponent/AsideComponent.vue'
import { clearStorageItem } from '@/helpers/localStorageHelpers'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',
  components: {
    AsideComponent
  },
  setup() {
    const router = useRouter()
    const userStore = useUserStore()

    const logoutUserHandler = () => {
      userStore.setIsLoginStatus(false)
      userStore.setUserInfo(null)
      clearStorageItem()
      router.push({ name: 'login' })
    }

    return {
      logoutUserHandler
    }
  }
})
