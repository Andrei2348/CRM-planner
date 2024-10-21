<template>  
	<div class="notfound">   
		<p class='notfound__background'>404</p>
    <div class="notfound__content">
      <LogoComponent class='notfound__logo' />
      <h1 class='notfound__title'>Страница не найдена</h1>
      <p class='notfound__text'>К сожалению, запрашиваемая вами страница не найдена, она была перемещена или удалена, или ее никогда и не было.</p>
      
        <button class='notfound__button'><SvgIcon icon="web" />На главную</button>
      
    </div>
    <div class="notfound__copyright">
      <SvgIcon icon="catGray" />
      <p class='notfound__copyright-text'>2024 Код на салфетке</p>
    </div>
	</div>  
</template>  

<script lang="ts" src="./NotFoundView.ts"></script>  
<style lang="scss" scoped src="./NotFoundView.scss"></style>
