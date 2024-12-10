import { defineComponent, onBeforeMount, ref } from 'vue';
export default defineComponent({
    name: 'SvgIcon',
    props: {
        icon: {
            type: String,
            required: true
        },
        iconClass: {
            type: String,
        }
    },
    setup(props) {
        const svgContent = ref(null);
        onBeforeMount(async () => {
            const response = await fetch(`../../src/assets/icons/${props.icon}.svg`);
            svgContent.value = await response.text();
        });
        return {
            svgContent,
        };
    }
});
//# sourceMappingURL=SvgIcon.js.map