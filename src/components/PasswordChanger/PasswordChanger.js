import { defineComponent, computed, reactive, ref } from 'vue';
import { useUxuiStore } from '@/store/uxui';
import { useDataStore } from '@/store/data';
import { useUserStore } from '@/store/user';
import { validatePassword, doPasswordsMatch } from '@/helpers/validatePassword';
export default defineComponent({
    name: 'ProfileEdit',
    setup() {
        const uxuiStore = useUxuiStore();
        const dataStore = useDataStore();
        const userStore = useUserStore();
        const userInfo = ref({ ...userStore.getUserInfo });
        const errors = reactive({
            username: '',
            email: '',
            password: '',
            repassword: '',
        });
        const touched = reactive({
            username: false,
            email: false,
            password: false,
            repassword: false,
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
        const handleFocus = (field) => {
            touched[field] = true;
        };
        const validateForm = () => {
            const user = userInfo.value;
            errors.password = user.password ? validatePassword(user.password) : '';
            errors.repassword =
                user.password && user.repassword ? doPasswordsMatch(user.password, user.repassword || '') : '';
        };
        const displayErrors = computed(() => {
            return {
                password: touched.password ? errors.password : '',
                repassword: touched.repassword ? errors.repassword : '',
            };
        });
        const disableButtonFlag = computed(() => {
            return !(errors.password === '' &&
                errors.repassword === '' &&
                userInfo.value.password &&
                userInfo.value.repassword);
        });
        const saveButtonHandler = async () => {
            if (userInfo.value.hasOwnProperty('repassword')) {
                delete userInfo.value.repassword;
            }
            await userStore.updateUserInfoRequest(userInfo.value);
        };
        return {
            uxuiStore,
            dataStore,
            userStore,
            getInputData,
            disableButtonFlag,
            saveButtonHandler,
            displayErrors,
            handleFocus
        };
    }
});
//# sourceMappingURL=PasswordChanger.js.map