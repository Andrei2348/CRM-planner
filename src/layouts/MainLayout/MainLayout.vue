<template>
	<main class="main">
		<AsideComponent />
		<NavbarComponent @logoutUserHandler='logoutUserHandler'/>
		<slot />
    <transition name="fade"> 
      <component v-if="uxuiStore.getCreatePanelName !== ''" :is="CreateLayout">
        <template #create__content />
      </component>
		</transition>
	</main>
</template>

<script lang="ts" src="./MainLayout.ts"></script>
<style lang="scss" scoped src="./MainLayout.scss"></style>