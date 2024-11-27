<template>   
  <div class='settings__wrapper'>

    <div class="settings__profile">
      <h2 class='settings__title'>Редактирование пользователя</h2>
      <div class="settings__container">
        <div class="settings__side">

          <InputComponent 
            label='Введите ваше имя' 
            name='username' 
            type='text'
            placeholder='Введите ваше имя'
            :modelValue='userStore.getUserInfo?.username'
            @update:modelValue='getInputData'
          />

          <InputComponent 
            label='Введите ваш email' 
            name='email' 
            type='email'
            placeholder='Введите ваш email'
            :modelValue='userStore.getUserInfo?.email'
            @update:modelValue='getInputData'
          />

          <TextAreaComponent 
            label='О себе' 
            name='description' 
            type='text'
            placeholder='О себе'
            :textareaValue='userStore.getUserInfo?.description'
            @update:modelValue='getInputData'
          />
        </div>
        <div class="settings__side">
          <InputComponent 
            label='Введите ваш telegram' 
            name='telegram' 
            type='text'
            placeholder='Введите ваш email'
            :modelValue='userStore.getUserInfo?.telegram'
            @update:modelValue='getInputData'
          />

          <InputComponent 
            label='Введите ваш номер телефона' 
            name='phone' 
            type='text'
            placeholder='Введите ваш номер телефона'
            :modelValue='userStore.getUserInfo?.phone'
            @update:modelValue='getInputData'
          />

          <InputComponent 
            label='Введите ваш GitHub' 
            name='github' 
            type='text'
            placeholder='Введите ваш GitHub'
            :modelValue='userStore.getUserInfo?.github'
            @update:modelValue='getInputData'
          />

        </div>
      </div>
    </div>

    <div class="settings__right-side">
      <div class="settings__stack">
        <h3 class='settings__stack-title'>Выберите технологии:</h3>
        <div class='settings__stack-wrapper' v-if="safeTechnologies && !dataStore.getIsLoading">  
          <div class='settings__checkbox-group' v-for="item in safeTechnologies" :key="item.id">  
            <input type="checkbox" :id="`checkbox-${item.id}`" :value="item.id"/>  
            <label class='settings__stack-button' :for="`checkbox-${item.id}`">{{ item.name }}</label>  
          </div> 
        </div>
      </div>
      <div>
      {{disableButtonFlag}}
        <button 
          class='settings__button'
          :disabled='disableButtonFlag'
          >Сохранить изменения
        </button>
      </div>
    </div>
    
  </div>  
</template>  

<script lang="ts" src="./ProfileEdit.ts"></script>  
<style lang="scss" scoped src="./ProfileEdit.scss"></style>