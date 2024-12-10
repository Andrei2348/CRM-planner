import { defineComponent, PropType, computed } from 'vue'  
import { StatusItemDropdown } from '@/types/common'  
import { Task } from '@/types/projects'  
import TaskCard from '@/components/TaskCard/TaskCard.vue'

export default defineComponent({  
  name: 'TasksArea',  
  components: {
    TaskCard
  },
  props: {  
    taskArea: {  
      type: Object as PropType<StatusItemDropdown>,  
      required: true  
    },  
    tasks: {  
      type: Array as PropType<Task[]>,  
      required: true  
    }  
  },  
  setup(props) {  
    const filteredTasks = computed(() => {  
      return props.tasks.filter(task => task.status === props.taskArea.status)  
        .sort((a: Task, b: Task) => {  
          const dateA = new Date(a.timeCreate).getTime() 
          const dateB = new Date(b.timeCreate).getTime() 
          return dateA - dateB
        }
      )  
    })

    const declensionOfTasks = (count: number): string => {
      if (count === 1) return `${count} задача`
      if (count >= 2 && count <= 4) return `${count} задачи`
      return `${count} задач`
    }

    return {  
      filteredTasks,
      declensionOfTasks
    }  
  },  
})
