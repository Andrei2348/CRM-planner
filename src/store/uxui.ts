import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUxuiStore = defineStore('uxui', () => {
  const createPanelName = ref<string>('') 

	const setCreatePanelName = (payload: string): void => {
		createPanelName.value = payload
	}

  const getCreatePanelName = computed(() => {  
    return createPanelName.value
  }) 

  return {
    setCreatePanelName,
		getCreatePanelName
  }
})
