<template>
	<div class='notify__message'>
        <p class='notify__text'>Пользователь {{ data.user_name }} запрашивает разрешение на участие в проекте {{ data.project_name }}</p>
        <div class="notify__buttons-wrapper">
            <button class='notify__button' @click="cancelHandler(data.id)">Отклонить</button>
            <button class='notify__button' @click="approvalHandler(data.id)">Добавить в проект</button>
        </div>
	</div>
</template>

<script lang="ts" src="./NotifyMessage.ts"></script>
<style lang="scss" scoped src="./NotifyMessage.scss"></style>
