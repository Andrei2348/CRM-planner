<template>
	<MainLayout>
		<div 
			v-if='dataStore.projectList &&
			!dataStore.getIsLoading' 
			class='projects__list'
			:class='{"visible": uxuiStore.getShowAsidePanel}'
		>
			<h2 class='projects__title'>Ваши проекты</h2>
			<div class="projects__list-wrapper">
				<ProjectCard  
					v-for="project in dataStore.projectList"  
					:key="project.id"  
					:project="project"  
				/>  
			</div>
		</div>
		<EmptyListComponent 
			v-if='(!dataStore.projectList ||
			dataStore.projectList.length === 0) &&
			!dataStore.getIsLoading'
			class='projects__empty-list'
			message='Список проектов пока пуст.'
		/>
		<CreateWidget 
			:class='{"hidden": !(uxuiStore.getCreatePanelName === "")}'
			class='projects__create-widget' 
			componentName='CreateProjectComponent'
		/>
	</MainLayout>
</template>

<script lang="ts" src="./ProjectsView.ts"></script>
<style lang="scss" scoped src="./ProjectsView.scss"></style>