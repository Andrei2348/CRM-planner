<template>
	<MainLayout class='links'>
		<div
      class='links__wrapper'
      :class='{"visible": uxuiStore.getShowAsidePanel}'
    >
      <h3 class="links__title">Полезные ссылки:</h3> 
      
      <form class="links__inputs-container">
        <InputComponent 
          label='Введите ссылку'
          type='text'
          placeholder="Введите ссылку"
        />
        <InputComponent 
          label='Введите описание ссылки'
          type='text'
          placeholder='Введите описание ссылки'
        />
        <button class='links__inputs-button'>Создать ссылку</button>
      </form>
    </div>
	</MainLayout>
</template>

<script lang="ts" src="./LinksView.ts"></script>
<style lang="scss" scoped src="./LinksView.scss"></style>