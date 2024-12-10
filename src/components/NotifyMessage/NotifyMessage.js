import { defineComponent, onBeforeUnmount, ref } from 'vue';
import { useDataStore } from '@/store/data';
export default defineComponent({
    name: 'NotifyMessage',
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    setup() {
        const dataStore = useDataStore();
        const projectInfo = ref(null);
        const cancelHandler = async (id) => {
            if (id) {
                await dataStore.deleteProjectsParticipationRequest(id);
            }
        };
        const approvalHandler = async (data) => {
            await dataStore.projectInfoRequest(data.projectId);
            const selectedProject = dataStore.getSelectedProject;
            if (selectedProject && data.id) {
                projectInfo.value = selectedProject;
                const userId = data.invitation === 'project' ? data.user_id : data.invitationId;
                if (userId !== undefined) {
                    const newUser = {
                        id: userId,
                        username: data.username,
                    };
                    if (!projectInfo.value.users.some(user => user.id === newUser.id)) {
                        projectInfo.value.users.push(newUser);
                        await dataStore.projectPatchRequest(projectInfo.value, data.invitation);
                    }
                    await dataStore.deleteProjectsParticipationRequest(data.id);
                }
            }
        };
        onBeforeUnmount(() => {
            dataStore.setSelectedProject(null);
        });
        return {
            cancelHandler,
            approvalHandler
        };
    },
});
//# sourceMappingURL=NotifyMessage.js.map