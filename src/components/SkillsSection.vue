<template>
  <section id="skills" class="py-24 bg-[var(--color-surface-2)]">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-heading">Skills &amp; Stack</h2>
      <p class="section-sub">The tools I use to ship production software fast.</p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="group in skills" :key="group.category" class="card">
          <h3 class="font-semibold text-[var(--color-primary)] mb-4 text-sm uppercase tracking-wide">
            {{ group.category }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in group.items" :key="item" class="tag">{{ item }}</span>
          </div>
        </div>
      </div>

      <!-- Positioning statement -->
      <div class="mt-12 card border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p class="text-lg font-medium text-center text-[var(--color-text)]">
          "AI-enabled software development orchestrator — I architect, build, and ship production applications
          in days using AI-augmented workflows. What takes a team of 5 engineers 3 months, I deliver in 2 weeks."
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skills } from '@/data/projects'
</script>
