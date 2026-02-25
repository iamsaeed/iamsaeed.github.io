<template>
  <NavBar />
  <main>
    <HeroSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <FooterBar />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>
