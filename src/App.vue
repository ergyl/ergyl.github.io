<template>
  <Header/>


  <main>
    <div :class="{'min-h-screen': !allWindowsAreHidden, 'p-4': true}">
      <div class="fixed inset-0 pointer-events-none"/>

      <Secret v-if="allWindowsAreHidden" :resetWindows="resetWindows"/>

      <div v-else class="max-w-6xl mx-auto space-y-4">
        <Window id="terminal" header-title="terminal.exe" @update:hidden="updateWindowState('terminal', $event)">
          <Terminal/>
        </Window>
        <Window id="about" header-title="about.txt" body-title="About me"
                @update:hidden="updateWindowState('about', $event)">
          <ExpandableContent>
            <p> I'm Erik, a junior software developer based in Gothenburg, Sweden. Coding is my passion, and I'm
              dedicated
              to constantly improving through continuous learning. My journey in tech started with a curiosity about how
              computers work, and now I'm turning that curiosity into a career.
            </p>
            <p>
              I love coding and think of ways to improve my skillset all the time. For me, it's a creative outlet that I
              didn't know I had longed for all my life. I'm mostly into back end development and specifically C# and
              Java,
              but I'm open to all opportunities to branch out.
            </p>
            <p>
              I see myself an enabler. I like to help. I work hard. I really love learning new things and strongly
              believe
              in sharing knowledge, teaching each other those new things we learn.
            </p>
            <p>
              Some other things that I think are fun are: gaming, cooking, and travelling.
            </p>
          </ExpandableContent>
        </Window>
        <Window id="skills" header-title="skills.sys" @update:hidden="updateWindowState('skills', $event)">
          <Skills/>
        </Window>
        <Window id="projects" header-title="projects/" @update:hidden="updateWindowState('projects', $event)">
          <ProjectsOverview/>
        </Window>
        <Window id="resume" header-title="resume.md" body-title="Checkout my CV"
                @update:hidden="updateWindowState('resume', $event)">
          <div class="flex flex-row justify-center gap-4 pb-4">
            <Button text="ENG Resume" :rounded="true" :route="EngCV"/>
            <Button text="SWE Resume" :rounded="true" :route="SweCV"/>
          </div>
        </Window>
      </div>
    </div>
  </main>
  <footer>
    <Footer/>
  </footer>
</template>

<script setup lang="ts">
import Terminal from "@/components/Terminal.vue";
import {computed, ref} from "vue";
import Footer from "@/components/Footer.vue";
import Window from "@/components/Window.vue";
import Skills from "@/components/Skills.vue";
import ProjectsOverview from "@/components/ProjectsOverview.vue";
import Button from "@/components/ui/Button.vue";
import ExpandableContent from "@/components/ui/ExpandableContent.vue";
import Secret from "@/components/Secret.vue";
import Header from "@/components/Header.vue";

import SweCV from "@/assets/docs/Erik_CV_2025_SWE.pdf";
import EngCV from "@/assets/docs/Erik_CV_2025_ENG.pdf";

const theme = ref(localStorage.theme || "system");

const windowStates = ref(<Record<string, boolean>>{
  terminal: false,
  about: false,
  skills: false,
  projects: false,
  resume: false,
});

const updateWindowState = (windowName: string, isHidden: boolean) => {
  windowStates.value[windowName] = isHidden;
};

const allWindowsAreHidden = computed(() => Object.values(windowStates.value).every(hidden => hidden));

const resetWindows = () => {
  Object.keys(windowStates.value).forEach((window) => {
    windowStates.value[window] = false;
  })
};

const applyTheme = () => {
  const root = document.documentElement;

  if (theme.value === "dark") {
    root.classList.add("dark");
    localStorage.theme = "dark";
  } else if (theme.value === "light") {
    root.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    // System preference
    localStorage.removeItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", prefersDark);
  }
};
</script>
