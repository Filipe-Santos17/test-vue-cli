<template>
  <div class="telaLogin">
    <ArticleMenu/>
    <form>
      <PersonalInfo/>
    </form>
  </div>
</template>

<script setup>
import './scss/App.scss'
import ArticleMenu from './components/ArticleMenu.vue';
import PersonalInfo from './components/PersonalInfo.vue';
</script>