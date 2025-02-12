<template>
  <button
      class="flex justify-center items-center select-none leading-none"
      :class="[
      'focus:ring-4',
      rounded ? 'rounded-lg sm:rounded-md' : 'rounded-none',
      rounded ? 'min-h-14' : 'min-h-12',
      'text-xl sm:text-2xl md:text-3xl focus:outline-none',
      buttonClasses,
      'px-5 py-2.5 inline-flex items-center',
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
    return "btn-disabled";
  } else if (isPressed.value) {
    return "btn-pressed";
  } else {
    return "btn-active hover:btn-hover";
  }
});

const handleClick = (event: MouseEvent | TouchEvent) => {
  if (props.disabled) return; 
  event.preventDefault();
};
</script>
