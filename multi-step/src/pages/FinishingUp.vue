<template>
  <div>
    Finishing up
Double-check everything looks OK before confirming.

<!-- Dynamically add subscription and add-on selections here -->

Total (per month/year)

    <Btns :next="true" :after="false" v-on:urlGo="urlGo" nextText="Confirm"/>    
  </div>
</template>

<script setup>
import Btns from '@/components/Btns.vue';
</script>

<style scoped>
</style>