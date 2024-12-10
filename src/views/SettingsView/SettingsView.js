import { defineComponent, onBeforeMount } from 'vue';
import MainLayout from "@/layouts/MainLayout/MainLayout.vue";
import { useUxuiStore } from '@/store/uxui';
import ProfileEdit from '@/components/ProfileEdit/ProfileEdit.vue';
import PasswordChanger from '@/components/PasswordChanger/PasswordChanger.vue';
export default defineComponent({
    name: 'SettingsView',
    components: {
        MainLayout,
        ProfileEdit,
        PasswordChanger
    },
    setup() {
        const uxuiStore = useUxuiStore();
        onBeforeMount(() => {
            uxuiStore.setSelectedPage(5);
        });
        return {};
    }
});
//# sourceMappingURL=SettingsView.js.map