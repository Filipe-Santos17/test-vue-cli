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
    <button class="btn" type="button" @click="InpuTest">Next Step</button>
  </div>
</template>

<script setup>
import {ref} from "vue"

import InputComponent from './InputComponent.vue';
import TitlesSection from './TitlesSection.vue';

const testPhone = ref("")

function InpuTest(){
  console.log('test')
}
</script>

<style scoped>
  .btn{
    align-self: end;
    margin-top: 3rem;
  }
</style>