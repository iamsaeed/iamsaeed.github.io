<template>
  <nav class="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-sm">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#hero" class="font-bold text-lg text-[var(--color-text)]">
        Ahmad<span class="gradient-text">.</span>
      </a>
      <div class="hidden md:flex items-center gap-8">
        <a v-for="link in links" :key="link.href" :href="link.href"
          class="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors text-sm font-medium">
          {{ link.label }}
        </a>
      </div>
      <a href="#contact" class="btn-primary text-sm">
        Hire Me
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]
</script>
