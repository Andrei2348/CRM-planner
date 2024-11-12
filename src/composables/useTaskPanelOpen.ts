import { useDataStore } from '@/store/data'  
import { useUxuiStore } from '@/store/uxui'  
import { Task, Project } from '@/types/projects'  

const dataStore = useDataStore()  
const uxuiStore = useUxuiStore()  

export const useOpenCreatePanelHandler = (componentName: string, payload: Task | Project | null): void => {  
  if (payload) {  
    if ('task' in payload) { 
      dataStore.setTaskForEdit(payload as Task)  
    } else {  
      dataStore.setProjectForEdit(payload as Project)  
    }  
  } else {  
    dataStore.setTaskForEdit(null)
  }  
  uxuiStore.setCreatePanelName(componentName)  
}  

export const useCloseCreatePanelHandler = (): void => {  
  dataStore.setTaskForEdit(null)  
  dataStore.setProjectForEdit(null)  
  uxuiStore.setCreatePanelName('')  
}