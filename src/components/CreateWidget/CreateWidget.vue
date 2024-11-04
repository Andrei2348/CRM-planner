<template>
	<button 
		class='task__show-button' 
		@click='uxuiStore.setIsCreateTaskPanelVisible(true)'
	>
		+
	</button>
</template>

<script lang="ts" src="./CreateWidget.ts"></script>
<style lang="scss" scoped src="./CreateWidget.scss"></style>
