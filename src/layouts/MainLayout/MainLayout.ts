import { defineComponent, ref, computed } from 'vue'
import AsideComponent from '@/components/AsideComponent/AsideComponent.vue'  
import NavbarComponent from '@/components/NavbarComponent/NavbarComponent.vue' 
import { clearStorageItem } from '@/helpers/localStorageHelpers'  
import { useUserStore } from '@/store/user' 
import { useUxuiStore } from '@/store/uxui'  
import { useDataStore } from '@/store/data'  
import { useRouter } from 'vue-router' 
import CreateLayout from '@/components/CreateLayout/CreateLayout.vue'  
import ModalLayout from '@/components/ModalLayout/ModalLayout.vue' 
import InfoNotify from '@/components/InfoNotify/InfoNotify.vue'
import NotifyLayout from '@/components/NotifyLayout/NotifyLayout.vue'

export default defineComponent({  
  name: 'MainLayout',  
  components: {  
    AsideComponent,  
    NavbarComponent,  
    CreateLayout,  
    ModalLayout,  
    InfoNotify,
    NotifyLayout
  },  
  setup() {  
    const router = useRouter() 
    const userStore = useUserStore()  
    const uxuiStore = useUxuiStore()  
    const dataStore = useDataStore()  

    const logoutUserHandler = () => {  
      userStore.setIsLoginStatus(false)
      userStore.setUserInfo(null)  
      dataStore.setNotifyProjectList(null)
      dataStore.setSelectedProject(null)
      dataStore.setTasksList(null)
      clearStorageItem()  
      router.push({ name: 'login' })  
    }

    const isScrolling = ref(false) 
    const startX = ref<number>(0)  
    const startY = ref<number>(0) 
    const scrollX = ref<number>(0)  
    const scrollY = ref<number>(0) 

    const onMouseDown = (event: MouseEvent) => {  
      isScrolling.value = true 
      startX.value = event.clientX 
      startY.value = event.clientY 
      scrollX.value = window.scrollX 
      scrollY.value = window.scrollY

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp) 
    }

    const onMouseMove = (event: MouseEvent) => {  
      if (isScrolling.value) {  
        const deltaX = event.clientX - startX.value 
        const deltaY = event.clientY - startY.value  
        window.scrollTo(scrollX.value - 2 * deltaX, scrollY.value - 2 * deltaY) 
      }  
    }

    const onMouseUp = () => {  
      isScrolling.value = false
      document.removeEventListener('mousemove', onMouseMove) 
      document.removeEventListener('mouseup', onMouseUp) 
    }

    const closeNotify = () => {
      dataStore.setShowInvitationMessage(false)
    }

    const asideShowHandler = (): void => {
      uxuiStore.setShowAsidePanel(!uxuiStore.getShowAsidePanel)
    }

    const showNotifyPermission = computed(() => {  
      const notifyList = dataStore.getNotifyProjectList  
      return (dataStore.getShowInvitationMessage && Array.isArray(notifyList) && notifyList.length > 0) 
    })

    return {  
      logoutUserHandler,  
      uxuiStore,  
      CreateLayout,  
      ModalLayout,  
      onMouseDown,  
      onMouseUp,  
      closeNotify,
      asideShowHandler,
      showNotifyPermission
    }
  },  
})
