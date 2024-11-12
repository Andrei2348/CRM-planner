import { defineComponent, shallowRef, defineAsyncComponent, watchEffect } from 'vue' 
import { useUxuiStore } from '@/store/uxui' 

export default defineComponent({  
  name: 'ModalLayout',  
  
  setup() { 
    const uxuiStore = useUxuiStore()

    const currentSuggestComponent = shallowRef<ReturnType<
      typeof defineAsyncComponent
    > | null>(null)
    
    const closeModalHandler = () => {
      uxuiStore.setModalName('')
    }

    watchEffect(() => {
      const componentName = uxuiStore.getModalName
      if (componentName) {
        currentSuggestComponent.value = defineAsyncComponent(
          () => import(`@/components/${componentName}/${componentName}.vue`),
        )
      } else {
        currentSuggestComponent.value = null
      }
    })
    
    return {  
      closeModalHandler,
      currentSuggestComponent 
    }  
  },  
});