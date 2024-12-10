import { watch, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDataStore } from '@/store/data';
import { useUxuiStore } from '@/store/uxui';
import debounce from 'lodash/debounce';
export default defineComponent({
    name: 'SearchComponent',
    setup() {
        const route = useRoute();
        const dataStore = useDataStore();
        const uxuiStore = useUxuiStore();
        const searchParam = ref('');
        const searchHandler = debounce((event) => {
            searchParam.value = event.target.value;
        }, 800);
        // watch(searchParam, async (newVal: string) => {
        //   const page = uxuiStore.getSelectedPage
        //   if (newVal.trim() === '') {
        //     page === 1 ? dataStore.projectsListRequest() : dataStore.usersListRequest(Number(route.params.id))
        //   } else {
        //     page === 1 ? dataStore.searchProjectsListRequest(newVal) : dataStore.searchUsersListRequest(newVal)
        //   }
        // })
        watch(searchParam, async (newVal) => {
            const page = uxuiStore.getSelectedPage;
            try {
                if (newVal.trim() === '') {
                    if (page === 1) {
                        await dataStore.projectsListRequest();
                    }
                    else {
                        await dataStore.usersListRequest(Number(route.params.id));
                    }
                }
                else {
                    if (page === 1) {
                        await dataStore.searchProjectsListRequest(newVal);
                    }
                    else {
                        await dataStore.searchUsersListRequest(newVal);
                    }
                }
            }
            catch (error) {
                console.error('Ошибка при обновлении списка:', error);
            }
        });
        return {
            searchHandler
        };
    },
});
//# sourceMappingURL=SearchComponent.js.map