import { defineComponent, computed, ref } from 'vue';
import { useUserStore } from '@/store/user';
import { useDataStore } from '@/store/data';
import { useUxuiStore } from '@/store/uxui';
import { useRouter } from 'vue-router';
import { useOpenCreatePanelHandler } from '@/composables/useTaskPanelOpen';
export default defineComponent({
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        },
    },
    setup(props) {
        const userStore = useUserStore();
        const dataStore = useDataStore();
        const uxuiStore = useUxuiStore();
        const router = useRouter();
        const isDisabled = ref(false);
        const isTeamLead = computed(() => props.project.user_id === userStore.getUserInfo?.id);
        const goToProjectHandler = (payload) => {
            userStore.setIsTeamLead(isTeamLead.value);
            dataStore.setSelectedProject(payload);
            router.push(`/project/${props.project.id}`);
        };
        const deleteProjectHandler = (payload) => {
            dataStore.setProjectForEdit(payload);
            uxuiStore.setModalName('ModalDeleteProject');
        };
        const isUserInProject = computed(() => {
            return props.project.users.some(user => user.id === userStore.getUserInfo?.id);
        });
        const projectRequestHandler = async (payload) => {
            isDisabled.value = true;
            const participationData = {
                projectId: payload.id,
                projectName: payload.project,
                username: userStore.getUserInfo?.username,
                teamleadId: payload.user_id,
                user_id: userStore.getUserInfo?.id,
                invitation: 'project'
            };
            await dataStore.projectParticipationRequest(participationData);
        };
        const leaveTheProjectHandler = (payload) => {
            dataStore.setProjectForEdit(payload);
            uxuiStore.setModalName('ModalLeaveProject');
        };
        return {
            userStore,
            goToProjectHandler,
            isTeamLead,
            isDisabled,
            useOpenCreatePanelHandler,
            deleteProjectHandler,
            isUserInProject,
            projectRequestHandler,
            leaveTheProjectHandler
        };
    },
});
//# sourceMappingURL=ProjectCard.js.map