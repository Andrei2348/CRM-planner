import { defineComponent, PropType, ref } from 'vue'
import { User } from '@/types/user'
import { useUserStore } from '@/store/user'
import { useDataStore } from '@/store/data'
import { UserItemResponse } from '@/types/user'
import { ParticipationDataProject } from '@/types/projects'

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
    const dataStore = useDataStore()
    const userInfo = ref<UserItemResponse | null | undefined>(null)
    const disabledFlag = ref(false)

    const getUserInfoHandler = async () => { 
      disabledFlag.value = true
      if (userInfo.value === null){
        userInfo.value = await userStore.getUserInfoRequest(props.user.id)
      }   
    } 

    const checkContainsUser = (user: User) => {  
      if(dataStore.getEtalonUsersList) {
        return dataStore.getEtalonUsersList.some(item => item.id === user.id)
      }
      return false;   
    }

    const deleteUserInfoHandler = async (id: number) => {    
      emit('deleteUserHandler', id)
    }

    const projectRequestHandler = async(user: User) => {
      if(dataStore.getSelectedProject && dataStore.getSelectedProject.id){
        const participationData: ParticipationDataProject = {  
          project_id: dataStore.getSelectedProject.id, 
          project_name: dataStore.getSelectedProject.project, 
          user_id: user.id as number,  
          user_name: user.username as string,
          teamleadId: dataStore.getSelectedProject.user_id as number 
        } 
        
        await dataStore.userParticipationRequest(participationData)
      }
    }

    return {
      userStore,
      getUserInfoHandler,
      userInfo,
      disabledFlag,
      deleteUserInfoHandler,
      checkContainsUser,
      projectRequestHandler
    }
  },
})