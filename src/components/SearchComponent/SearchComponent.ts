import { watch, defineComponent, ref } from 'vue' 
import { useDataStore } from '@/store/data'
import debounce from 'lodash/debounce'

export default defineComponent({  
  name: 'SearchComponent',  
  
  setup() { 
    const dataStore = useDataStore()
    const searchParam = ref<string>('')

    const searchProjectHandler = debounce((event: Event) => {
      const target = event.target as HTMLInputElement
      searchParam.value = target.value
    }, 800)
  
    watch(searchParam, (newVal: string) => {  
      if (newVal.trim() === '') {   
        dataStore.projectsListRequest() 
      } else {   
        dataStore.searchProjectsListRequest(newVal)
      }  
    })  

    return {  
      searchProjectHandler
    }  
  },  
})