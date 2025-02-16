<template>
  <header>
    <div id="header" class="wrapper">
      <!-- Left side: Theme Toggle Switch -->
      <ToggleThemeSwitch/>

      <!-- Right side: Logo and Text -->
      <div class="flex items-center ml-auto space-x-2">
        <img
            id="logo"
            src="https://www.svgrepo.com/show/131095/noodles.svg"
            class="transition-all duration-300"
            alt="Logo"
        />
        <span
            id="logo-txt"
            class="logo-text text-base sm:text-lg md:text-xl lg:text-2xl font-semibold select-none transition-all duration-300"
        >
          Erik Gylleus
        </span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ToggleThemeSwitch from "@/components/ui/ToggleThemeSwitch.vue";
</script>
