import { defineComponent } from 'vue'
import {useOpenCreatePanelHandler} from '@/composables/useTaskPanelOpen'

export default defineComponent({
  name: 'CreateWidget',
  setup() {
    return {
      useOpenCreatePanelHandler
    }
  },
})