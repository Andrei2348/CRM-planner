import {
  defineComponent,
  watchEffect,
  defineAsyncComponent,
  shallowRef,
  onBeforeMount,
  onBeforeUnmount
} from 'vue'
import { useUxuiStore } from '@/store/uxui'
import { useCloseCreatePanelHandler } from '@/composables/useTaskPanelOpen'

export default defineComponent({
  name: 'CreateLayout',
  setup() {
    const uxuiStore = useUxuiStore()
    const currentCreateComponent = shallowRef<ReturnType<
      typeof defineAsyncComponent
    > | null>(null)

    watchEffect(() => {
      const componentName = uxuiStore.getCreatePanelName
      if (componentName) {
        currentCreateComponent.value = defineAsyncComponent(
          () => import(`@/components/${componentName}/${componentName}.vue`),
        )
      } else {
        currentCreateComponent.value = null
      }
    })

    const closeOnEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Здесь закрываем через стор, т.к. панелей будет несколько
        uxuiStore.setCreatePanelName('')
      }
    }

    onBeforeMount(() => {
      window.addEventListener('keydown', closeOnEsc)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('keydown', closeOnEsc)
    })

    return {
      uxuiStore,
      currentCreateComponent,
      useCloseCreatePanelHandler
    }
  },
})