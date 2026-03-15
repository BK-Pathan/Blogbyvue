<template>
  <div v-if="totalPages > 1">
    <button 
      :disabled="currentPage === 1" 
      @click="$emit('change-page', currentPage - 1)">Prev</button>

    <span>Page {{ currentPage }} / {{ totalPages }}</span>

    <button 
      :disabled="currentPage === totalPages" 
      @click="$emit('change-page', currentPage + 1)">Next</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  (e: 'change-page', page: number): void
}>()
</script>

<style>
button { margin: 5px; padding: 5px 10px; }
</style>