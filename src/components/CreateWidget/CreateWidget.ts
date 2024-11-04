import { defineComponent } from 'vue'
import { useUxuiStore } from '@/store/uxui'

export default defineComponent({
  name: 'CreateWidget',
  setup() {
    const uxuiStore = useUxuiStore()
    return {
      uxuiStore
    }
  },
})