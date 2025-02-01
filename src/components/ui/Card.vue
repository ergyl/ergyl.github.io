<template>
  <div class="card bg-white p-4 shadow-md rounded-lg">
    <slot></slot> <!-- To allow content to be passed in -->
  </div>
</template>

<script setup>
</script>

<style scoped>
.card {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
