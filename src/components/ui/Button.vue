<template>
  <component
      :is="isExternal ? 'a' : 'button'"
      class="flex justify-center items-center select-none"
      :class="[
      'text-white focus:ring-4',
      rounded ? 'rounded-lg' : 'rounded-none',
      rounded ? 'min-h-20' : 'min-h-14',
      'text-2xl focus:outline-none',
      buttonClasses,
      'px-5 py-2.5 inline-flex items-center',
    ]"
      :href="isExternal ? route : undefined"
      :target="isExternal ? '_blank' : undefined"
      :rel="isExternal ? 'noopener noreferrer' : undefined"
      :disabled="disabled"
      :style="{ boxShadow }"
      @click="handleClick"
      @mousedown="isPressed = true"
      @mouseup="isPressed = false"
      @mouseleave="isPressed = false"
      @touchstart="isPressed = true"
      @touchend="isPressed = false"
      @touchcancel="isPressed = false"
  >
    <span class="leading-none">{{ text }}</span>
  </component>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

// Props
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  rounded: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  route: {
    type: String,
    default: "",
  }
});

const isPressed = ref(false);

const isExternal = computed(() => props.route.startsWith("http"));
const boxShadow = computed(() =>
    props.rounded && !props.disabled && !isPressed.value
        ? "5px 5px 4px 0 rgba(0, 0, 0, 0.25)"
        : "none"
);

const buttonClasses = computed(() => {
  if (props.disabled) {
    return "bg-[var(--primary-200)] text-[var(--neutral-900)]"; // Disabled state with custom colors
  } else if (isPressed.value) {
    return "bg-[var(--accent-500)]"; // On press, use accent color
  } else {
    return "bg-[var(--primary-500)] hover:bg-[var(--primary-600)]"; // Default button and hover state
  }
});

// Handle click event
const handleClick = (event: Event) => {
  if (props.disabled || isExternal.value) return; // Allow default behavior for external links or disabled buttons
  event.preventDefault();
  // No internal logic for route handling here, just prevent default on click
};
</script>
