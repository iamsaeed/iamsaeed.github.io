<template>
  <footer class="border-t border-[var(--color-border)] py-8">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-[var(--color-text-muted)] text-sm">
        © {{ year }} Ahmad · Built with Vue 3 + Tailwind
      </p>
      <div class="flex items-center gap-4">
        <a href="https://github.com/iamsaeed" target="_blank"
          class="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
          <Github :size="18" />
        </a>
        <a href="https://www.linkedin.com/in/ahmads-k/" target="_blank"
          class="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
          <Linkedin :size="18" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next'
const year = new Date().getFullYear()
</script>
