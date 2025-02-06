<template>
  <div class="p-4">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
      <div v-for="skill in skillsMappedToColors" :key="skill.skillName.name"
           :class="['w-full p-2 text-center border-4 border-[#dfdfdf] border-b-[#808080] border-r-[#808080] text-sm', skill.bgClass]">
        <span class="font-bold">{{ skill.skillName.name }}</span>
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

const bgClasses = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-indigo-400",
  "bg-teal-400",
];

const skillsMappedToColors = computed(() =>
    skills.value.map((skillName, index) => ({
      skillName: skillName,
      bgClass: bgClasses[index % bgClasses.length],
    }))
);
</script>

<style scoped>
</style>
