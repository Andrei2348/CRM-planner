<template>
	<aside class='login__aside'>
		<InputComponent label='Ваша почта' name='email' @update:modelValue='getInputData'/>
		<InputComponent label='Пароль' name='password'/>
		<button>Войти</button>
	</aside>
</template>

<script lang="ts" src="./LoginForm.ts"></script>
<style lang="scss" scoped src="./LoginForm.scss"></style>
