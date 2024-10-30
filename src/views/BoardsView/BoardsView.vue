<template>
	<MainLayout>
	<div 
		class='boards__wrapper' 
		v-if='dataStore.canProceed && 
		dataStore.tasksList'
	>
		<TaskCard  
			v-for="task in dataStore.tasksList"  
			:key="task.id"  
			:task="task"  
		/>  
	</div>
	<div 
			v-if='(!dataStore.tasksList ||
			dataStore.tasksList.length === 0) &&
			dataStore.canProceed'
			class='boards__empty-list'
		>
			Список задач пока пуст.
		</div>
		<CreateTaskComponent 
			class='boards__create-aside' 
		/>
	</MainLayout>
</template>

<script lang="ts" src="./BoardsView.ts"></script>
<style lang="scss" scoped src="./BoardsView.scss"></style>