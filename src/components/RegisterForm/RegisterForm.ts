import { defineComponent, computed, reactive } from 'vue'  
import { UserItemResponse, UserItem } from '@/types/user'  
import { EMPTY_USER } from '@/config/user' 
import { useUserStore } from '@/store/user'
import { validateEmail } from '@/helpers/validateEmail'
import { validateUsername } from '@/helpers/validateUsername'
import { validatePassword, doPasswordsMatch } from '@/helpers/validatePassword'

export default defineComponent({  
  name: 'LoginForm',  
  
  setup() {
    const userStore = useUserStore()
    const userData = reactive<UserItemResponse>({ ...EMPTY_USER })
     
    const errors = reactive<UserItem>({  
      username: '',  
      email: '',  
      password: '',  
      repassword: '',  
    })

    const touched = reactive({
      username: false,
      email: false,
      password: false,
      repassword: false,
    })

    const validateForm = () => {  
      errors.username = userData.username ? validateUsername(userData.username) : ''
      errors.email = userData.email ? validateEmail(userData.email) : ''
      errors.password = userData.password ? validatePassword(userData.password) : ''
      errors.repassword = (userData.password && userData.repassword) 
        ? doPasswordsMatch(userData.password, userData.repassword || '') 
        : ''
    }
    
    const disableButtonFlag = computed(() => {  
      const isErrorEmpty = Object.values(errors).every(error => error === '')
      
      const userKeys: (keyof UserItem)[] = ['username', 'email', 'password', 'repassword'] 
    
      const isUserDataValid = userKeys.every(key => {  
        const value = userData[key]
        return value !== undefined && value !== '' 
      })
    
      return isErrorEmpty && isUserDataValid
    })

    const getInputData = (key: keyof UserItem, value: string) => {
      userData[key] = value
      validateForm()
    }

    const handleFocus = (field: keyof UserItem) => {
      touched[field] = true
    }

    const displayErrors = computed(() => {
      return {
        username: touched.username ? errors.username : '',
        email: touched.email ? errors.email : '',
        password: touched.password ? errors.password : '',
        repassword: touched.repassword ? errors.repassword : '',
      }
    })

    const registerUserHandler = () => {
      const dataToSend = userData
      delete dataToSend.repassword
      userStore.userRegisterRequest('register', dataToSend)
    }

    return {  
      registerUserHandler,
      disableButtonFlag,
      getInputData,
      handleFocus,
      displayErrors
    }  
  },  
})