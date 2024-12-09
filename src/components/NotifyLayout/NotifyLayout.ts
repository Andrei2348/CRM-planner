import { defineComponent } from 'vue'
import { useDataStore } from '@/store/data'
import NotifyMessage from '@/components/NotifyMessage/NotifyMessage.vue' 

export default defineComponent({
  name: 'NotifyLayout',
  components: {
    NotifyMessage
  },
  setup(_, { emit }) {
    const dataStore = useDataStore()

    const closeNotifyHandler = ():void => {
      emit('closeNotify')
    }
    return {  
      dataStore,
      closeNotifyHandler
    }
  },
})
