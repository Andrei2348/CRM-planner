<template>
	<button 
		class='task__show-button' 
		@click='dataStore.setTaskForEdit(null)'
	>
		+
	</button>
</template>

<script lang="ts" src="./CreateWidget.ts"></script>
<style lang="scss" scoped src="./CreateWidget.scss"></style>
