<template>
  <button
      class="flex justify-center items-center select-none leading-none"
      :class="[
      'focus:ring-4',
      rounded ? 'rounded-lg sm:rounded-md' : 'rounded-none',
      rounded ? 'min-h-14' : 'min-h-12',
      'text-xl sm:text-2xl md:text-3xl focus:outline-none px-5 py-2.5',
      buttonClasses
    ]"
      :disabled="disabled"
      :style="{ boxShadow }"
      @click="handleClick"
      @mousedown="isPressed = true"
      @mouseup="isPressed = false"
      @mouseleave="isPressed = false"
      @touchstart="isPressed = true"
      @touchend="isPressed = false"
      @touchcancel="isPressed = false"
      text=""
  >
    {{ text }}
  </button>
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
  },
  variant: {
    type: String,
    default: "primary",
  }
});

const isPressed = ref(false);

const boxShadow = computed(() =>
    props.rounded && !props.disabled && !isPressed.value
        ? "5px 5px 4px 0 rgba(0, 0, 0, 0.25)"
        : "none"
);

const buttonClasses = computed(() => {
  if (props.disabled) {
    return "btn btn-disabled";
  }

  let variantClass = "btn";
  if (props.variant === "secondary") variantClass += " btn-secondary";
  if (props.variant === "accent") variantClass += " btn-accent";

  return isPressed.value ? `${variantClass} active` : `${variantClass} hover`;
});

const handleClick = (event: MouseEvent | TouchEvent) => {
  if (props.disabled) return; 
  event.preventDefault();

  if (props.route) {
    const link = document.createElement('a');
    link.href = props.route;
    link.download = link.href.substring(link.href.lastIndexOf('/') + 1);
    link.click();
  }
};
</script>
