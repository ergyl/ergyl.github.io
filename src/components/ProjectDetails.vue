<template>
  <article class="retro-window w-full">
    <div class="bg-base-100 text-base-content shadow-lg p-4">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <h2 class="text-xl font-bold">{{ project.title }}</h2>
        <span
            class="pill"
            :class="project.status === 'ongoing' ? 'bg-accent text-accent-content' : 'bg-base-300'"
        >
          {{ project.status }}
        </span>
      </div>

      <hr class="my-2"/>

      <img
          v-if="project.image"
          :src="project.image"
          :alt="`${project.title} screenshot`"
          class="mx-auto mb-4 w-full"
          :class="{ 'md:w-1/2': project.imageHalfWidth }"
      />

      <h3 class="font-bold">tl;dr</h3>
      <p class="mb-4">{{ project.description }}</p>

      <h3 class="font-bold">Details</h3>
      <p>{{ project.longDescription }}</p>

      <div v-if="project.githubUrl" class="my-4 flex w-full items-center gap-2">
        <svg class="pointer-events-none h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24"
             aria-hidden="true">
          <path fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"></path>
        </svg>
        <a
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`View ${project.title} on GitHub`"
            class="text-gray-500 hover:text-gray-900"
        >
          Link to Github repo
        </a>
      </div>

      <p class="text-sm text-accent">{{ project.tech.join(", ") }}</p>

      <button class="btn hover mt-4" type="button" @click="$emit('back')">
        Back to projects
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from "@/models/Project.ts";

defineProps<{
  project: Project;
}>();

defineEmits<{
  back: [];
}>();
</script>
