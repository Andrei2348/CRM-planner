import { defineComponent, onBeforeMount, computed, ref } from 'vue'   
import { Project } from '@/types/projects'   
import { useDataStore } from '@/store/data'  
import { useUserStore } from '@/store/user'
import { useCloseCreatePanelHandler } from '@/composables/useTaskPanelOpen'

export default defineComponent({  
  name: 'CreateProjectComponent',  
    
  setup() {   
    const dataStore = useDataStore() 
    const userStore = useUserStore()

    const editFlag = ref(false)
    const blankDataProject = ref<Project>({     
      name: '',
      description: '',
      users: [
        {
          id: userStore.getUserInfo ? userStore.getUserInfo.id : 0,
          username: userStore.getUserInfo ? userStore.getUserInfo.username : ''
        }
      ],
      color: '#FF5733'
    })

    const resetForm = (): void => {  
      blankDataProject.value.name = ''
      blankDataProject.value.description = ''
      blankDataProject.value.users = [
        {
          id: userStore.getUserInfo ? userStore.getUserInfo.id : 0,
          username: userStore.getUserInfo ? userStore.getUserInfo.username : ''
        }
      ]    
      blankDataProject.value.color = '#FF5733'
    }
    
    const getInputData = (key: keyof Project, value: string | number): void => {   
      (blankDataProject.value[key] as string | number) = value  
    } 
    
    const createProjectHandler = (): void => {
      if(blankDataProject.value.id){
        dataStore.projectPatchRequest(blankDataProject.value)
      } else {
        dataStore.projectCreateRequest(blankDataProject.value)
      }
      resetForm()
      useCloseCreatePanelHandler()
    }  
 
    const disableButtonFlag = computed(() => {  
      return !(blankDataProject.value.name && 
        blankDataProject.value.description)  
    })  

    onBeforeMount(() => {  
      if(dataStore.getProjectForEdit !== null){
        blankDataProject.value = {...dataStore.getProjectForEdit}
        editFlag.value = true
      } else {
        editFlag.value = false
      }
    })

    return {    
      getInputData,
      createProjectHandler,
      userStore,
      blankDataProject,
      disableButtonFlag,
      editFlag
    }  
  },  
})