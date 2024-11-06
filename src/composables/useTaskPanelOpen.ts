import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'
import { Task } from '@/types/projects'

const dataStore = useDataStore()
const uxuiStore = useUxuiStore()

export const useOpenCreatePanelHandler = (componentName: string, payload: Task | null): void => {
  dataStore.setTaskForEdit(payload)
  uxuiStore.setCreatePanelName(componentName)
}

export const useCloseCreatePanelHandler = (): void => {
  dataStore.setTaskForEdit(null)
  uxuiStore.setCreatePanelName('')
}