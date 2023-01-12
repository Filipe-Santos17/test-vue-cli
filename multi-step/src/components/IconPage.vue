<template>
  <div :class="choice">
    <p class="item-number">{{numbStep}}</p>
    <div>
      <p class="step">{{step}}</p>
      <p class="step-title">{{titleStep}}</p>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    choice: String,
    numbStep: String,
    step: String,
    titleStep: String
  })
</script>