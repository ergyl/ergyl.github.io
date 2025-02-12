<template>
  <div class="wrapper">
    <label
        class="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition has-[:checked]:bg-green-500">
      <input
          type="checkbox"
          class="peer sr-only"
          :checked="isDarkMode"
          @change="toggleTheme"
      />
      <span
          class="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
        <svg v-if="!isDarkMode" data-unchecked-icon xmlns="http://www.w3.org/2000/svg" class="size-4"
             viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"/>
        </svg>
        <svg v-else data-checked-icon xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20"
             fill="currentColor">
          <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"/>
        </svg>
      </span>
    </label>
  </div>
</template>


<script setup lang="ts">
import {ref, watch, onMounted} from "vue";

const isDarkMode = ref(localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches));

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  applyTheme();
};

const applyTheme = () => {
  const root = document.documentElement;

  if (isDarkMode.value) {
    root.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    root.classList.remove("dark");
    localStorage.theme = "light";
  }
};

onMounted(() => {
  applyTheme();
});

watch(isDarkMode, applyTheme);
</script>