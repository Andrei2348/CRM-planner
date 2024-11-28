import { defineComponent, onBeforeMount, computed, reactive, ref } from 'vue'
import { useUxuiStore } from '@/store/uxui'
import { useDataStore } from '@/store/data'
import { useUserStore } from '@/store/user'
import { UserItemResponse, UserItem, Technology } from '@/types/user'
import { validateEmail } from '@/helpers/validateEmail'


export default defineComponent({
  name: 'ProfileEdit',
  setup() {
    const uxuiStore = useUxuiStore()
    const dataStore = useDataStore()
    const userStore = useUserStore()
    const userInfo = ref<UserItemResponse>({ ...userStore.getUserInfo })

    const stackList = ref<Technology[] | null>(null)
    const selectedStack = ref<Technology[]>(userInfo.value.stack ?? [])

    const errors = reactive<UserItem>({  
      username: '',  
      email: '',  
      password: '',  
      repassword: '',  
    })

    const getInputData = (key: keyof UserItemResponse, value: string | Technology[]) => {
      if (userInfo.value && key !== 'id') {
        if (key === 'stack') {
          if (Array.isArray(value)) {
            userInfo.value[key] = value as Technology[]
          }
        } else if (typeof value === 'string') {
          userInfo.value[key] = value
        }
        validateForm()
      } 
    }
    
    const validateForm = () => {    
      if (userInfo.value && userInfo.value.email) {   
        errors.email = validateEmail(userInfo.value.email)
      }  
    }

    const safeTechnologies = computed(() => {  
      return stackList.value ? stackList.value : null;  
    })

    const disableButtonFlag = computed(() => {
      return !(
        errors.email === '' &&
        userInfo.value.email !== ''
      )
    })

    const handleCheckboxChange = (tech: Technology) => { 
      const index = selectedStack.value.findIndex(item => item.id === tech.id)
      if (index !== -1) { 
        selectedStack.value.splice(index, 1) 
      } else { 
        selectedStack.value.push(tech) 
      } 
    }

    const isSelected = (tech: Technology) => { 
      return selectedStack.value.some(item => item.id === tech.id)
    }

    const saveButtonHandler = async () => {
      userInfo.value.stack = selectedStack.value
      await userStore.updateUserInfoRequest(userInfo.value)
    }

    onBeforeMount(async () => {
      stackList.value = await dataStore.stackListRequest()
    })

    return {
      uxuiStore,
      dataStore,
      userStore,
      getInputData,
      safeTechnologies,
      disableButtonFlag,
      saveButtonHandler,
      handleCheckboxChange,
      isSelected
    }
  }
})
