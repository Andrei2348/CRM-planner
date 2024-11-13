import { defineComponent } from 'vue' 
import { useUxuiStore } from '@/store/uxui'
import { useDataStore } from '@/store/data'

export default defineComponent({  
  name: 'ModalDeleteProject',  
  
  setup() { 
    const uxuiStore = useUxuiStore()
    const dataStore = useDataStore()

    const closeModalHandler = () => {
      uxuiStore.setModalName('')
      dataStore.setProjectForEdit(null)
    }

    const suggestDeleteHandler = async () => {
      await dataStore.projectDeleteRequest()
    }

    return {  
      closeModalHandler,
      suggestDeleteHandler
    }  
  },  
});