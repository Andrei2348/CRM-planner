import { defineComponent } from 'vue' 
import { useDataStore } from '@/store/data'
import { useModalClose } from '@/composables/useModalClose'

export default defineComponent({  
  name: 'ModalDeleteLink',  
  
  setup() { 
    const dataStore = useDataStore()

    const suggestDeleteHandler = async () => {
      await dataStore.linkDeleteRequest()
      useModalClose()
    }

    return {  
      useModalClose,
      suggestDeleteHandler
    }  
  },  
})