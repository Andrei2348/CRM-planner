<template>
	<div class='login__wrapper'>
		<h2 class='login__title'>Авторизация</h2>
		<InputComponent 
			label='Ваша почта' 
			name='email' 
			type='text'
			@update:modelValue='getInputData'
			placeholder='Введите ваш email'
		/>
		<InputComponent 
			label='Пароль' 
			type='password'
			name='password'
			placeholder='Введите пароль'
			@update:modelValue='getInputData'
			/>
		<button 
			class='login__button'
			:disabled='disableButtonFlag'
			@click='loginUserHandler'
			>Войти</button>
			<p class='login__link-text'>У вас еще нет аккаунта?
				<Router-link to='register' class='login__link'>Зарегистрироваться.</Router-link>
			</p>
	</div>
</template>

<script lang="ts" src="./LoginForm.ts"></script>
<style lang="scss" scoped src="./LoginForm.scss"></style>
