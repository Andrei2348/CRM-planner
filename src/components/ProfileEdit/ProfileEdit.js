import { defineComponent, onBeforeMount, computed, reactive, ref } from 'vue';
import { useUxuiStore } from '@/store/uxui';
import { useDataStore } from '@/store/data';
import { useUserStore } from '@/store/user';
import { validateEmail } from '@/helpers/validateEmail';
export default defineComponent({
    name: 'ProfileEdit',
    setup() {
        const uxuiStore = useUxuiStore();
        const dataStore = useDataStore();
        const userStore = useUserStore();
        const userInfo = ref({ ...userStore.getUserInfo });
        const stackList = ref(null);
        const selectedStack = ref(userInfo.value.stack ?? []);
        const errors = reactive({
            username: '',
            email: '',
            password: '',
            repassword: '',
        });
        const getInputData = (key, value) => {
            if (userInfo.value && key !== 'id') {
                if (key === 'stack') {
                    if (Array.isArray(value)) {
                        userInfo.value[key] = value;
                    }
                }
                else if (typeof value === 'string') {
                    userInfo.value[key] = value;
                }
                validateForm();
            }
        };
        const validateForm = () => {
            if (userInfo.value && userInfo.value.email) {
                errors.email = validateEmail(userInfo.value.email);
            }
        };
        const safeTechnologies = computed(() => {
            return stackList.value ? stackList.value : null;
        });
        const disableButtonFlag = computed(() => {
            return !(errors.email === '' &&
                userInfo.value.email !== '');
        });
        const handleCheckboxChange = (tech) => {
            const index = selectedStack.value.findIndex(item => item.id === tech.id);
            if (index !== -1) {
                selectedStack.value.splice(index, 1);
            }
            else {
                selectedStack.value.push(tech);
            }
        };
        const isSelected = (tech) => {
            return selectedStack.value.some(item => item.id === tech.id);
        };
        const saveButtonHandler = async () => {
            userInfo.value.stack = selectedStack.value;
            await userStore.updateUserInfoRequest(userInfo.value);
        };
        onBeforeMount(async () => {
            stackList.value = await dataStore.stackListRequest();
        });
        return {
            uxuiStore,
            dataStore,
            userStore,
            getInputData,
            safeTechnologies,
            disableButtonFlag,
            saveButtonHandler,
            handleCheckboxChange,
            isSelected
        };
    }
});
//# sourceMappingURL=ProfileEdit.js.map