<template>
  <section class="title-section">
      <h1 class="title">{{title}}</h1>
      <h3 class="subtitle">{{subtitle}}</h3>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  subtitle: String
})
</script>