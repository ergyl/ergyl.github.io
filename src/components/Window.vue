<template>
  <div v-if="!isHidden" ref="windowRef" class="retro-window max-w-2xl mx-auto mt-8">
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
import {provide, ref} from "vue";

defineProps<{
  headerTitle: string;
  bodyTitle?: string | undefined;
}>();

const emit = defineEmits(["update:hidden"])

const isHidden = ref(false);
const windowRef = ref<HTMLElement | null>(null);

provide("windowRef", windowRef);

function toggle() {
  isHidden.value = !isHidden.value;
  emit("update:hidden", isHidden.value);
}
</script>

<style scoped>
</style>
