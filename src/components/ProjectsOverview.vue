<template>
  <div class="p-4 flex flex-wrap gap-4">
    <template v-if="!selectedProject">
      <div
          v-for="project in projects"
          :key="project.title"
          class="retro-window w-full"
          @click="selectProject(project)"
      >
        <div class="project-card">
          <span class="select-none text-xl font-bold">{{ project.title }}</span>
          <hr class="my-2"/>
          <p class="mb-2">{{ project.description }}</p>
          <span
              v-for="(tech, index) in project.tech"
              :key="index"
              class="text-sm text-accent">{{ tech }}<span v-if="index < project.tech.length - 1">, </span>
          </span>
          <div class="flex flex-wrap gap-2 p-2">
            <span
                v-for="topic in project.topics"
                :key="topic"
                class="bg-accent text-accent-content pill">{{ topic }}</span>
          </div>
        </div>
      </div>
    </template>
    <ProjectDetails v-else :project="selectedProject" @back="selectedProject = null"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Project } from "@/models/Project.ts";
import ProjectDetails from "@/components/ProjectDetails.vue";
import mullwardScreenshot from "@/assets/images/mullward-screenshot.png";
import jumpyGif from "@/assets/images/jumpy.gif";

const selectedProject = ref<Project | null>(null);

const selectProject = (project: Project) => {
  selectedProject.value = project;
};

const projects = ref<Project[]>([
    {
    title: "Mobile application for household coordination",
    description: "A mobile application that helps households stay organized, coordinated, and connected through a simple, dependable app.",
    longDescription: `
    As a parent, life is busy and often overwhelming. 
    The idea of this app came from my own experience of trying to manage our household's responsibilities, tasks, 
    and information on one central platform. Not finding a suitable solution, I decided to create one myself.
    
    The app is currently WIP. It's an Android-first mobile app and the basic idea is that it will give 
    people sharing a home one shared place to organize household life.

    The tech stack is centered around Flutter, using Material 3 for a consistent,
    adaptable, Android-friendly UI while leaving room to expand to iOS later. Supabase
    provides the managed backend, PostgreSQL database, Supabase Auth for sign-up,
    sign-in, and session management, and Supabase Realtime for live updates between
    household members.§
    `,
    status: "ongoing",
    tech: [
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL"
    ],
    topics: [
      "Mobile application",
    ]
  },
  {
    title: "Classifieds Platform",
    description: "Web application for users to publish ads for items.",
    longDescription: "School project. A classifieds platform where users can publish, browse, and manage ads for items. The application is split into services that communicate through a REST API and messaging, giving me practical experience with service boundaries and asynchronous workflows.",
    status: "completed",
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
    longDescription: "School project in collaboration with UX-designer students. The task was to use a public API to fetch data from. We built an educational memory game for children that fetches data for historical items. The project focuses on building a responsive frontend, managing application state, and keeping the game logic easy to test. UX-students made the wireframes and design and I coded the entire thing.",
    status: "completed",
    image: mullwardScreenshot,
    githubUrl: "https://mullward-raddar-museet.netlify.app/home",
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
    longDescription: "School project to recreate the classic Flappy Bird experience as a desktop arcade game with a highscore system. Explores game loops and lifecycle, input handling, collision detection, and the structure of a small game project.",
    status: "completed",
    image: jumpyGif,
    imageHalfWidth: true,
    githubUrl: "https://github.com/daniel-svendsen/Jumpy_Birb",
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
