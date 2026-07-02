<template>
  <section id="projects" class="py-24">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-heading">Current Work</h2>
      <p class="section-sub">What I'm building and operating right now.</p>

      <div class="grid md:grid-cols-2 gap-6">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'
</script>
