import { defineComponent, onBeforeMount } from 'vue';
import { useDataStore } from '@/store/data';
import { useUxuiStore } from '@/store/uxui';
import { useUserStore } from '@/store/user';
import MainLayout from "@/layouts/MainLayout/MainLayout.vue";
import { useRoute } from 'vue-router';
import CreateTaskComponent from '@/components/CreateTaskComponent/CreateTaskComponent.vue';
import TasksArea from '@/components/TasksArea/TasksArea.vue';
import { DROPDOWN_STATUS_MENU } from '@/config/menu';
import CreateWidget from '@/components/CreateWidget/CreateWidget.vue';
export default defineComponent({
    name: 'BoardsView',
    components: {
        MainLayout,
        CreateTaskComponent,
        TasksArea,
        CreateWidget
    },
    setup() {
        const route = useRoute();
        const dataStore = useDataStore();
        const uxuiStore = useUxuiStore();
        const userStore = useUserStore();
        onBeforeMount(async () => {
            uxuiStore.setSelectedPage(2);
            const userInfo = userStore.getUserInfo;
            const requests = [
                userStore.checkIfTeamLead(),
                dataStore.tasksListRequest(Number(route.params.id)),
                dataStore.usersListRequest(Number(route.params.id))
            ];
            if (userInfo && userInfo.id) {
                requests.push(dataStore.getProjectsParticipationRequest(userInfo.id, 'invitationId'));
                requests.push(dataStore.getProjectsParticipationRequest(userInfo.id, 'teamleadId'));
            }
            await Promise.all(requests);
        });
        return {
            uxuiStore,
            dataStore,
            userStore,
            DROPDOWN_STATUS_MENU
        };
    },
});
//# sourceMappingURL=BoardsView.js.map