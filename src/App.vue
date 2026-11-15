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
              I'm also a husband and a father, so needless to say, I spend a lot of time with my family. 
              Some other things I enjoy: gaming, cooking, and travelling.
            </p>
          </ExpandableContent>
        </Window>
        <Window id="skills" header-title="skills.sys" @update:hidden="updateWindowState('skills', $event)">
          <Skills/>
        </Window>
        <Window id="projects" header-title="projects/" @update:hidden="updateWindowState('projects', $event)">
          <ProjectsOverview/>
        </Window>
                <Window id="quote" header-title="simple.txt"
                @update:hidden="updateWindowState('quote', $event)">
                <p>
              <span class="text-accent">General Chuck Yeager — the first person to fly faster than sound — praised an airplane's engine system with
              the words: "simple, few parts, easy to maintain, very strong".</span>
              <br><span class="text-sm"><i>― Programming Pearls (1999) by Jon Bentley</i></span>
            </p>
        </Window>
        <Window id="resume" header-title="resume.md"
                @update:hidden="updateWindowState('resume', $event)">
          <div class="flex flex-col items-center justify-center gap-4 pb-4">
            <p>Here it is, the mandatory document that I sometimes forget to update.</p>
            <br>
            <Button text="Download CV" :rounded="true" :route="EngCV"/>
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

import EngCV from "@/assets/docs/Erik_CV_2026_ENG.pdf";

const windowStates = ref(<Record<string, boolean>>{
  terminal: false,
  quote: false,
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

</script>
