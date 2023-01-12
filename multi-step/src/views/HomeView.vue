<template>
  <div class="telaLogin">
    <ArticleMenu active1="item active" active2="item" active3="item" active4="item"/>
    <form>
      <PersonalInfo/>
    </form>
  </div>
</template>

<script setup>
import ArticleMenu from '@/components/ArticleMenu.vue';
import PersonalInfo from '@/components/PersonalInfo.vue';
</script>