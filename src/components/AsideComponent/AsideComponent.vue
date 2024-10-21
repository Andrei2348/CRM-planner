<template>
	<aside class='aside'>
		<button class='aside__logout-button' @click='logoutHandler'>
		<SvgIcon icon="log-out" />
		</button>
		<MenuComponent />
	</aside>
</template>

<script lang="ts" src="./AsideComponent.ts"></script>
<style lang="scss" scoped src="./AsideComponent.scss"></style>
