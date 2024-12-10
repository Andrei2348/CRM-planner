<template>
	<div class='notify__message'>
        <p 
            class='notify__text'
            v-if='data.invitation === "project"'
            >Пользователь 
            <span class='notify__username'>{{ data.username }}</span> 
            запрашивает разрешение на участие в проекте 
            <span class='notify__project'>"{{ data.projectName }}"</span>
        </p>
        <p 
            class='notify__text'
            v-if='data.invitation === "developer"'
            >Вас приглашают на участие в проекте 
            <span class='notify__project'>"{{ data.projectName }}"</span>
        </p>
        <div class="notify__buttons-wrapper">
            <button class='notify__button' @click="cancelHandler(data.id)">Отклонить</button>
            <button class='notify__button' @click="approvalHandler(data)">Добавить в проект</button>
        </div>
	</div>
</template>

<script lang="ts" src="./NotifyMessage.ts"></script>
<style lang="scss" scoped src="./NotifyMessage.scss"></style>
