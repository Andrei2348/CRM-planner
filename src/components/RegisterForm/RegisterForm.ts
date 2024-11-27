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
      if(userData.username){
        errors.username = validateUsername(userData.username) 
      }
      if(userData.email){
        errors.email = validateEmail(userData.email)
      }
      if(userData.password){
        errors.password = validatePassword(userData.password)
      }
      if(userData.password && userData.repassword){
        errors.repassword = doPasswordsMatch(userData.password, userData.repassword || '')
      }
    }
         
    // переписать более  лаконично
    const disableButtonFlag = computed(() => {
      return (
        errors.username === '' &&
        errors.email === '' &&
        errors.password === '' &&
        errors.repassword === '' &&
        userData.username !== '' && 
        userData.email !== '' && 
        userData.password !== '' &&
        userData.repassword !== ''
      )
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