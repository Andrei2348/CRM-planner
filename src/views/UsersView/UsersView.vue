<template>
	<MainLayout class='users'>
		<div 
		v-if='filteredUsersList.length > 0'
		class="users__wrapper" 
		:class='{"visible": uxuiStore.getShowAsidePanel}'
	>
	<UserCard 
		v-for="user in filteredUsersList" 
		:key="user.id" 
		:user="user" 
	/>
		</div>
		<div
			v-else
			class="users__wrapper" 
			:class='{"visible": uxuiStore.getShowAsidePanel}'
		>
		Список участников пока пуст
		</div>
	</MainLayout>
</template>

<script lang="ts" src="./UsersView.ts"></script>
<style lang="scss" scoped src="./UsersView.scss"></style>