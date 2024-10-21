<template>
	<div class='login__wrapper'>
		<h2 class='login__title'>Авторизация</h2>
		<InputComponent 
			label='Ваша почта' 
			name='email' 
			@update:modelValue='getInputData'
			placeholder='Введите ваш email'
		/>
		<InputComponent 
			label='Пароль' 
			name='password'
			placeholder='Введите пароль'
			@update:modelValue='getInputData'
			/>
		<button 
			class='login__button'
			:disabled='disableButtonFlag'
			@click='loginUserHandler'
			>Войти</button>
	</div>
</template>

<script lang="ts" src="./LoginForm.ts"></script>
<style lang="scss" scoped src="./LoginForm.scss"></style>
