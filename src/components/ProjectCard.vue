<template>
  <div class="card flex flex-col gap-4 hover:border-[var(--color-primary)] transition-colors duration-200">
    <div class="flex items-start justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="tag">{{ typeLabel }}</span>
        </div>
        <h3 class="text-xl font-bold text-[var(--color-text)]">{{ project.name }}</h3>
        <p class="text-[var(--color-primary)] text-sm font-medium">{{ project.tagline }}</p>
      </div>
      <div class="flex gap-2 shrink-0">
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank"
          class="p-2 rounded-lg bg-[var(--color-surface-3)] hover:bg-[var(--color-primary)] transition-colors">
          <ExternalLink :size="16" />
        </a>
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
          class="p-2 rounded-lg bg-[var(--color-surface-3)] hover:bg-[var(--color-primary)] transition-colors">
          <Github :size="16" />
        </a>
      </div>
    </div>

    <p class="text-[var(--color-text-muted)] text-sm leading-relaxed">{{ project.description }}</p>

    <ul class="space-y-1">
      <li v-for="h in project.highlights" :key="h"
        class="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
        <span class="text-[var(--color-primary)] mt-0.5 shrink-0">›</span>
        {{ h }}
      </li>
    </ul>

    <div class="pt-2 border-t border-[var(--color-border)]">
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</span>
      </div>
      <div class="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
        <Clock :size="12" />
        {{ project.timeline }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ExternalLink, Github, Clock } from 'lucide-vue-next'
import type { Project } from '@/data/projects'

const props = defineProps<{ project: Project }>()

const typeMap: Record<string, string> = {
  ai: 'AI / Orchestration',
  saas: 'SaaS Product',
  platform: 'Platform',
}
const typeLabel = computed(() => typeMap[props.project.type] ?? props.project.type)
</script>
