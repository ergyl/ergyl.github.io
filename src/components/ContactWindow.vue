<template>
  <div class="retro-window max-w-2xl mx-auto mt-8 mb-8">
    <div class="retro-window-title">
      <span>contact.exe</span>
      <span class="text-xl">×</span>
    </div>
    <form @submit.prevent="handleSubmit" class="p-4 space-y-4">
      <div>
        <label for="name" class="block mb-2">Name:</label>
        <input
            id="name"
            v-model="formData.name"
            class="w-full"
            required
        />
      </div>
      <div>
        <label for="email" class="block mb-2">Email:</label>
        <input
            id="email"
            type="email"
            v-model="formData.email"
            class="w-full"
            required
        />
      </div>
      <div>
        <label for="message" class="block mb-2">Message:</label>
        <textarea
            id="message"
            v-model="formData.message"
            class="w-full"
            required
        />
      </div>
      <button type="submit" class="w-full bg-[#000080] hover:bg-[#000060]">
        Send Message
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

// Define the reactive form data
const formData = ref({
  name: '',
  email: '',
  message: ''
});

// Function to handle form submission
const handleSubmit = () => {
  alert("Message sent! Thanks for reaching out. I'll get back to you soon!");
  // Reset form data after submission
  formData.value = {name: '', email: '', message: ''};
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
