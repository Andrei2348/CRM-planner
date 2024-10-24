<template>  
	<div class="notfound">   
		<p class='notfound__background'>404</p>
    <div class="notfound__content">
      <h1 class='notfound__title'>Страница не найдена</h1>
      <p class='notfound__text'>К сожалению, запрашиваемая вами страница не найдена, она была перемещена или удалена, или ее никогда и не было.</p>
        <Router-link class='notfound__button' to='/'>На главную</Router-link>
    </div>
	</div>  
</template>  

<script lang="ts" src="./NotFoundView.ts"></script>  
<style lang="scss" scoped src="./NotFoundView.scss"></style>
