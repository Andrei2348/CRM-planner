<template>
	<main class="main">
		<AsideComponent @logoutUserHandler='logoutUserHandler'/>
		<NavbarComponent />
		<slot />

		<component v-if="uxuiStore.modalName.modalName !== ''" :is="CreateLayout">
      <template
        #modal__header
        v-if="uxuiStore.modalName.modalName !== 'ConfirmationDelete'"
      >
        <ModalHeader :index="uxuiStore.modalName?.index" />
      </template>
    </component>
		
	</main>
</template>

<script lang="ts" src="./MainLayout.ts"></script>
<style lang="scss" scoped src="./MainLayout.scss"></style>