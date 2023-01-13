<template>
  <section class="Image">
    <article class="menu">
      <IconPage numbStep="1" step="Step 1" titleStep="Your info" :choice="active1"/>
      <IconPage numbStep="2" step="Step 2" titleStep="Select plan" :choice="active2"/>
      <IconPage numbStep="3" step="Step 3" titleStep="Add-ons" :choice="active3"/>
      <IconPage numbStep="4" step="Step 4" titleStep="Summary" :choice="active4"/>     
    </article>
    <div>
      <img src="../assets/bg-sidebar-desktop.svg" alt="sidebar desktop" />
    </div>
  </section>
</template>

<script setup>
import IconPage from './IconPage.vue';
import { defineProps } from 'vue';

const props = defineProps({
  active1: String,
  active2: String,
  active3: String,
  active4: String
})
</script>

<style scoped>
img{
  height: 520px;
}

@media screen  and (max-width: 960px){
  img{
    display: none;
  }

  .Image{
    background: url('../assets/bg-sidebar-mobile.svg') no-repeat;
    background-size: cover;
    height: 200px;
  }
}
</style>