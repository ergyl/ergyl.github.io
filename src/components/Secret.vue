<template>
  <div class="flex flex-col bg-base-100 max-w-2xl mx-auto items-center text-center justify-center gap-4 mt-8 mb-12 py-8">
    <img :src="SecretImage" alt="Cookie guy" class="w-20 md:w-30 h-auto"/>
    <h2>You found a secret!</h2>
    <p>To show the website again, click the reset button below.</p>
    <Button text="Reset" :rounded="true" @click="resetWindows" ></Button>
  </div>
</template>

<script setup lang="ts">
import SecretImage from "@/assets/images/flatwist.gif";
import Button from "@/components/ui/Button.vue";

const props = defineProps<{
  resetWindows: () => void;
}>();
</script>