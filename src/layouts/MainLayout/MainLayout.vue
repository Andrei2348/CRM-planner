<template>
	<main class="main">
		<AsideComponent @logoutUserHandler='logoutUserHandler'/>
		<NavbarComponent />
		<slot />
	</main>
</template>

<script lang="ts" src="./MainLayout.ts"></script>
<style lang="scss" scoped src="./MainLayout.scss"></style>