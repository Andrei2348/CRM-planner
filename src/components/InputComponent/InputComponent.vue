<template>  
<div class='input__wrapper'>
	<label class='input__label' :for="name">{{ label }}</label>  
	<input 
		class='input__area'  
		:type="type"   
		:id="name"  
		:placeholder="placeholder"  
		:v-model="inputValue"  
		:required="required"  
		:disabled="disabled"  
		:readonly="readonly"  
		:maxlength="maxlength"  
		:autocomplete="autocomplete"  
		:class="{ error: error }"  
	/>  
	<span v-if="error" class="error-message">{{ error }}</span>   
</div>
</template>  

<script lang="ts" src="./InputComponent.ts"></script>  
<style lang="scss" scoped src="./InputComponent.scss"></style>
