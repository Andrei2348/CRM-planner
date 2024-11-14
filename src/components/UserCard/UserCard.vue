<template>
	<div class='user__wrapper'>
		Имя пользователя: {{ user.username }}
	</div>
  <button @click='getUserInfoHandler'>
    Получить данные
  </button>
</template>

<script lang="ts" src="./UserCard.ts"></script>
<style lang="scss" scoped src="./UserCard.scss"></style>
