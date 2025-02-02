<script setup lang="ts">
import Terminal from "@/components/Terminal.vue";
import AboutWindow from "@/components/AboutWindow.vue";
import SkillsFolder from "@/components/SkillsFolder.vue";
import ProjectsGrid from "@/components/ProjectsGrid.vue";
import ContactWindow from "@/components/ContactWindow.vue";
</script>

<template>
  <header>
    Erik Gylleus logo
  </header>

  <main>
    <div class="min-h-screen p-4">
      <div class="scanlines fixed inset-0 pointer-events-none"/>
      <div class="max-w-6xl mx-auto space-y-4">
        <Terminal/>
        <AboutWindow/>
        <SkillsFolder/>
        <ProjectsGrid/>
        <ContactWindow/>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
