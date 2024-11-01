<template>  
  <div class='textarea__wrapper'>  
    <label class='textarea__label' :for="name" v-if='label'>{{ label }}</label>  
    <div class="textarea__area-wrapper">  
      <textarea 
        ref="textarea" 
        class='textarea__area'  
        :class='{"blocked": readonly}'
        :id="name"  
        :placeholder="placeholder"  
        v-model="textareaValue"  
        :required="required"  
        :readonly="readonly"  
        :maxlength="maxlength"  
        :autocomplete="autocomplete"    
      ></textarea>  
    </div>    
  </div>  
</template>
 
 <script lang="ts" src="./TextAreaComponent.ts"></script>  
 <style lang="scss" scoped src="./TextAreaComponent.scss"></style>