<template>
  <div class="retro-window max-w-2xl mx-auto mt-8">
    <div class="retro-window-title">
      <span>terminal.exe</span>
      <span class="text-xl">×</span>
    </div>
    <div class="bg-black text-green-500 p-4 font-vt323 text-lg whitespace-pre-line">
      {{ text }}
      <span class="cursor-blink">_</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const text = ref('');
const fullText = '> Hello World!\n> I am a Junior Software Developer\n> Welcome to my portfolio...';

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
/* You can include specific styles for the component here if needed */
</style>
