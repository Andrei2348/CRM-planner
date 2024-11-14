import { defineComponent, PropType, ref } from 'vue'
import { User } from '@/types/user'
import { useUserStore } from '@/store/user'
import { UserItemResponse } from '@/types/user'


export default defineComponent({
  name: 'UserCard',
  props: {  
		user: {  
			type: Object as PropType<User>,  
			required: true  
		},
  }, 

  setup(props) {
    const userStore = useUserStore()
    const userInfo = ref<UserItemResponse | null | undefined>(null)

    const getUserInfoHandler = async () => { 
      if (userInfo.value === null){
        userInfo.value = await userStore.getUserInfoRequest(props.user.id)
      }   
    } 

    return {
      userStore,
      getUserInfoHandler
    }
  },
})