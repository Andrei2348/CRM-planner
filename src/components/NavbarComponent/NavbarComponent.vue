<template>
	<nav class='navbar'>
	<p class='navbar__user'>
		{{ userStore.userInfo?.username }}
	</p>
	</nav>
</template>

<script lang="ts" src="./NavbarComponent.ts"></script>
<style lang="scss" scoped src="./NavbarComponent.scss"></style>
