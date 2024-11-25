import { defineComponent, onBeforeMount, computed, ref } from 'vue'
import MainLayout from "@/layouts/MainLayout/MainLayout.vue"
import { useUxuiStore } from '@/store/uxui'
import { useDataStore } from '@/store/data'
import { useUserStore } from '@/store/user'
import { Technology } from '@/types/user'


export default defineComponent({
  name: 'SettingsView',
  components: {
    MainLayout,
  },
  setup() {
    const userStore = useUserStore()
    const uxuiStore = useUxuiStore()
    const dataStore = useDataStore()

    const stackList = ref<Technology[] | null>(null)

    // console.log(userStore.getUserInfo)
    const safeTechnologies = computed(() => {  
      return stackList.value ? stackList.value : null;  
    })
      
    onBeforeMount(async () => {
      uxuiStore.setSelectedPage(5)
      stackList.value = await dataStore.stackListRequest()
    })

    return {
      uxuiStore,
      dataStore,
      safeTechnologies
    }
  }
})
