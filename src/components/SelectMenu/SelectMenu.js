import { defineComponent, ref } from 'vue';
import clickOutside from '@/directives/clickOutside';
export default defineComponent({
    name: 'SelectMenu',
    props: {
        label: {
            type: String,
            required: false,
            default: '',
        },
        title: {
            type: String,
            required: false,
            default: '',
        },
        persons: {
            type: (Array),
            required: true,
        },
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
        const close = () => {
            if (menuIsOpen.value) {
                menuIsOpen.value = false;
            }
        };
        const handleClick = (item) => {
            emit('changeSelectHandler', item);
            close();
        };
        return {
            close,
            toggleMenuHandler,
            menuIsOpen,
            menuPositionTop,
            handleClick,
        };
    },
});
//# sourceMappingURL=SelectMenu.js.map