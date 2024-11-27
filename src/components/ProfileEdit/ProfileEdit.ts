import { defineComponent, onBeforeMount, computed, reactive, ref } from 'vue'
import { useUxuiStore } from '@/store/uxui'
import { useDataStore } from '@/store/data'
import { useUserStore } from '@/store/user'
import { UserItemResponse, UserItem, Technology } from '@/types/user'
import { validateEmail } from '@/helpers/validateEmail'
import { validateUsername } from '@/helpers/validateUsername'


export default defineComponent({
  name: 'ProfileEdit',
  setup() {
    const uxuiStore = useUxuiStore()
    const dataStore = useDataStore()
    const userStore = useUserStore()
    const userInfo = ref<UserItemResponse>({ ...userStore.getUserInfo })

    const stackList = ref<Technology[] | null>(null)

    const errors = reactive<UserItem>({  
      username: '',  
      email: '',  
      password: '',  
      repassword: '',  
    })

    const getInputData = (key: keyof UserItemResponse, value: string) => {
      if (userInfo.value && key !== 'id') {  
        userInfo.value[key] = value
        validateForm()
      }  
    }

    const validateForm = () => {    
      if (userInfo.value && userInfo.value.username && userInfo.value.email) {  
        errors.username = validateUsername(userInfo.value.username) 
        errors.email = validateEmail(userInfo.value.email)
      }  
    }

    const safeTechnologies = computed(() => {  
      return stackList.value ? stackList.value : null;  
    })

    // переписать более  лаконично
    const disableButtonFlag = computed(() => {
      return !(
        errors.email === '' &&
        userInfo.value.username !== '' &&
        userInfo.value.email !== ''
      )
    })

    onBeforeMount(async () => {
      stackList.value = await dataStore.stackListRequest()
    })

    return {
      uxuiStore,
      dataStore,
      userStore,
      getInputData,
      safeTechnologies,
      disableButtonFlag
    }
  }
})
