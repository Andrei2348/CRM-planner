<template> 
	<div class='input__wrapper' :class="{ 'error__place-visible': error }">  
		<label class='input__label' :for="name">{{ label }}</label>  
		<div class="input__area-wrapper">  
			<input :type="isPasswordVisible ? 'text' : type"  
				class='input__area'  
				:id="name"  
				:placeholder="placeholder"  
				v-model="inputValue"  
				:required="required"  
				:disabled="disabled"  
				:readonly="readonly"  
				:maxlength="maxlength"  
				:autocomplete="autocomplete"  
				:class="{ error: error }"  
				@focus="$emit('focus')"  
			/> 
		</div>  
			<button 
				class='input__password-visible' 
				v-if="isPasswordField" 
				type="button" 
				@click="togglePasswordVisibility"
			>  
				<SvgIcon v-if='isPasswordVisible' icon='eye-off' />
				<SvgIcon v-else icon='eye' />
			</button>  
		<span v-if="error" class="input__error-message">{{ error }}</span>  
	</div>  
 </template>  
 
 <script lang="ts" src="./InputComponent.ts"></script>  
 <style lang="scss" scoped src="./InputComponent.scss"></style>