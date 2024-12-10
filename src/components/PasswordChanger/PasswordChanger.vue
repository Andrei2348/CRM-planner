<template>   
  <div class='settings__wrapper'>
    <h2 class='settings__title'>Смена пароля</h2>

    <InputComponent 
      label='Введите ваш новый пароль' 
      type='password'
      name='password'
      placeholder='Введите новый пароль'
      @update:modelValue='getInputData'
      @focus="handleFocus('password')"
      :error='displayErrors.password'
    />

    <InputComponent 
      label='Повторите ваш новый пароль' 
      type='password'
      name='repassword'
      placeholder='Повторите новый пароль'
      @update:modelValue='getInputData'
      @focus="handleFocus('repassword')"
      autocomplete='new-password'
      :error='displayErrors.repassword'
    />

    <button 
      class='settings__button'
      :disabled='disableButtonFlag'
      @click='saveButtonHandler'
      >Изменить пароль
    </button>

  </div>  
</template>  

<script lang="ts" src="./PasswordChanger.ts"></script>  
<style lang="scss" scoped src="./PasswordChanger.scss"></style>