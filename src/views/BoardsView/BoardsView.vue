<template>
	<MainLayout class='boards'>
		<div 
			class="boards__wrapper" 
			:class='{"visible": uxuiStore.getShowAsidePanel}'
			v-if='dataStore.canProceed && 
			dataStore.tasksList &&
			dataStore.tasksList.length > 0'
		>
			<TasksArea 
				v-for="taskArea in DROPDOWN_STATUS_MENU"  
				:key="taskArea.id"  
				:taskArea="taskArea"
				:tasks="dataStore.tasksList" />
		</div>
		<EmptyListComponent 
			v-if='(!dataStore.tasksList ||
			dataStore.tasksList.length === 0) &&
			dataStore.canProceed'
			message='Список задач пока пуст.'
		/>
		<CreateWidget 
			v-if='userStore.getIsTeamLead'
			:class='{"hidden": !(uxuiStore.getCreatePanelName === "")}'
			class='boards__create-widget' 
			componentName='CreateTaskComponent'
		/>
	</MainLayout>
</template>

<script lang="ts" src="./BoardsView.ts"></script>
<style lang="scss" scoped src="./BoardsView.scss"></style>