import { defineComponent, onBeforeMount, computed, ref } from 'vue'
import { useUxuiStore } from '@/store/uxui'
import { useDataStore } from '@/store/data'
import { Technology } from '@/types/user'


export default defineComponent({
  name: 'ProfileEdit',
  setup() {
    const uxuiStore = useUxuiStore()
    const dataStore = useDataStore()

    const stackList = ref<Technology[] | null>(null)

    const safeTechnologies = computed(() => {  
      return stackList.value ? stackList.value : null;  
    })
      
    onBeforeMount(async () => {
      stackList.value = await dataStore.stackListRequest()
    })

    return {
      uxuiStore,
      dataStore,
      safeTechnologies
    }
  }
})
