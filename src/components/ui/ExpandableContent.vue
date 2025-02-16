<template>
  <div class="relative">
    <!-- Content container with dynamic height control -->
    <div
        ref="contentRef"
        class="transition-all duration-300 overflow-hidden relative"
        :class="{ 'max-h-24': !expanded, 'max-h-full': expanded }"
    >
      <slot />

      <!-- Gradient fade effect when collapsed -->
      <div
          v-if="!expanded && isOverflowing"
          class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-base-100 to-transparent pointer-events-none"
      ></div>
    </div>

    <a
        v-if="isOverflowing"
        @click="toggleExpand"
        class="inline-block relative z-10 mt-4"
    >
      {{ expanded ? 'Read less' : 'Read more' }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const expanded = ref(false);
const isOverflowing = ref(false);
const contentRef = ref<HTMLElement | null>(null);

// Function to check if content overflows beyond 4 lines (~96px assuming 24px per line)
const checkOverflow = () => {
  if (contentRef.value) {
    isOverflowing.value = contentRef.value.scrollHeight > 96; // Adjust based on font size
  }
};

// Run check after mounting to measure content
onMounted(() => {
  nextTick(checkOverflow);
});

const toggleExpand = (event: Event) => {
  event.preventDefault();
  expanded.value = !expanded.value;
};
</script>

<style scoped>
/* Prevents gradient from affecting the button */
button {
  position: relative;
}
</style>
