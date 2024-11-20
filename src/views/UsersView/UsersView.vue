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
				@deleteUserHandler='deleteUserHandler'
			/>
		</div>
		<EmptyListComponent
			v-else
			message='Список участников пока пуст'
		/>
	</MainLayout>
</template>

<script lang="ts" src="./UsersView.ts"></script>
<style lang="scss" scoped src="./UsersView.scss"></style>