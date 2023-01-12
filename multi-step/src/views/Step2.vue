<template>
   <div class="telaLogin">
    <ArticleMenu active1="item" active2="item active" active3="item" active4="item"/>
    <form>
      <SelectPlan/>
    </form>
  </div>
</template>

<script setup>
import SelectPlan from '@/components/SelectPlan.vue';
import ArticleMenu from '@/components/ArticleMenu.vue';
</script>

<style>
</style>