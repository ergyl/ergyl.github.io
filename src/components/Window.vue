<template>
  <div v-if="!isHidden" class="retro-window max-w-2xl mx-auto mt-8">
    <!-- Title -->
    <div class="retro-window-title">
      <span class="select-none"> {{ headerTitle }}</span>
      <span class="text-xl cursor-pointer select-none" @click=toggle>×</span>
    </div>

    <!-- Content -->
    <div class="p-4 space-y-4">
      <h2 class="text-2xl font-bold">{{ bodyTitle }}</h2>
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

defineProps<{
  headerTitle: string;
  bodyTitle?: string | undefined;
}>();

const isHidden = ref(false);

function toggle() {
  isHidden.value = !isHidden.value;
}
</script>

<style scoped>
</style>
