import { defineComponent } from 'vue';
import { useOpenCreatePanelHandler } from '@/composables/useTaskPanelOpen';
export default defineComponent({
    name: 'CreateWidget',
    props: {
        componentName: {
            type: String,
            required: true
        },
    },
    setup() {
        return {
            useOpenCreatePanelHandler
        };
    },
});
//# sourceMappingURL=CreateWidget.js.map