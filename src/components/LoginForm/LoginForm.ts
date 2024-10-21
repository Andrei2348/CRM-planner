import { defineComponent, reactive } from 'vue'  
import { UserLoginItem } from '@/types/user'  
import { EMPTY_LOGIN_FORM } from '@/config/user'  

export default defineComponent({  
  name: 'LoginForm',  
  
  setup() {  
    const userData = reactive<UserLoginItem>({ ...EMPTY_LOGIN_FORM })  

    const getInputData = (key: keyof UserLoginItem, value: string) => {  
      userData[key] = value  
    }  
    
    return {  
      getInputData  
    }  
  },  
})