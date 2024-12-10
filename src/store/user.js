import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import useApiCall from '@/composables/useApiCall';
import { useRouter } from 'vue-router';
import { setStorageItemWithExpiry } from '@/helpers/localStorageHelpers';
import { useDataStore } from '@/store/data';
import { MESSAGES } from '@/config/messages';
export const useUserStore = defineStore('user', () => {
    const router = useRouter();
    const dataStore = useDataStore();
    const isLoginStatus = ref(false);
    const userInfo = ref(null);
    const isTeamLead = ref(false);
    const setUserInfo = (payload) => {
        userInfo.value = payload;
    };
    const getUserInfo = computed(() => {
        return userInfo.value;
    });
    const setIsLoginStatus = (payload) => {
        isLoginStatus.value = payload;
    };
    const setIsTeamLead = (payload) => {
        isTeamLead.value = payload;
    };
    const getIsTeamLead = computed(() => {
        return isTeamLead.value;
    });
    const checkIfTeamLead = async () => {
        await dataStore.projectInfoRequest();
        if (userInfo.value && dataStore.getSelectedProject) {
            isTeamLead.value = userInfo.value.id === dataStore.getSelectedProject.user_id;
        }
        else {
            isTeamLead.value = false;
        }
    };
    const handleResponse = (status, response) => {
        if (status === 200 || status === 201) {
            setUserInfo(response.data);
            setIsLoginStatus(true);
            setStorageItemWithExpiry(response.token);
            router.push('/');
        }
        else {
            setUserInfo(null);
            setIsLoginStatus(false);
        }
    };
    const preLoginUserStatus = async () => {
        try {
            const { status, data } = await useApiCall.get('/auth_me');
            if (status === 200 || status === 201) {
                setIsLoginStatus(true);
                setUserInfo(data);
            }
            else {
                setUserInfo(null);
            }
        }
        catch (error) {
            console.log(error);
            dataStore.setInfoNotify(MESSAGES[0]);
        }
    };
    const userLoginRequest = async (url, user) => {
        try {
            const { status, data } = await useApiCall.post(url, user);
            handleResponse(status, data);
        }
        catch (error) {
            console.log(error);
            dataStore.setInfoNotify(MESSAGES[0]);
        }
    };
    const userRegisterRequest = async (url, user) => {
        try {
            const { status, data } = await useApiCall.post(url, user);
            handleResponse(status, data);
        }
        catch (error) {
            console.log(error);
            dataStore.setInfoNotify(MESSAGES[0]);
        }
    };
    const getUserInfoRequest = async (id) => {
        try {
            const { status, data } = await useApiCall.get(`/users/${id}`);
            if (status === 200 || status === 201) {
                return data;
            }
            else {
                return;
            }
        }
        catch (error) {
            console.log(error);
            dataStore.setInfoNotify(MESSAGES[0]);
            return;
        }
    };
    const updateUserInfoRequest = async (payload) => {
        try {
            const { status, data } = await useApiCall.patch(`/users/${payload.id}`, payload);
            if (status === 200 || status === 201) {
                setUserInfo(data);
                dataStore.setInfoNotify(MESSAGES[2]);
            }
        }
        catch (error) {
            console.log(error);
            dataStore.setInfoNotify(MESSAGES[0]);
            return;
        }
    };
    return {
        getUserInfo,
        isLoginStatus,
        userLoginRequest,
        setIsLoginStatus,
        userRegisterRequest,
        preLoginUserStatus,
        setUserInfo,
        setIsTeamLead,
        getIsTeamLead,
        getUserInfoRequest,
        checkIfTeamLead,
        updateUserInfoRequest
    };
});
//# sourceMappingURL=user.js.map