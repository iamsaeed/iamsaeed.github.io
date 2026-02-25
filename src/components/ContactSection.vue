<template>
  <section id="contact" class="py-24">
    <div class="max-w-5xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-start">

        <!-- Left: info -->
        <div>
          <h2 class="section-heading">Let's Work Together</h2>
          <p class="text-[var(--color-text-muted)] leading-relaxed mb-8">
            Looking for someone who can ship your MVP in 2 weeks, integrate AI into your product,
            or act as a fractional CTO? Drop me a message and I'll get back to you within 24 hours.
          </p>

          <div class="space-y-4">
            <a href="https://www.linkedin.com/in/ahmads-k/" target="_blank"
              class="flex items-center gap-4 p-4 card hover:border-[var(--color-primary)] transition-colors group">
              <div class="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                <Linkedin :size="18" class="text-[var(--color-primary)]" />
              </div>
              <div>
                <div class="text-xs text-[var(--color-text-muted)]">LinkedIn</div>
                <div class="text-[var(--color-text)] font-medium group-hover:text-[var(--color-primary)] transition-colors">
                  linkedin.com/in/ahmads-k
                </div>
              </div>
            </a>

            <a href="https://github.com/iamsaeed" target="_blank"
              class="flex items-center gap-4 p-4 card hover:border-[var(--color-primary)] transition-colors group">
              <div class="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                <Github :size="18" class="text-[var(--color-primary)]" />
              </div>
              <div>
                <div class="text-xs text-[var(--color-text-muted)]">GitHub</div>
                <div class="text-[var(--color-text)] font-medium group-hover:text-[var(--color-primary)] transition-colors">
                  github.com/iamsaeed
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Right: form -->
        <div class="card">
          <form v-if="!submitted" @submit.prevent="handleSubmit" class="space-y-5">
            <input type="hidden" name="access_key" :value="accessKey" />
            <input type="hidden" name="subject" value="New contact from portfolio" />
            <input type="checkbox" name="botcheck" style="display:none" />

            <div>
              <label class="block text-sm font-medium text-[var(--color-text-muted)] mb-1">Name</label>
              <input v-model="form.name" type="text" required placeholder="Your name"
                class="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-lg px-4 py-2.5
                       text-[var(--color-text)] placeholder-[var(--color-text-muted)] text-sm
                       focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
            </div>

            <div>
              <label class="block text-sm font-medium text-[var(--color-text-muted)] mb-1">Email</label>
              <input v-model="form.email" type="email" required placeholder="your@email.com"
                class="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-lg px-4 py-2.5
                       text-[var(--color-text)] placeholder-[var(--color-text-muted)] text-sm
                       focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
            </div>

            <div>
              <label class="block text-sm font-medium text-[var(--color-text-muted)] mb-1">What do you need?</label>
              <select v-model="form.subject"
                class="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-lg px-4 py-2.5
                       text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors">
                <option value="">Select a project type...</option>
                <option>MVP / Product build</option>
                <option>AI integration into existing product</option>
                <option>Fractional CTO</option>
                <option>Full-stack development</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-[var(--color-text-muted)] mb-1">Message</label>
              <textarea v-model="form.message" required rows="4" placeholder="Tell me about your project..."
                class="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-lg px-4 py-2.5
                       text-[var(--color-text)] placeholder-[var(--color-text-muted)] text-sm
                       focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"></textarea>
            </div>

            <button type="submit" :disabled="loading"
              class="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
              <Loader2 v-if="loading" :size="16" class="animate-spin" />
              <Send v-else :size="16" />
              {{ loading ? 'Sending...' : 'Send Message' }}
            </button>

            <p v-if="error" class="text-red-400 text-sm text-center">{{ error }}</p>
          </form>

          <!-- Success state -->
          <div v-else class="text-center py-8">
            <div class="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle :size="32" class="text-emerald-400" />
            </div>
            <h3 class="text-lg font-semibold text-[var(--color-text)] mb-2">Message sent!</h3>
            <p class="text-[var(--color-text-muted)] text-sm mb-6">I'll get back to you within 24 hours.</p>
            <button @click="reset" class="btn-outline text-sm">Send another message</button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Linkedin, Github, Send, Loader2, CheckCircle } from 'lucide-vue-next'

const accessKey = import.meta.env.VITE_WEB3FORMS_KEY ?? ''

const form = ref({ name: '', email: '', subject: '', message: '' })
const loading = ref(false)
const submitted = ref(false)
const error = ref('')

async function handleSubmit() {
  loading.value = true
  error.value = ''
  try {
    const payload = {
      access_key: accessKey,
      subject: form.value.subject ? `[Portfolio] ${form.value.subject}` : '[Portfolio] New contact',
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
      botcheck: false,
    }
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    if (data.success) {
      submitted.value = true
    } else {
      error.value = data.message ?? 'Something went wrong. Please try again.'
    }
  } catch {
    error.value = 'Network error. Please try again.'
  } finally {
    loading.value = false
  }
}

function reset() {
  form.value = { name: '', email: '', subject: '', message: '' }
  submitted.value = false
}
</script>
