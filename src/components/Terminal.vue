<template>
  <div id="terminal" class="p-4 font-vt323 text-lg whitespace-pre-line border border-accent-100">
    {{ text }}
    <span class="cursor-blink">_</span>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';

const text = ref('');
const fullText = '> Hello World!\n> My name is Erik\n> Welcome to my portfolio...';

onMounted(() => {
  let currentIndex = 0;
  const timer = setInterval(() => {
    if (currentIndex < fullText.length) {
      text.value = fullText.slice(0, currentIndex + 1);
      currentIndex++;
    } else {
      clearInterval(timer);
    }
  }, 50);

  // Cleanup when component is unmounted
  return () => clearInterval(timer);
});
</script>

<style scoped>
</style>
