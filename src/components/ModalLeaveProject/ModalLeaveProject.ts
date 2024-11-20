import { defineComponent } from 'vue' 
import { useDataStore } from '@/store/data'
import { useUserStore } from '@/store/user'
import { useModalClose } from '@/composables/useModalClose'
import { Project } from '@/types/projects'
import { User } from '@/types/user'

export default defineComponent({  
  name: 'ModalLeaveProject',  
  
  setup() { 
    const dataStore = useDataStore()
    const userStore = useUserStore()
    const suggestLeaveHandler = async () => {
      try {
        if(dataStore.getProjectForEdit && userStore.getUserInfo){
          const projectInfo: Project = dataStore.getProjectForEdit
          const userInfo: User = userStore.getUserInfo 
          projectInfo.users =  projectInfo.users.filter(user => user.id !== userInfo.id)
          await dataStore.projectPatchRequest(projectInfo)
          await dataStore.projectsListRequest()
        }
      } catch (error) {  
        console.error('Ошибка при удалении пользователя:', error)  
      } 
      finally {
        useModalClose()
      }
    }

    return {  
      useModalClose,
      suggestLeaveHandler
    }  
  },  
});