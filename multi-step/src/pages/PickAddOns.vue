<template>
  <div>
    Pick add-ons
Add-ons help enhance your gaming experience.

Online service
Access to multiplayer games
+$1/mo

Larger storage
Extra 1TB of cloud save
+$2/mo

Customizable Profile
Custom theme on your profile
+$2/mo


    <Btns :next="true" :after="false" v-on:urlGo="urlGo" nextText="Next Step"/>
  </div>
</template>

<script setup>
import Btns from '@/components/Btns.vue';
</script>

<style>
</style>
