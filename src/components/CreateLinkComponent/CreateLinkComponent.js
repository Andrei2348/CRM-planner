import { defineComponent, onBeforeMount, computed, ref } from 'vue';
import { useUxuiStore } from '@/store/uxui';
import { useUserStore } from '@/store/user';
import { useDataStore } from '@/store/data';
import { useRoute } from 'vue-router';
import { validateLinks } from '@/helpers/validateLinks';
import { useCloseCreatePanelHandler } from '@/composables/useTaskPanelOpen';
export default defineComponent({
    name: 'CreateLinkComponent',
    setup() {
        const route = useRoute();
        const uxuiStore = useUxuiStore();
        const userStore = useUserStore();
        const dataStore = useDataStore();
        const defaultLinkData = () => ({
            link: '',
            description: '',
            date: new Date().toLocaleDateString('en-CA'),
            user_id: userStore.getUserInfo?.id ?? 0,
            author: userStore.getUserInfo?.username ?? '',
            projectId: Number(route.params.id)
        });
        const editFlag = ref(false);
        const blankDataLink = ref(defaultLinkData());
        const resetForm = () => {
            blankDataLink.value = defaultLinkData();
        };
        const getInputData = (key, value) => {
            if (key in blankDataLink.value) {
                blankDataLink.value[key] = value;
            }
        };
        const isSubmitDisabled = computed(() => {
            return !(blankDataLink.value.link &&
                blankDataLink.value.description &&
                validateLinks(blankDataLink.value.link));
        });
        const createLinkHandler = async () => {
            if (blankDataLink.value.id) {
                await dataStore.linkPatchRequest(blankDataLink.value);
            }
            else {
                await dataStore.linkCreateRequest(blankDataLink.value);
            }
            resetForm();
            useCloseCreatePanelHandler();
        };
        onBeforeMount(() => {
            if (dataStore.getLinkForEdit) {
                blankDataLink.value = { ...dataStore.getLinkForEdit };
                editFlag.value = true;
            }
            else {
                resetForm();
            }
        });
        return {
            uxuiStore,
            getInputData,
            resetForm,
            createLinkHandler,
            isSubmitDisabled,
            blankDataLink,
            editFlag
        };
    }
});
//# sourceMappingURL=CreateLinkComponent.js.map