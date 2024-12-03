<template>
	<div class='tasks__container'>
		<div class="tasks__header">
			<h3 class='tasks__title'>{{ taskArea.title }}</h3>
			<span class='tasks__count' v-if='filteredTasks.length > 0'>
				{{ declensionOfTasks(filteredTasks.length) }}
			</span>
		</div>
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
