<template>
  <div class="wrapper">
    <label
        class="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition has-[:checked]:bg-primary">
      <input
          type="checkbox"
          class="peer sr-only"
          :checked="isDarkMode"
          @change="toggleTheme"
      />
      <span
          class="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-primary">
       
          <svg v-if="!isDarkMode" data-unchecked-icon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
</svg>
       <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
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