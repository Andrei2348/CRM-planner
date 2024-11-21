<template>
	<div class="projects__wrapper">
		<h2 class='projects__title'>проект</h2>
		<form class="projects__container" @submit.prevent="createProjectHandler">
		
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
				:disabled='disableButtonFlag'
				>
				{{editFlag? 'Редактировать' : 'Создать'}} проект
			</button>
		</form>
	</div>
</template>

<script lang="ts" src="./CreateProjectComponent.ts"></script>
<style lang="scss" scoped src="./CreateProjectComponent.scss"></style>
