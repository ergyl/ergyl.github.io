<script setup lang="ts">
import Terminal from "@/components/Terminal.vue";
import Footer from "@/components/Footer.vue";
import ResumeWindow from "@/components/ResumeWindow.vue";
import Window from "@/components/Window.vue";
import Skills from "@/components/Skills.vue";
import ProjectsOverview from "@/components/ProjectsOverview.vue";
import Button from "@/components/ui/Button.vue";
</script>

<template>
  <header>
    <div class="wrapper"> Erik Gylleus' Website
    </div>
  </header>

  <main>
    <div class="min-h-screen p-4">
      <div class="fixed inset-0 pointer-events-none"/>
      <div class="max-w-6xl mx-auto space-y-4">
        <Terminal/>
        <Window header-title="about.txt" body-title="About me">
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
        <Window header-title="skills.sys">
          <Skills/>
        </Window>
        <Window header-title="projects.exe">
          <ProjectsOverview/>
        </Window>
        <Window header-title="resume.md" body-title="Checkout my CV">
          <Button
              text="My Resume"
              :rounded=true
              route="https://www.google.com/"/>
        </Window>
        <Window header-title="contact.txt" body-title="Hi there">
        <small>Hello</small>
        </Window>
      </div>
    </div>
  </main>
  <footer>
    <Footer/>
  </footer>
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
