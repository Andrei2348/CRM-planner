import { defineComponent, ref } from 'vue';
import { useUserStore } from '@/store/user';
import { useDataStore } from '@/store/data';
export default defineComponent({
    name: 'UserCard',
    props: {
        user: {
            type: Object,
            required: true
        },
    },
    setup(props, { emit }) {
        const userStore = useUserStore();
        const dataStore = useDataStore();
        const userInfo = ref(null);
        const disabledFlag = ref(false);
        const buttonAddFlag = ref(false);
        const getUserInfoHandler = async () => {
            disabledFlag.value = true;
            if (userInfo.value === null) {
                userInfo.value = await userStore.getUserInfoRequest(props.user.id);
            }
        };
        const checkContainsUser = (user) => {
            if (dataStore.getEtalonUsersList) {
                return dataStore.getEtalonUsersList.some(item => item.id === user.id);
            }
            return false;
        };
        const deleteUserInfoHandler = async (id) => {
            emit('deleteUserHandler', id);
        };
        const projectRequestHandler = async (user) => {
            if (dataStore.getSelectedProject && dataStore.getSelectedProject.id) {
                const participationData = {
                    projectId: dataStore.getSelectedProject.id,
                    projectName: dataStore.getSelectedProject.project,
                    username: user.username,
                    teamleadId: user.id,
                    user_id: user.id,
                    invitation: 'developer',
                    invitationId: user.id
                };
                buttonAddFlag.value = true;
                await dataStore.projectParticipationRequest(participationData);
            }
        };
        return {
            userStore,
            getUserInfoHandler,
            userInfo,
            disabledFlag,
            deleteUserInfoHandler,
            checkContainsUser,
            projectRequestHandler,
            buttonAddFlag
        };
    },
});
//# sourceMappingURL=UserCard.js.map