import { defineComponent, PropType } from 'vue'
import { ParticipationDataProject } from '@/types/projects'
import { useDataStore } from '@/store/data'

export default defineComponent({
  name: 'NotifyMessage',
  props: {  
		data: {  
			type: Object as PropType<ParticipationDataProject>,  
			required: true  
		}
  },
  setup() {
    const dataStore = useDataStore()

    const cancelHandler = (id: number | undefined) => {
      if(id){
        dataStore.deleteProjectsParticipationRequest(id)
      }
    }

    const approvalHandler = (id: number | undefined) => {
      console.log(id)
    }

    return {  
      cancelHandler,
      approvalHandler
    }
  },
})
