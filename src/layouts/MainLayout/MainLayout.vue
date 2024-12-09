<template>
	<main 
		class="main" 
		@mousedown="onMouseDown" 
		@mouseup="onMouseUp">
		<AsideComponent />
		<NavbarComponent @logoutUserHandler='logoutUserHandler'/>
		<slot />
    <transition name="fade"> 
      <component v-if="uxuiStore.getCreatePanelName !== ''" :is="CreateLayout" />
		</transition>
		<transition>
			<component v-if="uxuiStore.getModalName !== ''" :is="ModalLayout" />
		</transition>

		<NotifyLayout 
			v-if="showNotifyPermission"
			class="navbar__notify-area" 
			@closeNotify='closeNotify'
		/>

		<InfoNotify class='main__notify'/>
		
	</main>
</template>

<script lang="ts" src="./MainLayout.ts"></script>
<style lang="scss" scoped src="./MainLayout.scss"></style>