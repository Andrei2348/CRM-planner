import { defineComponent } from 'vue';
import { useDataStore } from '@/store/data';
import { useUserStore } from '@/store/user';
import { useModalClose } from '@/composables/useModalClose';
export default defineComponent({
    name: 'ModalLeaveProject',
    setup() {
        const dataStore = useDataStore();
        const userStore = useUserStore();
        const suggestLeaveHandler = async () => {
            try {
                if (dataStore.getProjectForEdit && userStore.getUserInfo) {
                    const projectInfo = dataStore.getProjectForEdit;
                    const userInfo = userStore.getUserInfo;
                    projectInfo.users = projectInfo.users.filter(user => user.id !== userInfo.id);
                    await dataStore.projectPatchRequest(projectInfo);
                    await dataStore.projectsListRequest();
                }
            }
            catch (error) {
                console.error('Ошибка при удалении пользователя:', error);
            }
            finally {
                useModalClose();
            }
        };
        return {
            useModalClose,
            suggestLeaveHandler
        };
    },
});
//# sourceMappingURL=ModalLeaveProject.js.map