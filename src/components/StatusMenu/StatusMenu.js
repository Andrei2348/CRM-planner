import { defineComponent, ref } from 'vue';
import clickOutside from '@/directives/clickOutside';
import { DROPDOWN_STATUS_MENU } from '@/config/menu';
export default defineComponent({
    name: 'StatusMenu',
    props: {
        title: {
            type: String,
            required: false,
            default: '',
        },
        openPermission: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    directives: {
        clickOutside,
    },
    setup(_, { emit }) {
        const menuIsOpen = ref(false);
        const clickY = ref(0);
        const windowHeight = ref(window.innerHeight);
        const menuPositionTop = ref(false);
        const toggleMenuHandler = (event) => {
            menuIsOpen.value = !menuIsOpen.value;
            clickY.value = event.clientY;
            menuPositionTop.value = windowHeight.value / 2 < clickY.value;
        };
        const getTitleByStatus = (status) => {
            const foundStatus = DROPDOWN_STATUS_MENU.find(item => item.status === status);
            return foundStatus ? foundStatus.title : null;
        };
        const getColorByStatus = (status) => {
            const foundColor = DROPDOWN_STATUS_MENU.find(item => item.status === status);
            return foundColor ? foundColor.color : '#000000';
        };
        const closeHandler = () => {
            if (menuIsOpen.value) {
                menuIsOpen.value = false;
            }
        };
        const handleClick = (status) => {
            emit('changeSelectHandler', status);
            closeHandler();
        };
        return {
            closeHandler,
            toggleMenuHandler,
            menuIsOpen,
            menuPositionTop,
            handleClick,
            getTitleByStatus,
            getColorByStatus,
            DROPDOWN_STATUS_MENU
        };
    },
});
//# sourceMappingURL=StatusMenu.js.map