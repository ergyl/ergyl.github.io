<template>
  <header>
    <div id="header" class="relative flex items-center justify-between p-6 w-full">
      <!-- Left side: Theme Toggle Switch -->
      <ToggleThemeSwitch/>

      <!-- Right side: Logo and Text -->
      <div class="absolute left-1/2 transform -translate-x-1/2"><img
          id="logo"
          src="@/assets/logo.svg"
          class="w-72 md:w-80 lg:w-96 h-auto p-2 transition-all duration-300 dark:invert"
          alt="Logo"
      />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ToggleThemeSwitch from "@/components/ui/ToggleThemeSwitch.vue";
</script>
