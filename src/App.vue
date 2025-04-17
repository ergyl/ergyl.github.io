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
            <p> I'm Erik, a software developer based in Gothenburg, Sweden. Coding is my passion, and I'm dedicated to
              constantly improving through continuous learning. I'm mostly into back end development and specifically C#
              and Java, but I'm open to all opportunities to branch out.
            </p>
            <p class="pt-5">
              My roadmap for software development:
              <br>
              <span class="text-accent">"General Chuck Yeager — the first person to fly faster than sound—praised an airplane's engine system with
              the words: `simple, few parts, easy to maintain, very strong`".</span>
              <br><i>― Programming Pearls (1999) by Jon Bentley</i>
            </p>
            <p class="pt-5">
              I love coding and think of ways to improve my skillset all the time. For me, it's a creative outlet that I
              didn't know I'd been craving for most of my life.
            </p>
            <p class="pt-5">
              My interest in tech started early, much thanks to my dad who worked in IT while I was growing up. I spent
              a lot of time playing computer games and experimenting on my computer — whether it was making 3D models
              and textures, building simple websites, or tweaking CSS just for fun. Now I'm turning that curiosity into
              a career. Never stop learning, right?
            </p>
            <p class="pt-5">
              I see myself an enabler. I like to help. I work hard. I really love learning new things and strongly
              believe
              in sharing knowledge, teaching each other those new things we learn.
            </p>
            <p class="pt-5">
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
        <Window id="todo" header-title="TODO.txt" body-title="MY TODO LIST">
          <p>These are things I wanna do in my spare time. Some ideas for personal projects I've written down to dig
            into. :)</p>
          <ul class="list-disc px-4">
            <li>Complete the <a href="https://github.com/theowni/Damn-Vulnerable-RESTaurant-API-Game" rel="external"
                                target="_blank">Damn
              Vulnerable RESTaurant</a> challenge to practise identifying and fixing vulnerabilities
            </li>
            <li>Build a simple AI chatbot with web speech API and Node.js</li>
            <li>Create a CLI tool</li>
            <li>Build a CDN from scratch using Lua</li>
            <li>Build a Promise in JavaScript from scratch</li>
            <li>Implement Bloom filter to learn how the data structure works under the hood</li>
            <li>Create a Emulator/Virtual machine (maybe?)</li>
          </ul>
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
