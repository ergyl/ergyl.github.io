<template>
  <div class="p-4">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
      <div v-for="skill in skills" :key="skill.name"
           class="w-full p-2 rounded-xl text-center text-sm text-accent-content bg-accent">
        <span class="font-bold">{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const skills = ref([
  {name: "C#"},
  {name: "Java"},
  {name: ".NET"},
  {name: "JavaScript"},
  {name: "TypeScript"},
  {name: "Git"},
  {name: "SQL"},
  {name: "CI/CD"},
]);
</script>

<style scoped>
</style>
