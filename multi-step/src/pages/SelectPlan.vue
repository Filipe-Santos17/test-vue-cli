<template>
  <div class="container">
    <TitlesSection title="Select your Plan" subtitle="You have the option of monthly or yearly billing."/>
    <section class="form-section">
      <CardVue imgIcon="/img/icon-arcade.6f4cda28.svg" titleIcon="Arcade" priceIcon="$9/mo"/>
      <CardVue imgIcon="/img/icon-advanced.1a8ad30f.svg" titleIcon="Advanced" priceIcon="$12/mo"/>
      <CardVue imgIcon="/img/icon-pro.1e24cace.svg" titleIcon="Pro" priceIcon="$15/mo"/>
    </section>
  Monthly
  Yearly
   <Btns :next="true" :after="true" v-on:urlGo="urlGo" nextText="Next Step"/>
  </div>
</template>

<script setup>
  import TitlesSection from '@/components/TitlesSection.vue';
  import CardVue from '@/components/CardVue.vue';
  import Btns from '@/components/Btns.vue';
</script>

<style scoped>
  .form-section{
    flex-direction: row;
  }

  .btns{
    margin-top: 4rem;
  }
</style>