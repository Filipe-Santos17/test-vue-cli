<template>
  <div class="telaLogin">
   <ArticleMenu active1="item" active2="item" active3="item active" active4="item"/>
   <form>
     <PickAddOns/>
   </form>
 </div>
</template>

<script setup>
import PickAddOns from '@/pages/PickAddOns.vue';
import ArticleMenu from '@/components/ArticleMenu.vue';
</script>

<style>
</style>