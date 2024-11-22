import { defineComponent, PropType } from 'vue'
import { Link } from '@/types/projects'
import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'
import {useOpenCreatePanelHandler} from '@/composables/useTaskPanelOpen'
import { getFormatDate } from '@/helpers/dateFormatter'

export default defineComponent({
  name: 'LinkCard',
  props: {  
		data: {  
			type: Object as PropType<Link>,
			required: true  
		}
  },
  setup() {
    const dataStore = useDataStore()
    const uxuiStore = useUxuiStore()

    const deleteLinkHandler = (payload: Link) => {
      dataStore.setLinkForEdit(payload)
      uxuiStore.setModalName('ModalDeleteLink')
    }

    return {
      deleteLinkHandler,
      useOpenCreatePanelHandler,
      getFormatDate
    }
  }
})
