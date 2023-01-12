<template>
  <hgroup class="card">
    <figcaption>
      <img :src="imgIcon" alt=""/>
    </figcaption>
    <div>
      <h4>{{titleIcon}}</h4>
      <p>{{priceIcon}}</p>
    </div>
  </hgroup>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imgIcon: String,
  titleIcon: String,
  priceIcon: String
})
</script>