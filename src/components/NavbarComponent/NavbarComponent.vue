<template>
	<nav class='navbar'>
		<button 
			class="navbar__burger" 
			@click='asideShowHandler'
		>
			<div class="navbar__line"></div>
		</button>
		<SearchComponent v-if='uxuiStore.getSelectedPage === 1 || (uxuiStore.getSelectedPage === 3 && userStore.getIsTeamLead)'/>
		<div class="navbar__person-wrapper">
			<p class='navbar__user'>
				{{ userStore.getUserInfo?.username }}
			</p>
			<div class="navbar__notify-wrapper" v-click-outside="closeNotify">
				<button 
					class='navbar__logout-button navbar__notify-button' 
					@click="toggleNotify"
					>
					<SvgIcon icon="message" />
					<span 
						class='navbar__notify-span'
						v-if='dataStore.getNotifyProjectList && 
						dataStore.getNotifyProjectList?.length > 0'
					>
						{{ dataStore.getNotifyProjectList?.length }}
					</span>
				</button>
				<NotifyLayout 
					v-if="showNotifyPermission"
					class="navbar__notify-area" 
					@closeNotify='closeNotify'
				/>
			</div>
			<button 
				class='navbar__logout-button' 
				@click='logoutHandler'
				>
				<SvgIcon icon="log-out" />
			</button>
		</div>
	</nav>
</template>

<script lang="ts" src="./NavbarComponent.ts"></script>
<style lang="scss" scoped src="./NavbarComponent.scss"></style>
