<template>
	<div class="projects__wrapper">
		{{userStore.getUserInfo}}
		<h2 class='projects__title'>проект</h2>
		<div class="projects__container">
		
			<InputComponent 
				label='Название проекта' 
				name='name' 
				type='text'
				placeholder='Введите название проекта'
				@update:modelValue='getInputData'
				:modelValue='blankDataProject.name'
			/>

			<TextAreaComponent 
				label='Описание проекта' 
				name='description' 
				type='text'
				placeholder='Введите описание проекта'
				@update:modelValue='getInputData'
				:textareaValue='blankDataProject.description'
			/>

			<ColorPicker 
				name='color'
				@colorChanged='getInputData'
				:color='blankDataProject.color'
			/>
	
			<button 
				class='projects__button-create'
				@click='createProjectHandler'
				:disabled='disableButtonFlag'
				>
				{{editFlag? 'Редактировать' : 'Создать'}} проект
			</button>
		</div>
	</div>
</template>

<script lang="ts" src="./CreateProjectComponent.ts"></script>
<style lang="scss" scoped src="./CreateProjectComponent.scss"></style>
