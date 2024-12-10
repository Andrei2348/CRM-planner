import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import useApiCall from '@/composables/useApiCall';
import { useUserStore } from '@/store/user';
import { useRoute } from 'vue-router';
import { MESSAGES } from '@/config/messages';
export const useDataStore = defineStore('data', () => {
    const route = useRoute();
    const userStore = useUserStore();
    const projectList = ref(null);
    const isLoadingTasks = ref(true);
    const isLoadingUsers = ref(true);
    const isLoading = ref(true);
    const tasksList = ref(null);
    const usersList = ref(null);
    const etalonUsersList = ref(null);
    const taskForEdit = ref(null);
    const projectForEdit = ref(null);
    const linkForEdit = ref(null);
    const selectedProject = ref(null);
    const notifyProjectList = ref(null);
    const linksList = ref(null);
    const infoNotify = ref(null);
    const showInvitationMessage = ref(false);
    const setInfoNotify = (payload) => {
        infoNotify.value = payload;
    };
    const setShowInvitationMessage = (payload) => {
        showInvitationMessage.value = payload;
    };
    const getShowInvitationMessage = computed(() => {
        return showInvitationMessage.value;
    });
    const getInfoNotify = computed(() => {
        return infoNotify.value;
    });
    const changeTaskData = (newTask) => {
        if (tasksList.value) {
            const index = tasksList.value.findIndex(task => task.id === newTask.id);
            if (index !== -1) {
                tasksList.value[index] = { ...tasksList.value[index], ...newTask };
            }
        }
    };
    const setTaskForEdit = (payload) => {
        taskForEdit.value = payload;
    };
    const setProjectForEdit = (payload) => {
        projectForEdit.value = payload;
    };
    const getTaskForEdit = computed(() => {
        return taskForEdit.value;
    });
    const getProjectForEdit = computed(() => {
        return projectForEdit.value;
    });
    const setIsLoadingTasks = (payload) => {
        isLoadingTasks.value = payload;
    };
    const setIsLoadingUsers = (payload) => {
        isLoadingUsers.value = payload;
    };
    const setIsLoading = (payload) => {
        isLoading.value = payload;
    };
    const getIsLoading = computed(() => {
        return isLoading.value;
    });
    const getIsLoadingUsers = computed(() => {
        return isLoadingUsers.value;
    });
    const setProjectList = (payload) => {
        projectList.value = payload;
    };
    const setTasksList = (payload) => {
        tasksList.value = payload;
    };
    const setUsersList = (payload) => {
        usersList.value = payload;
    };
    const setEtalonUsersList = (payload) => {
        if (payload !== null && payload.length !== 0) {
            etalonUsersList.value = payload;
        }
        else {
            etalonUsersList.value = null;
        }
    };
    const getUsersList = computed(() => {
        return usersList.value;
    });
    const getEtalonUsersList = computed(() => {
        return etalonUsersList.value;
    });
    const addTaskData = (payload) => {
        if (!tasksList.value) {
            tasksList.value = [];
        }
        tasksList.value.push(payload);
    };
    const canProceed = computed(() => {
        return !isLoadingTasks.value && !isLoadingUsers.value;
    });
    const setSelectedProject = (payload) => {
        selectedProject.value = payload;
    };
    const getSelectedProject = computed(() => {
        return selectedProject.value;
    });
    const setLinksList = (payload) => {
        linksList.value = payload;
    };
    const getLinksList = computed(() => {
        return linksList.value;
    });
    const updateProjectsList = (changedProject) => {
        if (projectList.value) {
            projectList.value = projectList.value.map(project => project.id === changedProject.id ? { ...project, ...changedProject } : project);
        }
    };
    const updateLinksList = (changedLink) => {
        if (linksList.value) {
            linksList.value = linksList.value.map(link => link.id === changedLink.id ? { ...link, ...changedLink } : link);
        }
    };
    const addProjectToProjectList = (payload) => {
        projectList.value = projectList.value ?? [];
        projectList.value.push(payload);
    };
    const removeProjectById = (id) => {
        if (projectList.value) {
            projectList.value = projectList.value.filter(item => item.id !== id);
        }
    };
    const removeLinkById = (id) => {
        if (linksList.value) {
            linksList.value = linksList.value.filter(item => item.id !== id);
        }
    };
    const removeTaskById = (id) => {
        if (tasksList.value) {
            tasksList.value = tasksList.value.filter(item => item.id !== id);
        }
    };
    const setNotifyProjectList = (payload) => {
        if (!notifyProjectList.value) {
            notifyProjectList.value = [];
        }
        if (payload) {
            payload.forEach(newItem => {
                const exists = notifyProjectList.value.some(existingItem => existingItem.id === newItem.id);
                if (!exists) {
                    notifyProjectList.value.push(newItem);
                }
            });
        }
        else {
            notifyProjectList.value = null;
        }
    };
    const getNotifyProjectList = computed(() => {
        return notifyProjectList.value;
    });
    const removeNotifyProject = (id) => {
        if (notifyProjectList.value) {
            notifyProjectList.value = notifyProjectList.value.filter(item => item.id !== id);
        }
    };
    const setLinkForEdit = (payload) => {
        linkForEdit.value = payload;
    };
    const getLinkForEdit = computed(() => {
        return linkForEdit.value;
    });
    // Получение списка проектов
    const projectsListRequest = async () => {
        try {
            if (userStore.getUserInfo) {
                setIsLoading(true);
                const { status, data } = await useApiCall.get(`projects?users.id=${userStore.getUserInfo.id}`);
                if (status === 200 || status === 201) {
                    setProjectList(data);
                }
            }
        }
        catch (error) {
            console.log(error);
            setInfoNotify(MESSAGES[0]);
        }
        finally {
            setIsLoading(false);
        }
    };
    // Получение проекта по id
    const projectInfoRequest = async (payload = Number(route.params.id)) => {
        try {
            const { status, data } = await useApiCall.get(`projects?id=${payload}`);
            if (status === 200 || status === 201) {
                if (data) {
                    setSelectedProject(data[0]);
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    // Получение списка задач по выбранному проекту
    const tasksListRequest = async (id) => {
        try {
            setIsLoadingTasks(true);
            const { status, data } = await useApiCall.get(`tasks?projectId=${id}`);
            if (status === 200 || status === 201) {
                setTasksList(data);
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoadingTasks(false);
        }
    };
    // Изменение данных тасков
    const taskPatchRequest = async (payload) => {
        try {
            const { status, data } = await useApiCall.patch(`tasks/${payload.id}`, payload);
            if (status === 200 || status === 201) {
                changeTaskData(data);
            }
        }
        catch (error) {
            console.error(error);
            setInfoNotify(MESSAGES[0]);
        }
    };
    // Создание таски
    const taskCreateRequest = async (payload) => {
        try {
            const { status, data } = await useApiCall.post('tasks/', payload);
            if (status === 200 || status === 201) {
                addTaskData(data);
            }
        }
        catch (error) {
            console.error(error);
            setInfoNotify(MESSAGES[0]);
        }
    };
    // Получение списка пользователей в проекте
    const usersListRequest = async (projectId) => {
        try {
            setIsLoadingUsers(true);
            const { status, data } = await useApiCall.get(`projects?id=${projectId}`);
            if (status === 200 || status === 201) {
                setUsersList(data[0].users);
                setEtalonUsersList(data[0].users);
            }
        }
        catch (error) {
            console.log(error);
            setInfoNotify(MESSAGES[0]);
        }
        finally {
            setIsLoadingUsers(false);
        }
    };
    // Поиск людей
    const searchUsersListRequest = async (payload) => {
        try {
            setIsLoadingUsers(true);
            const { status, data } = await useApiCall.get(`users?username=*${payload}*`);
            if (status === 200 || status === 201) {
                setUsersList(data);
            }
        }
        catch (error) {
            console.log(error);
            setInfoNotify(MESSAGES[0]);
        }
        finally {
            setIsLoadingUsers(false);
        }
    };
    // Создание нового проекта
    const projectCreateRequest = async (payload) => {
        try {
            const { status, data } = await useApiCall.post('projects/', payload);
            if (status === 200 || status === 201) {
                addProjectToProjectList(data);
            }
        }
        catch (error) {
            console.error(error);
            setInfoNotify(MESSAGES[0]);
        }
    };
    // Редактирование существующего проекта
    const projectPatchRequest = async (payload, notifyStatus) => {
        try {
            const { status, data } = await useApiCall.patch(`projects/${payload.id}`, payload);
            if (status === 200 || status === 201) {
                updateProjectsList(data);
                if (notifyStatus === 'developer') {
                    addProjectToProjectList(data);
                }
            }
        }
        catch (error) {
            console.error(error);
            setInfoNotify(MESSAGES[0]);
        }
    };
    // Удаление выбранного проекта
    const projectDeleteRequest = async () => {
        if (projectForEdit.value && projectForEdit.value.id) {
            try {
                const { status } = await useApiCall.delete(`projects/${projectForEdit.value.id}`);
                if (status === 200 || status === 201) {
                    removeProjectById(projectForEdit.value.id);
                }
            }
            catch (error) {
                console.error(error);
                setInfoNotify(MESSAGES[0]);
            }
        }
    };
    // Удаление выбранного задания
    const taskDeleteRequest = async () => {
        if (taskForEdit.value && taskForEdit.value.id) {
            try {
                const { status } = await useApiCall.delete(`tasks/${taskForEdit.value.id}`);
                if (status === 200 || status === 201) {
                    removeTaskById(taskForEdit.value.id);
                }
            }
            catch (error) {
                console.error(error);
                setInfoNotify(MESSAGES[0]);
            }
        }
    };
    // Поиск проектов
    const searchProjectsListRequest = async (payload) => {
        try {
            if (userStore.getUserInfo) {
                setIsLoading(true);
                const { status, data } = await useApiCall.get(`projects?project=*${payload}*`);
                if (status === 200 || status === 201) {
                    setProjectList(data);
                }
            }
        }
        catch (error) {
            console.log(error);
            setInfoNotify(MESSAGES[0]);
        }
        finally {
            setIsLoading(false);
        }
    };
    // Создание запроса на участие в проекте
    const projectParticipationRequest = async (payload) => {
        try {
            const { status } = await useApiCall.post('project-request/', payload);
            if (status === 200 || status === 201) {
                setInfoNotify(MESSAGES[1]);
            }
        }
        catch (error) {
            console.error(error);
            setInfoNotify(MESSAGES[0]);
        }
    };
    // Получение списка запросов
    const getProjectsParticipationRequest = async (payload, searchKey) => {
        if (payload !== null) {
            try {
                const { status, data } = await useApiCall.get(`project-request?${searchKey}=${payload}`);
                if (status === 200 || status === 201) {
                    setNotifyProjectList(data);
                }
            }
            catch (error) {
                console.log(error);
                setInfoNotify(MESSAGES[0]);
            }
        }
    };
    // Удаление заявки на участие в проекте
    const deleteProjectsParticipationRequest = async (payload) => {
        if (payload) {
            try {
                const { status } = await useApiCall.delete(`project-request/${payload}`);
                if (status === 200 || status === 201) {
                    removeNotifyProject(payload);
                }
            }
            catch (error) {
                console.log(error);
                setInfoNotify(MESSAGES[0]);
            }
        }
    };
    // Создание новой ссылки
    const linkCreateRequest = async (payload) => {
        try {
            const { status, data } = await useApiCall.post('links/', payload);
            if (status === 200 || status === 201) {
                if (!linksList.value) {
                    linksList.value = [];
                }
                linksList.value.push(data);
            }
        }
        catch (error) {
            console.error(error);
            setInfoNotify(MESSAGES[0]);
        }
    };
    // Получение списка ссылок
    const linksListRequest = async (projectId) => {
        try {
            setIsLoading(true);
            const { status, data } = await useApiCall.get(`links?projectId=${projectId}`);
            if (status === 200 || status === 201) {
                setLinksList(data);
            }
        }
        catch (error) {
            console.log(error);
            setInfoNotify(MESSAGES[0]);
        }
        finally {
            setIsLoading(false);
        }
    };
    // Удаление выбранной ссылки
    const linkDeleteRequest = async () => {
        if (linkForEdit.value && linkForEdit.value.id) {
            try {
                const { status } = await useApiCall.delete(`links/${linkForEdit.value.id}`);
                if (status === 200 || status === 201) {
                    removeLinkById(linkForEdit.value.id);
                }
            }
            catch (error) {
                console.error(error);
                setInfoNotify(MESSAGES[0]);
            }
        }
    };
    // Редактирование существующей ссылки
    const linkPatchRequest = async (payload) => {
        try {
            const { status, data } = await useApiCall.patch(`links/${payload.id}`, payload);
            if (status === 200 || status === 201) {
                updateLinksList(data);
            }
        }
        catch (error) {
            console.error(error);
            setInfoNotify(MESSAGES[0]);
        }
    };
    // Получение списка стека  
    const stackListRequest = async () => {
        try {
            setIsLoading(true);
            const { status, data } = await useApiCall.get('stack/');
            if (status === 200 || status === 201) {
                return data;
            }
            else {
                return [];
            }
        }
        catch (error) {
            console.log(error);
            setInfoNotify(MESSAGES[0]);
            return [];
        }
        finally {
            setIsLoading(false);
        }
    };
    return {
        projectsListRequest,
        projectInfoRequest,
        tasksListRequest,
        projectList,
        tasksList,
        setTasksList,
        usersList,
        setProjectList,
        usersListRequest,
        canProceed,
        taskPatchRequest,
        taskCreateRequest,
        setTaskForEdit,
        setProjectForEdit,
        getTaskForEdit,
        setSelectedProject,
        getSelectedProject,
        projectCreateRequest,
        projectPatchRequest,
        projectDeleteRequest,
        taskDeleteRequest,
        getProjectForEdit,
        searchProjectsListRequest,
        getUsersList,
        projectParticipationRequest,
        getProjectsParticipationRequest,
        getNotifyProjectList,
        deleteProjectsParticipationRequest,
        linkCreateRequest,
        linksListRequest,
        getLinksList,
        getIsLoading,
        linkDeleteRequest,
        setLinkForEdit,
        getLinkForEdit,
        linkPatchRequest,
        stackListRequest,
        searchUsersListRequest,
        getEtalonUsersList,
        setNotifyProjectList,
        addProjectToProjectList,
        getIsLoadingUsers,
        getInfoNotify,
        setInfoNotify,
        setShowInvitationMessage,
        getShowInvitationMessage
    };
});
//# sourceMappingURL=data.js.map