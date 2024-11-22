<template>
  <div class='links__wrapper'>
    <h2 class='links__title'>Полезные ссылки:</h2> 
    <form class="links__container" @submit.prevent="createLinkHandler">
      <InputComponent 
        label='Введите ссылку'
        type='text'
        placeholder="Введите ссылку"
        name='link'
        @update:modelValue='getInputData'
        :modelValue='blankDataLink.link'
      />
      <InputComponent 
        label='Введите описание ссылки'
        type='text'
        placeholder='Введите описание ссылки'
        name='description'
        @update:modelValue='getInputData'
        :modelValue='blankDataLink.description'
      />
      <button 
        class='links__button-create' 
        type="submit" 
        :disabled="isSubmitDisabled"
      >
      {{editFlag? 'Редактировать' : 'Создать'}} ссылку
      </button>
    </form>
  </div>
</template>

<script lang="ts" src="./CreateLinkComponent.ts"></script>
<style lang="scss" scoped src="./CreateLinkComponent.scss"></style>
