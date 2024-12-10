import { ref, computed, onMounted } from 'vue';
export function useCurrentTime() {
    const currentTime = ref(new Date());
    const day = computed(() => currentTime.value.getDate());
    const monthName = computed(() => {
        return currentTime.value.toLocaleString('ru-RU', { month: 'long' });
    });
    const year = computed(() => currentTime.value.getFullYear());
    const weekDay = computed(() => {
        return currentTime.value.toLocaleString('ru-RU', { weekday: 'long' });
    });
    const formattedTime = computed(() => {
        return currentTime.value.toLocaleString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        });
    });
    onMounted(() => {
        setInterval(() => {
            currentTime.value = new Date();
        }, 1000);
    });
    return {
        currentTime,
        weekDay,
        day,
        monthName,
        year,
        formattedTime,
    };
}
//# sourceMappingURL=useCurrentTime.js.map