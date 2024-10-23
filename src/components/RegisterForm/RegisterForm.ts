import { defineComponent, computed, reactive } from 'vue'  
import { UserItem } from '@/types/user'  
import { EMPTY_USER } from '@/config/user' 
import { useUserStore } from '@/store/user'
import { validateEmail } from '@/helpers/validateEmail'
import { validateUsername } from '@/helpers/validateUsername'
import { validatePassword, doPasswordsMatch } from '@/helpers/validatePassword'

export default defineComponent({  
  name: 'LoginForm',  
  
  setup() {
    const userStore = useUserStore()
    const userData = reactive<UserItem>({ ...EMPTY_USER })
     
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
        errors.username = validateUsername(userData.username) ? '' : 'Имя должно быть от 2 до 15 символов и содержать только буквы, цифры, _ или -'  
        errors.email = validateEmail(userData.email) ? '' : 'Некорректный email'
        errors.password = validatePassword(userData.password)
        errors.repassword = userData.repassword && doPasswordsMatch(userData.password || '', userData.repassword) ? '' : 'Пароли не совпадают'
        }
         
        const disableButtonFlag = computed(() => {
      return (
        !errors.username &&
        !errors.email &&
        !errors.password &&
        !errors.repassword &&
        Object.values(userData).every((field) => field)
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
      console.log('register=', userData)
      const dataToSend = userData
      delete dataToSend.repassword;
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