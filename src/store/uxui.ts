import { defineStore } from 'pinia'
import { watch, computed, ref } from 'vue'
import { useLockBodyScroll } from '@/composables/useLockBodyScroll'

export const useUxuiStore = defineStore('uxui', () => {
  const { enableBodyScroll, disableBodyScroll } = useLockBodyScroll()
  const createPanelName = ref<string>('') 
  const showAsidePanel = ref(false)

	const setCreatePanelName = (payload: string): void => {
		createPanelName.value = payload
	}

  const getCreatePanelName = computed(() => {  
    return createPanelName.value
  }) 

  const setshowAsidePanel = (payload: boolean): void => {
		showAsidePanel.value = payload
	}

  const getshowAsidePanel = computed(() => {  
    return showAsidePanel.value
  }) 

  // Сюда добавить признаки для блокировки скролла
  watch(
    () => [createPanelName.value, ],
    ([newCreatePanelName, ]) => {
      newCreatePanelName !== ''
        ? disableBodyScroll()
        : enableBodyScroll()
    },
  )

  return {
    setCreatePanelName,
		getCreatePanelName,
    setshowAsidePanel,
    getshowAsidePanel
  }
})
