import { useDataStore } from '@/store/data';
import { useUxuiStore } from '@/store/uxui';
const dataStore = useDataStore();
const uxuiStore = useUxuiStore();
export const useOpenCreatePanelHandler = (componentName, payload) => {
    if (payload) {
        if ('task' in payload) {
            dataStore.setTaskForEdit(payload);
        }
        if ('project' in payload) {
            dataStore.setProjectForEdit(payload);
        }
        if ('link' in payload) {
            dataStore.setLinkForEdit(payload);
        }
    }
    uxuiStore.setCreatePanelName(componentName);
};
export const useCloseCreatePanelHandler = () => {
    dataStore.setTaskForEdit(null);
    dataStore.setProjectForEdit(null);
    dataStore.setLinkForEdit(null);
    uxuiStore.setCreatePanelName('');
};
//# sourceMappingURL=useTaskPanelOpen.js.map