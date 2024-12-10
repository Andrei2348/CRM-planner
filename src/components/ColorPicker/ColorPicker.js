import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'ColorPicker',
    props: {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: false,
            default: '#FF5733'
        }
    },
    emits: ['colorChanged'],
    setup(props, { emit }) {
        const colors = ref([
            '#FF5733',
            '#33FF57',
            '#3357FF',
            '#F1C40F',
            '#9B59B6',
            '#A5260A',
        ]);
        const selectedColor = ref(props.color);
        const selectColor = (color) => {
            selectedColor.value = color;
            emit('colorChanged', props.name, color);
        };
        return {
            colors,
            selectedColor,
            selectColor,
        };
    },
});
//# sourceMappingURL=ColorPicker.js.map