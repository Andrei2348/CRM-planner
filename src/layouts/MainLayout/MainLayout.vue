<template>
	<main class="main">
		<AsideComponent />
		<NavbarComponent @logoutUserHandler='logoutUserHandler'/>
		<slot />
    <transition name="fade"> 
      <component v-if="uxuiStore.getCreatePanelName !== ''" :is="CreateLayout" />
		</transition>
		<transition>
			<component v-if="uxuiStore.getModalName !== ''" :is="ModalLayout" />
		</transition>
	</main>
</template>

<script lang="ts" src="./MainLayout.ts"></script>
<style lang="scss" scoped src="./MainLayout.scss"></style>