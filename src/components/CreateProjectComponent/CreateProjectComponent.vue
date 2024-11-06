<template>
	<div class="task__wrapper">
		<!-- <h2 class='task__title'>Задача</h2>
		<div class="task__container">
		
			<InputComponent 
				label='Задание' 
				name='task' 
				type='text'
				placeholder='Введите задание'
				@update:modelValue='getInputData'
				:modelValue='blankDataTask.task'
			/> -->

			<!-- <DateElement 
				class="task__datapicker"
				placeholder="Дата подписания"
				objectKey="deadline"
				:value="blankDataTask.deadline"
				@dataChanged="getInputData"
				label="Дедлайн"
			/> -->

			<!-- <SelectMenu   
				label='Выберите исполнителя'  
				:title='getTitleById(blankDataTask.executorId)'  
				:persons='dataStore.usersList || []'
				@changeSelectHandler='changeExecutorHandler' 
			/> -->
	
			<!-- <div class="task__status-wrapper">
				<p class="task__label">Статус задания</p>
				<StatusMenu 
					class='task__status-dropdown'
					:title='blankDataTask.status'
					@changeSelectHandler='changeSelectHandler'
				/>
			</div> -->

			<!-- <TextAreaComponent 
				label='Комментарий' 
				name='comment' 
				type='text'
				placeholder='Введите комментарий'
				@update:modelValue='getInputData'
				:textareaValue='blankDataTask.comment'
			/> -->

			<!-- <ColorPicker 
				name='color'
				:color='blankDataTask.color'
				@colorChanged='getInputData'
			/> -->
	
			<!-- <button 
				class='task__button-create'
				:disabled='disableButtonFlag'
				@click='createTaskHandler'
				>
				{{editFlag? 'Редактировать' : 'Создать'}}
			</button> -->
		<!-- </div> -->
	</div>
</template>

<script lang="ts" src="./CreateProjectComponent.ts"></script>
<style lang="scss" scoped src="./CreateProjectComponent.scss"></style>
