<template>
	<MainLayout class='boards'>
	<div 
		class="boards__wrapper" 
		v-if='dataStore.canProceed && 
		dataStore.tasksList'
	>
		<TasksArea 
			v-for="taskArea in DROPDOWN_STATUS_MENU"  
			:key="taskArea.id"  
			:taskArea="taskArea"
			:tasks="dataStore.tasksList" />
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