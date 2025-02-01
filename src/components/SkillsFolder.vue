<template>
  <Card class="retro-window max-w-2xl mx-auto mt-8">
    <div class="retro-window-title">
      <span>skills.sys</span>
      <span class="text-xl">×</span>
    </div>
    <div class="p-4">
      <div class="grid grid-cols-2 gap-4">
        <div v-for="skill in skills" :key="skill.name" class="retro-window">
          <div class="p-2">
            <div class="flex justify-between mb-1">
              <span>{{ skill.name }}</span>
              <span>{{ skill.level }}</span>
            </div>
            <div class="h-2 bg-gray-300">
              <div
                  class="h-full bg-[#000080]"
                  :style="{ width: skill.level }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import Card from '@/components/ui/Card.vue';

// Skills data as reactive state using ref
const skills = ref([
  {name: 'HTML', level: '90%'},
  {name: 'CSS', level: '85%'},
  {name: 'JavaScript', level: '80%'},
  {name: 'React', level: '75%'},
  {name: 'TypeScript', level: '70%'},
]);
</script>

<style scoped>
/* Add any custom styles here */
</style>
