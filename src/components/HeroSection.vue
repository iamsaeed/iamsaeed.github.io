<template>
  <section id="hero" class="min-h-screen flex items-center pt-16">
    <div class="max-w-6xl mx-auto px-6 py-24">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 tag mb-6">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for new projects
        </div>

        <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">
          I architect &amp; ship<br />
          <span class="gradient-text">production software</span><br />
          in days, not months.
        </h1>

        <p class="text-[var(--color-text-muted)] text-xl leading-relaxed mb-10 max-w-2xl">
          AI-enabled software developer &amp; orchestrator. What takes a team of 5 engineers 3 months,
          I deliver in 2 weeks — using AI-augmented workflows, smart tooling, and deep full-stack expertise.
        </p>

        <div class="flex flex-wrap gap-4 mb-16">
          <a href="#projects" class="btn-primary">
            See My Work
          </a>
          <a href="#contact" class="btn-outline">
            Get In Touch
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="stat in stats" :key="stat.label" class="card text-center">
            <div class="text-3xl font-bold gradient-text mb-1">{{ stat.value }}</div>
            <div class="text-[var(--color-text-muted)] text-xs">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { stats } from '@/data/projects'
</script>
