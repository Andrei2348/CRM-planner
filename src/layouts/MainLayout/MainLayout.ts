import { defineComponent } from 'vue'
import AsideComponent from '@/components/AsideComponent/AsideComponent.vue'
import NavbarComponent from '@/components/NavbarComponent/NavbarComponent.vue'
import { clearStorageItem } from '@/helpers/localStorageHelpers'
import { useUserStore } from '@/store/user'
import { useUxuiStore } from '@/store/uxui'
import { useRouter } from 'vue-router'
import CreateLayout from '@/components/CreateLayout/CreateLayout.vue'
import ModalLayout from '@/components/ModalLayout/ModalLayout.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    AsideComponent,
    NavbarComponent,
    CreateLayout,
    ModalLayout
  },
  setup() {
    const router = useRouter()
    const userStore = useUserStore()
    const uxuiStore = useUxuiStore()


    const logoutUserHandler = () => {
      userStore.setIsLoginStatus(false)
      userStore.setUserInfo(null)
      clearStorageItem()
      router.push({ name: 'login' })
    }

    return {
      logoutUserHandler,
      uxuiStore,
      CreateLayout,
      ModalLayout
    }
  }
})
