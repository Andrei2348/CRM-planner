import { defineComponent, computed } from 'vue';
import TaskCard from '@/components/TaskCard/TaskCard.vue';
export default defineComponent({
    name: 'TasksArea',
    components: {
        TaskCard
    },
    props: {
        taskArea: {
            type: Object,
            required: true
        },
        tasks: {
            type: Array,
            required: true
        }
    },
    setup(props) {
        const filteredTasks = computed(() => {
            return props.tasks.filter(task => task.status === props.taskArea.status)
                .sort((a, b) => {
                const dateA = new Date(a.timeCreate).getTime();
                const dateB = new Date(b.timeCreate).getTime();
                return dateA - dateB;
            });
        });
        const declensionOfTasks = (count) => {
            if (count === 1)
                return `${count} задача`;
            if (count >= 2 && count <= 4)
                return `${count} задачи`;
            return `${count} задач`;
        };
        return {
            filteredTasks,
            declensionOfTasks
        };
    },
});
//# sourceMappingURL=TasksArea.js.map