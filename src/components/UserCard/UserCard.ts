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

  setup(props, { emit }) {
    const userStore = useUserStore()
    const userInfo = ref<UserItemResponse | null | undefined>(null)
    const disabledFlag = ref(false)

    const getUserInfoHandler = async () => { 
      disabledFlag.value = true
      if (userInfo.value === null){
        userInfo.value = await userStore.getUserInfoRequest(props.user.id)
      }   
    } 

    const deleteUserInfoHandler = async (id: number) => {    
      emit('deleteUserHandler', id)
    }

    return {
      userStore,
      getUserInfoHandler,
      userInfo,
      disabledFlag,
      deleteUserInfoHandler
    }
  },
})