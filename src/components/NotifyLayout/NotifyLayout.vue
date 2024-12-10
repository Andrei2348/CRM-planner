<template>
	<div class='notify__layout'>
    <button class="notify__close-button" @click='closeNotifyHandler'>
    +
    </button>
    <div class="notify__content-wrapper">
      <NotifyMessage 
        v-for="data in dataStore.getNotifyProjectList"  
        :key="data.id"  
        :data="data" />
    </div>
	</div>
</template>

<script lang="ts" src="./NotifyLayout.ts"></script>
<style lang="scss" scoped src="./NotifyLayout.scss"></style>
