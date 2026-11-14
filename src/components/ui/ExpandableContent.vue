<template>
  <div class="relative">
    <!-- Content container with dynamic height control -->
    <div
        ref="contentRef"
        class="transition-all duration-300 overflow-hidden relative"
        :class="{ 'max-h-36': !expanded, 'max-h-full': expanded }"
    >
      <slot />

      <!-- Gradient fade effect when collapsed -->
      <div
          v-if="!expanded && isOverflowing"
          class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-base-200 to-transparent pointer-events-none"
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
import { inject, ref, onMounted, nextTick, type Ref } from "vue";

const expanded = ref(false);
const isOverflowing = ref(false);
const contentRef = ref<HTMLElement | null>(null);
const windowRef = inject<Ref<HTMLElement | null>>("windowRef");

// Function to check if content overflows beyond 4 lines (~96px assuming 24px per line)
const checkOverflow = () => {
  if (contentRef.value) {
    isOverflowing.value = contentRef.value.scrollHeight > 96; // Adjust based on font size
  }
};

// Run check after mounting to measure content
onMounted(async () => {
 await nextTick(checkOverflow);
});

const toggleExpand = async (event: Event) => {
  event.preventDefault();
  const shouldCollapse = expanded.value;
  expanded.value = !expanded.value;

  if (shouldCollapse) {
    await nextTick(() => {
      windowRef?.value?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
};
</script>

<style scoped>
/* Prevents gradient from affecting the button */
button {
  position: relative;
}
</style>
