import { defineComponent, onBeforeMount, computed, ref, watch } from 'vue'   
import { Project } from '@/types/projects'  
import { User } from '@/types/user'
import { useRoute } from 'vue-router'  
import { useDataStore } from '@/store/data'  
import { useUxuiStore } from '@/store/uxui'
import { useUserStore } from '@/store/user'
import SelectMenu from '@/components/SelectMenu/SelectMenu.vue'
import { useCloseCreatePanelHandler } from '@/composables/useTaskPanelOpen'

export default defineComponent({  
  name: 'CreateProjectComponent',  
    
  setup() {  
    const route = useRoute()  
    const dataStore = useDataStore() 
    const uxuiStore = useUxuiStore() 
    const userStore = useUserStore()

    const editFlag = ref(false)
    const blankDataProject = ref<Project>({     
      name: '',
      teamLead: userStore.getUserInfo?.id ?? null,
      description: '',
      users: [],
      color: '#FF5733'
    })

    const resetForm = (): void => {  
      blankDataProject.value.name = ''
      blankDataProject.value.description = ''
      blankDataProject.value.users = []    
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

    const getTitleById = (id: number | null) => {   
      if(dataStore.usersList){  
        const getTitle = dataStore.usersList.find(item => item.id === id)   
        return getTitle ? getTitle.username : null  
      }  
    }  

    const disableButtonFlag = computed(() => {  
      return !(blankDataProject.value.name && 
        blankDataProject.value.description)  
    })  

    watch(() => dataStore.usersList, (newUsersList) => {  
      if (newUsersList && newUsersList.length > 0) {  
        blankDataTask.value.executorId = newUsersList[0].id  
      } else {  
        blankDataTask.value.executorId = null  
      }  
    }, { immediate: true })

    watch(() => uxuiStore.getCreatePanelName, (newValue) => {  
      if (newValue) {  
        resetForm()
      }  
    })

    onBeforeMount(() => {  
      resetForm()
      if(dataStore.getTaskForEdit === null){
        blankDataTask.value.projectId = Number(route.params.id);  
        blankDataTask.value.timeCreate = new Date().toLocaleDateString('en-CA')
      } else {
        blankDataTask.value = {...dataStore.getTaskForEdit}
        editFlag.value = true
      }
    })

    return {    
      changeSelectHandler,  
      getInputData,  
      blankDataTask,  
      dataStore,  
      disableButtonFlag,  
      createProjectHandler,  
      getTitleById,
      changeExecutorHandler,
      uxuiStore,
      editFlag
    }  
  },  
})