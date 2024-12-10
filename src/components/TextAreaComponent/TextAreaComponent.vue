<template>  
  <div class='textarea__wrapper'>  
    <label class='textarea__label' :for="name">{{ label }}</label>  
    <div class="textarea__area-wrapper">  
      <textarea  
        class='textarea__area'  
        :id="name"  
        :placeholder="placeholder"  
        v-model="textareaValue"  
        :required="required"  
        :readonly="readonly"  
        :maxlength="maxlength"  
        :autocomplete="autocomplete"
        @input="adjustHeight"  
        ref="textarea"
      ></textarea>  
    </div>    
  </div>  
</template>
 
 <script lang="ts" src="./TextAreaComponent.ts"></script>  
 <style lang="scss" scoped src="./TextAreaComponent.scss"></style>