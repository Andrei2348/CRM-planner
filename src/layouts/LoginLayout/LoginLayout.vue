<template>
	<div class='login__layout'>
		<img class='login__background' :src="backgroundImage" alt="Background login">
		<div class='login__content'>
			<slot />
		</div>
		<div class="login__time-wrapper">
			<span class="login__day-number">{{ day }} </span>
			<div>
      	<span class="login__mounth">{{ monthName }}</span>   
				<span class="login__year">{{ year }}</span> 
			</div>
			<span class="login__day">{{ weekDay }}</span>  
      <span class="login__time">{{ formattedTime }}</span>
		</div>
	</div>
</template>

<script lang="ts" src="./LoginLayout.ts"></script>
<style lang="scss" scoped src="./LoginLayout.scss"></style>