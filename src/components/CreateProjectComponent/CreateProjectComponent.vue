<template>
	<div class="projects__wrapper">
	
		<h2 class='projects__title'>проект</h2>
		<div class="projects__container">
		
			<InputComponent 
				label='Название проекта' 
				name='task' 
				type='text'
				placeholder='Введите название проекта'
			/>

			<TextAreaComponent 
				label='Описание проекта' 
				name='description' 
				type='text'
				placeholder='Введите описание проекта'
			/>

			<ColorPicker 
				name='color'
			/>
	
			<button 
				class='projects__button-create'
				>
				Создать проект
			</button>
		</div>
	</div>
</template>

<script lang="ts" src="./CreateProjectComponent.ts"></script>
<style lang="scss" scoped src="./CreateProjectComponent.scss"></style>
