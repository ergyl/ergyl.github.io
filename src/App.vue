<script setup lang="ts">
import Terminal from "@/components/Terminal.vue";
import Footer from "@/components/Footer.vue";
import Window from "@/components/Window.vue";
import Skills from "@/components/Skills.vue";
import ProjectsOverview from "@/components/ProjectsOverview.vue";
import Button from "@/components/ui/Button.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer">
        <div class="relative w-9 sm:w-11 h-5 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Darkmode</span>
      </label>

    </div>
  </header>

  <main>
    <div class="min-h-screen p-4">
      <div class="fixed inset-0 pointer-events-none"/>
      <div class="max-w-6xl mx-auto space-y-4">
        <Terminal/>
        <Window id="about" header-title="about.txt" body-title="About me">
          <p> I'm Erik, a junior software developer based in Gothenburg, Sweden. Coding is my passion, and I'm dedicated
            to constantly improving through continuous learning. My journey in tech started with a curiosity about how
            computers work, and now I'm turning that curiosity into a career.
          </p>
          <p>
            I love coding and think of ways to improve my skillset all the time. For me, it's a creative outlet that I
            didn't know I had longed for all my life. I'm mostly into back end development and specifically C# and Java,
            but I'm open to all opportunities to branch out.
          </p>
          <p>
            I see myself an enabler. I like to help. I work hard. I really love learning new things and strongly believe
            in sharing knowledge, teaching each other those new things we learn.
          </p>
          <p>
          Some other things that I think are fun are: gaming, cooking, and travelling.
          </p>
        </Window>
        <Window id="skills" header-title="skills.sys">
          <Skills/>
        </Window>
        <Window id="projects" header-title="projects/">
          <ProjectsOverview/>
        </Window>
        <Window id="resume" header-title="resume.md" body-title="Checkout my CV">
          <Button
              text="My Resume"
              :rounded=true
              route="https://www.google.com/"/>
        </Window>
        <Window id="contact" header-title="contact.txt" body-title="Hi there">
        <small>Hello</small>
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
import Footer from "@/components/Footer.vue";
import Window from "@/components/Window.vue";
import Skills from "@/components/Skills.vue";
import ProjectsOverview from "@/components/ProjectsOverview.vue";
import Button from "@/components/ui/Button.vue";
</script>

<style scoped>

</style>
