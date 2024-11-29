import { watch, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'
import debounce from 'lodash/debounce'

export default defineComponent({
  name: 'SearchComponent',
  
  setup() {
    const route = useRoute()
    const dataStore = useDataStore()
    const uxuiStore = useUxuiStore()
    const searchParam = ref<string>('')

    const searchHandler = debounce((event: Event) => {
      searchParam.value = (event.target as HTMLInputElement).value
    }, 800)
  
    watch(searchParam, (newVal: string) => {
      const page = uxuiStore.getSelectedPage
      if (newVal.trim() === '') {
        page === 1 ? dataStore.projectsListRequest() : dataStore.usersListRequest(Number(route.params.id))
      } else {
        page === 1 ? dataStore.searchProjectsListRequest(newVal) : dataStore.searchUsersListRequest(newVal)
      }
    })

    return {  
      searchHandler
    }
  },
})
