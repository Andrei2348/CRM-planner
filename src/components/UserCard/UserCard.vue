<template>
	<div class='user__wrapper'>
    <div class='user__moreinfo-title-wrapper'>
      <p class="user__moreinfo-label user__moreinfo-header">Имя пользователя:</p>
    </div>
    <span class="user__moreinfo-title">{{ user.username }}</span>
    
    <div class="user__info-buttons-wrapper">
      <button class='user__info-button' @click='getUserInfoHandler' :disabled="disabledFlag">
        <SvgIcon icon='info' />
      </button>
      <button 
        v-if='userStore.getIsTeamLead && checkContainsUser(user)'
        class='user__info-button' 
        @click='deleteUserInfoHandler(user.id)'>
        <SvgIcon icon='trash'/>
      </button>
      <button 
        v-if='userStore.getIsTeamLead && !checkContainsUser(user)'
        class='user__info-button'
        @click="projectRequestHandler(user)" 
        :disabled='buttonAddFlag'
      >
      <SvgIcon icon='add'/>
      </button>
    </div>

    <div 
      class=user__moreinfo 
      v-if="userInfo && 
      (userInfo.telegram ||
      userInfo.phone ||
      userInfo.description ||
      userInfo.github ||
      (userInfo.stack && userInfo.stack?.length > 0) ||
      userInfo.email
    )">

      <div class="user__moreinfo-header--content">
        <div class="user__moreinfo-context" v-if='userInfo?.telegram'>
          <p class="user__moreinfo-label">Телеграм:</p>
          <span class="user__moreinfo-text">{{ userInfo?.telegram }}</span>
        </div>
        <div class="user__moreinfo-context" v-if='userInfo?.github'>
          <p class="user__moreinfo-label">Гитхаб:</p>
          <span class="user__moreinfo-text">{{ userInfo?.github }}</span>
        </div>
        <div class="user__moreinfo-context" v-if='userInfo?.email'>
          <p class="user__moreinfo-label">Email:</p>
          <span class="user__moreinfo-text">{{ userInfo?.email }}</span>
        </div>
        <div class="user__moreinfo-context" v-if='userInfo?.phone'>
          <p class="user__moreinfo-label">Номер телефона:</p>
          <span class="user__moreinfo-text">{{ userInfo?.phone }}</span>
        </div>
      </div>

      <div class="user__moreinfo-footer--content">
        <div class="user__moreinfo-context" v-if='userInfo?.description'>
          <p class="user__moreinfo-label">О себе:</p>
          <span class="user__moreinfo-text">{{ userInfo?.description }}</span>
        </div>

        <div 
          class="user__moreinfo-container" 
          v-if='userInfo?.stack && 
          userInfo?.stack?.length > 0'>
          <p class="user__moreinfo-label">Стек технологий:</p>
          <div class="user__stack-wrapper">
            <div class='user__stack-item' v-for="item in userInfo?.stack">    
              <div class='user__stack'>{{ item.name }}</div>
            </div> 
          </div>
        </div>
      </div>

    </div>
	</div>
</template>

<script lang="ts" src="./UserCard.ts"></script>
<style lang="scss" scoped src="./UserCard.scss"></style>
