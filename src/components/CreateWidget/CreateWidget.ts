import { defineComponent } from 'vue'
import { useDataStore } from '@/store/data'

export default defineComponent({
  name: 'CreateWidget',
  setup() {
    const dataStore = useDataStore()
    return {
      dataStore
    }
  },
})