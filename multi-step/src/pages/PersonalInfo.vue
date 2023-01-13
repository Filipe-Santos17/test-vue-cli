<template>
  <div class="container">
    <TitlesSection title="Personal info" subtitle="Please provide your name, email address, and phone number."/>
    <section class="form-section">
      <InputComponent 
        labelContent = "Name"
        idInput = "info_name"
        placeholderInput = "e.g. Stephen King"
        typeInput = "text"
      />
      <InputComponent 
        labelContent = "Email Address"
        idInput = "info_email"
        placeholderInput = "e.g. stephenking@lorem.com"
        typeInput = "email"
      />
      <InputComponent 
        labelContent = "Phone Number"
        idInput = "info_phone"
        placeholderInput = "e.g. +1 234 567 890"
        typeInput = "tel"
      />
    </section>
    <Btns :next="true" :after="false" v-on:urlGo="urlGo" nextText="Next Step"/>
  </div>
</template>

<script setup>
import {ref} from "vue"

import InputComponent from '@/components/InputComponent.vue';
import TitlesSection from '@/components/TitlesSection.vue';
import Btns from '@/components/Btns.vue';

//Variables v-model
const testPhone = ref("")

function urlGo(){
  console.log('test')
}
</script>

<style scoped>
  .btns {
    margin-top: 3rem;
    justify-content: flex-end;
  }
</style>