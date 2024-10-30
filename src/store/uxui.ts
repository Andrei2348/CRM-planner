import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUxuiStore = defineStore('uxui', () => {
  const isCreateTaskPanelVisible = ref(false)
  
	const setIsCreateTaskPanelVisible = (payload: boolean) => {
		isCreateTaskPanelVisible.value = payload
	}

  const getIsCreateTaskPanelVisible = computed(() => {  
    return isCreateTaskPanelVisible.value  
  }) 

  return {
    setIsCreateTaskPanelVisible,
		getIsCreateTaskPanelVisible
  }
})
