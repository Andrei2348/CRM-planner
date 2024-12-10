import { defineComponent, watchEffect, reactive, ref } from 'vue';
import { EMPTY_LOGIN_FORM } from '@/config/user';
import { useUserStore } from '@/store/user';
export default defineComponent({
    name: 'LoginForm',
    setup() {
        const userStore = useUserStore();
        const userData = reactive({ ...EMPTY_LOGIN_FORM });
        const disableButtonFlag = ref(true);
        const getInputData = (key, value) => {
            userData[key] = value;
        };
        const loginUserHandler = async () => {
            await userStore.userLoginRequest('auth', { ...userData });
        };
        watchEffect(() => {
            disableButtonFlag.value = Object.values(userData).some(field => field === '');
        });
        return {
            getInputData,
            disableButtonFlag,
            loginUserHandler
        };
    },
});
//# sourceMappingURL=LoginForm.js.map