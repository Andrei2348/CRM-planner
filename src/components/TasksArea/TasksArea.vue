<template>
	<div class='tasks__container'>
	<h3 class='tasks__title'>{{ taskArea.title }}</h3>
	<div class="tasks__wrapper">

	
		<TaskCard  
			v-for="task in filteredTasks"  
			:key="task.id"  
			:task="task"  
		/>  
	
	</div>
	</div>
</template>

<script lang="ts" src="./TasksArea.ts"></script>
<style lang="scss" scoped src="./TasksArea.scss"></style>
