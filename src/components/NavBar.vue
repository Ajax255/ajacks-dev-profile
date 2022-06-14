<template>
  <header>
    <nav class="px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between">
        <div class="flex items-center">
          <!-- <a href="#">
            <span class="sr-only">Workflow</span>
            <img
              class="h-10 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt=""
            />
          </a> -->
        </div>
        <div class="ml-10 space-x-4 flex items-center">
          <div class="hidden ml-10 space-x-8 lg:block">
            <a
              v-for="link in navigation"
              :key="link.name"
              :href="link.href"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              <span class="text-teal-500">{{ link.prefix }}&nbsp;</span>
              {{ link.name }}
            </a>
          </div>
          <a
            href="#"
            class="inline-block py-2 px-4 border border-teal-500 rounded-md text-base font-medium text-teal-500 hover:bg-opacity-75"
            >Resume</a
          >
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <a
          v-for="link in navigation"
          :key="link.name"
          :href="link.href"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navigation = [
  { prefix: '01:', name: 'About', href: '#' },
  { prefix: '02:', name: 'Experience', href: '#' },
  { prefix: '03:', name: 'Projects', href: '#' },
  { prefix: '04:', name: 'Contact', href: '#' },
]
</script>

<style scoped></style>
