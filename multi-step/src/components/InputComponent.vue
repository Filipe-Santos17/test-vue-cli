<template>
  <div class="input-section">
    <label :for="idInput">{{labelContent}}</label>
    <input
      :type="typeInput"
      :name="idInput"
      :id="idInput"
      :placeholder="placeholderInput"
    />
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    labelContent: String,
    idInput: String,
    placeholderInput: String,
    typeInput: String,
  })
</script>