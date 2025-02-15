<template>
  <div class="p-4 flex flex-wrap gap-4">
    <div
        v-for="project in projects"
        :key="project.title"
        class="retro-window w-full"
    >
      <div class="retro-window-title">
        <span class="select-none text-xl font-bold">{{ project.title }}</span>
      </div>
      <div class="project-card">
        <p class="mb-2">{{ project.description }}</p>
        <span
            v-for="(tech, index) in project.tech"
            :key="index"
            class="text-sm text-accent">{{ tech }}<span v-if="index < project.tech.length - 1">, </span>
        </span>
      <!-- Topics with dynamic background colors -->
      <div class="flex flex-wrap gap-2 p-2">
        <span
            v-for="(topic, index) in project.topics"
            :key="index"
            class="bg-accent text-accent-content pill">{{ topic }}</span>
      </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Project } from "@/models/Project.ts";

// Sample projects
const projects = ref<Project[]>([
  {
    title: "Classifieds Platform",
    description: "Web application for users to publish ads for items.",
    tech: [
      "Java",
      "Spring Boot",
      "TypeScript",
      "ActiveMQ",
      "Vue.js",
      "Node.js",
      "Vite",
      "Bootstrap"
    ],
    topics: [
      "Backend",
      "Microservices",
      "REST API"
    ]
  },
  {
    title: "Educational Game Web Application",
    description: "Web application with a memory-style educational game, fetching data from a public API.",
    tech: [
      "JavaScript",
      "Vue.js",
      "Node.js",
      "Vite",
      "Vitest",
      "TailwindCSS",
      "Pinia"
    ],
    topics: [
      "Frontend",
      "Game"
    ]
  },
  {
    title: "Arcade Game",
    description: "Classic arcade game for desktop, inspired by Flappy Birb.",
    tech: [
      "Java",
      "libGDX",
      "Gradle"
    ],
    topics: [
      "Desktop",
      "Game"
    ]
  },
]);
</script>

<style scoped>
</style>
