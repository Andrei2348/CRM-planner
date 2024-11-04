<template>
	<main class="main">
		<AsideComponent @logoutUserHandler='logoutUserHandler'/>
		<NavbarComponent />
		<slot />

		<component v-if="uxuiStore.getCreatePanelName !== ''" :is="CreateLayout">
      <template #create__content />
    </component>
		
	</main>
</template>

<script lang="ts" src="./MainLayout.ts"></script>
<style lang="scss" scoped src="./MainLayout.scss"></style>