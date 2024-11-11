<template>
	<div class='register__wrapper'>
		<h2 class='register__title'>Регистрация</h2>
		<InputComponent 
			label='Введите ваше имя' 
			name='username' 
			type='text'
			:error='displayErrors.username'
			@update:modelValue='getInputData'
			placeholder='Введите ваше имя'
			@focus="handleFocus('username')"
		/>
		<InputComponent 
			label='Введите ваш email' 
			name='email' 
			type='email'
			:error='displayErrors.email'
			@update:modelValue='getInputData'
			placeholder='Введите ваш email'
			@focus="handleFocus('email')"
		/>
		<InputComponent 
			label='Введите пароль' 
			type='password'
			name='password'
			:error='displayErrors.password'
			placeholder='Введите пароль'
			@update:modelValue='getInputData'
			@focus="handleFocus('password')"
			/>
			<InputComponent 
			label='Повторите пароль' 
			type='password'
			name='repassword'
			:error='displayErrors.repassword'
			placeholder='Повторите пароль'
			autocomplete='new-password'
			@update:modelValue='getInputData'
			@focus="handleFocus('repassword')"
			/>
		<button 
			class='register__button'
			:disabled='!disableButtonFlag'
			@click='registerUserHandler'
			>Зарегистрироваться
		</button>
		<p class='register__link-text'>У вас уже есть аккаунт?
			<Router-link to='login' class='register__link'>Войти.</Router-link>
		</p>
	</div>
</template>

<script lang="ts" src="./RegisterForm.ts"></script>
<style lang="scss" scoped src="./RegisterForm.scss"></style>
