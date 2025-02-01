<template>
  <div class="retro-window max-w-2xl mx-auto mt-8">
    <div class="retro-window-title">
      <span>projects.exe</span>
      <span class="text-xl">×</span>
    </div>
    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
          v-for="project in projects"
          :key="project.title"
          class="retro-window"
      >
        <div class="retro-window-title">
          <span>{{ project.title }}</span>
        </div>
        <div class="p-4">
          <p class="mb-2">{{ project.description }}</p>
          <p class="text-sm text-gray-600">{{ project.tech }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

// Define the type for a project
interface Project {
  title: string;
  description: string;
  tech: string;
}

// Define the projects array
const projects = ref<Project[]>([
  {
    title: "Weather App",
    description: "A retro-styled weather application",
    tech: "React, TypeScript, API",
  },
  {
    title: "Task Manager",
    description: "A Windows 98 inspired todo list",
    tech: "React, Redux, TypeScript",
  },
  {
    title: "Portfolio",
    description: "This retro-themed portfolio site",
    tech: "React, Tailwind CSS",
  },
]);
</script>

<style scoped>
/* Add any custom styles here */
</style>
