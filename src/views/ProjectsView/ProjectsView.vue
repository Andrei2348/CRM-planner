<template>
	<MainLayout>
		<div 
			v-if='dataStore.projectList &&
			!dataStore.isLoadingProjects' 
			class='projects__list'
		>
			<ProjectCard  
        v-for="project in dataStore.projectList"  
        :key="project.id"  
        :project="project"  
      />  
		</div>
		<div 
			v-if='(!dataStore.projectList ||
			dataStore.projectList.length === 0) &&
			!dataStore.isLoadingProjects'
			class='projects__empty-list'
		>
			Список проектов пока пуст.
		</div>
	</MainLayout>
</template>

<script lang="ts" src="./ProjectsView.ts"></script>
<style lang="scss" scoped src="./ProjectsView.scss"></style>