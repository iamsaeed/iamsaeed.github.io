<template>
  <section id="contact" class="py-24">
    <div class="max-w-2xl mx-auto px-6 text-center">
      <h2 class="section-heading">Let's Work Together</h2>
      <p class="section-sub">
        Looking for someone who can ship your MVP in 2 weeks, integrate AI into your product,
        or act as a fractional CTO? Let's talk.
      </p>

      <div class="card mb-8 text-left">
        <div class="space-y-4">
          <div v-for="item in contactItems" :key="item.label"
            class="flex items-center gap-4 p-3 rounded-lg hover:bg-[var(--color-surface-3)] transition-colors">
            <div class="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
              <component :is="item.icon" :size="18" class="text-[var(--color-primary)]" />
            </div>
            <div>
              <div class="text-xs text-[var(--color-text-muted)]">{{ item.label }}</div>
              <a :href="item.href" target="_blank"
                class="text-[var(--color-text)] font-medium hover:text-[var(--color-primary)] transition-colors">
                {{ item.value }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <a href="mailto:hello@iamsaeed.com" class="btn-primary w-full justify-center">
        <Mail :size="16" />
        Send me an email
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Linkedin, Github, Globe } from 'lucide-vue-next'

const contactItems = [
  { label: 'Email', value: 'hello@iamsaeed.com', href: 'mailto:hello@iamsaeed.com', icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/iamsaeed', href: 'https://linkedin.com/in/iamsaeed', icon: Linkedin },
  { label: 'GitHub', value: 'github.com/iamsaeed', href: 'https://github.com/iamsaeed', icon: Github },
  { label: 'Portfolio', value: 'iamsaeed.github.io', href: 'https://iamsaeed.github.io', icon: Globe },
]
</script>
