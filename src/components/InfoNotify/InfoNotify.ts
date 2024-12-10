import { defineComponent, watch } from 'vue'
import {useOpenCreatePanelHandler} from '@/composables/useTaskPanelOpen'
import { useDataStore } from '@/store/data'

export default defineComponent({
  name: 'InfoNotify',
  setup() {
    const dataStore = useDataStore()
    
    watch(  
      () => dataStore.getInfoNotify,  
      (newValue) => {  
        if (newValue && newValue.message.trim() !== '') {  
          setTimeout(() => {  
            dataStore.setInfoNotify(null) 
          }, 3000) 
        }  
      }  
    )
    return {
      useOpenCreatePanelHandler,
      dataStore
    }
  },
})
