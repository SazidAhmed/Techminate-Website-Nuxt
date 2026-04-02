<script setup lang="ts">
import { Code2, Database, Box, Workflow, Cloud, CheckCircle2, Shield, Lock, Cpu, Brain, Layers } from 'lucide-vue-next'

const technologies = [
  { name: 'Vue & Nuxt', icon: Layers },
  { name: 'React & Next.js', icon: Code2 },
  { name: 'Python & Django', icon: Database },
  { name: 'Node.js & Express', icon: Box },
  { name: 'AWS & Cloudflare', icon: Cloud },
  { name: 'PyTorch & TensorFlow', icon: Brain },
  { name: 'Docker & Kubernetes', icon: Workflow },
  { name: 'PostgreSQL & Redis', icon: Database },
  { name: 'LLMs & RAG Systems', icon: Cpu },
  { name: 'Enterprise Security', icon: Shield },
]

// Duplicate the array once for seamless scrolling
const marqueeItems = [...technologies, ...technologies]
</script>

<template>
  <section class="py-12 sm:py-16 overflow-hidden relative" style="background:#f9fafb;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb">
    <div class="mb-8 text-center px-4">
      <h3 class="text-sm font-bold uppercase tracking-widest" style="color:#6b7280">Powered by the modern stack</h3>
    </div>
    
    <!-- Fade edges -->
    <div class="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none" style="background:linear-gradient(to right, #f9fafb 0%, transparent 100%)"></div>
    <div class="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none" style="background:linear-gradient(to left, #f9fafb 0%, transparent 100%)"></div>

    <!-- Marquee container -->
    <div class="flex whitespace-nowrap marquee-track w-max">
      <div
        v-for="(tech, index) in marqueeItems"
        :key="index"
        class="inline-flex flex-shrink-0 items-center justify-center gap-3 px-6 py-3 mx-3 sm:mx-4 rounded-xl transition-all duration-300"
        style="background:#ffffff;border:1px solid #e5e7eb;box-shadow:0 1px 2px rgba(0,0,0,0.05)"
      >
        <component :is="tech.icon" class="w-5 h-5 flex-shrink-0" style="color:#111827" />
        <span class="text-sm font-semibold" style="color:#111827">{{ tech.name }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-track {
  animation: scroll 40s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
</style>
