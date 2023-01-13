<template>
  <div class="btns">
    <button v-if="after" class="btn secondary" type="button">Go Back</button>
    <button v-if="next" class="btn" type="button" @click="emitUrlGo">{{nextText}}</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  after: Boolean,
  next: Boolean,
  nextText: String
})

const emit = defineEmits(['urlGo'])

function emitUrlGo(){
  emit('urlGo')
}
</script>

<style scoped>
</style>