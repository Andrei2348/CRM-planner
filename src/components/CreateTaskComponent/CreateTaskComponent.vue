<template>
	<div 
		class='task__wrapper'
		:class='{"visible": uxuiStore.getIsCreateTaskPanelVisible}'
		>
		<button 
			class='task__show-button' 
			:class='{"hidden": uxuiStore.getIsCreateTaskPanelVisible}'
			@click='uxuiStore.setIsCreateTaskPanelVisible(true)'
		>
			+
		</button>
		<button 
			class='task__close-button' 
			@click='uxuiStore.setIsCreateTaskPanelVisible(false)'
		>
			<p class="task__close-button--text">+</p>
		</button>
		<h2 class='task__title'>Создание задачи</h2>
	
		<InputComponent 
			label='Задание' 
			name='task' 
			type='text'
			placeholder='Введите задание'
			@update:modelValue='getInputData'
			:modelValue='blankDataTask.task'
		/>

		<InputComponent 
			label='Дедлайн' 
			name='deadline' 
			type='date'
			placeholder='Дедлайн'
			@update:modelValue='getInputData'
			:modelValue='blankDataTask.deadline'
		/>

		<SelectMenu   
			label='Выберите исполнителя'  
			:title='getTitleById(blankDataTask.executorId)'  
			:persons='dataStore.usersList || []'
			@changeSelectHandler='changeExecutorHandler' 
		/>
		
		<div class="task__status-wrapper">
			<p class="task__label">Статус задания</p>
			<StatusMenu 
				class='task__status-dropdown'
				:title='blankDataTask.status'
				@changeSelectHandler='changeSelectHandler'
			/>
		</div>

		<TextAreaComponent 
			label='Комментарий' 
			name='comment' 
			type='text'
			placeholder='Введите комментарий'
			@update:modelValue='getInputData'
			:textareaValue='blankDataTask.comment'
		/>
		
		<button 
			class='task__button-create'
			:disabled='disableButtonFlag'
			@click='createTaskHandler'
			>
			Создать
		</button>
	
	</div>
</template>

<script lang="ts" src="./CreateTaskComponent.ts"></script>
<style lang="scss" scoped src="./CreateTaskComponent.scss"></style>
