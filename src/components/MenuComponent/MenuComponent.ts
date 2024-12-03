import { defineComponent, watch, ref } from 'vue'
import { MENU_DATA } from '@/config/menu'
import { useUxuiStore } from '@/store/uxui'
import { useRoute, useRouter } from 'vue-router'
import { MenuItem } from '@/types/common'

export default defineComponent({
  name: 'MenuComponent',
  setup() {
    const uxuiStore = useUxuiStore()
    const route = useRoute()
    const router = useRouter()
    const selectedId = ref<number | null>(Number(route.params.id))

    const navigateToHandler = (item: MenuItem) => {  
      const url = item.prefix !== null ? `${item.url}/${selectedId.value}` : item.url  
      router.push(url)
    }

    watch(  
      () => route.params.id,  
      (newId) => {  
        selectedId.value = Number(newId) || null
      }  
    )

    const checkIsDisabled = (item: MenuItem) => {
      if(item.id == uxuiStore.getSelectedPage){
        return true
      }
      if(uxuiStore.getSelectedPage === 1 || 
        uxuiStore.getSelectedPage === 5 
      ){
        return item.in_project
      }
    }

    return {
			MENU_DATA,
      uxuiStore,
      navigateToHandler,
      checkIsDisabled
		}
  },
})
