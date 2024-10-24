<template>
	<div class='login__layout'>
		<img class='login__background' :src="backgroundImage" alt="Background login">
		<div class='login__content'>
			<slot />
		</div>
	</div>
</template>

<script lang="ts" src="./LoginLayout.ts"></script>
<style lang="scss" scoped src="./LoginLayout.scss"></style>