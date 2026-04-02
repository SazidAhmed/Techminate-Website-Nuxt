<script setup lang="ts">
import { AppWindow, Smartphone, BrainCircuit, Blocks } from 'lucide-vue-next'

const services = [
  {
    icon: AppWindow,
    title: 'Enterprise Web Apps',
    description: 'Scalable, secure web platforms built with React and cloud-native architectures to handle high-volume transactions and complex data workflows.',
  },
  {
    icon: Smartphone,
    title: 'Native Mobile Solutions',
    description: 'High-performance iOS and Android applications optimized for user engagement, biometric security, and seamless offline reliability.',
  },
  {
    icon: BrainCircuit,
    title: 'Generative AI Systems',
    description: 'Custom LLM integrations and machine learning features that automate manual data entry and provide actionable business intelligence.',
  },
  {
    icon: Blocks,
    title: 'Strategic Product Design',
    description: 'User-centric design systems that ensure cross-platform consistency, accessibility compliance, and optimized conversion funnels.',
  },
]
</script>

<template>
  <section id="services" class="py-16 sm:py-20 lg:py-28 relative backdrop-blur-sm" style="background:rgba(255,255,255,0.3)">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style="color:#111827">
          Our Core Expertise
        </h2>
        <p class="text-base sm:text-lg leading-relaxed" style="color:#6b7280">
          We engineer digital experiences that bridge the gap between complex business challenges and intuitive, high-performance solutions.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-reveal
          v-spotlight
          v-for="(service, index) in services"
          :key="service.title"
          :style="`transition-delay: ${index * 100}ms; background:rgba(255,255,255,0.65); backdrop-filter:blur(24px); border:1px solid rgba(255,255,255,0.8); box-shadow:0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.025)`"
          class="p-6 sm:p-8 rounded-[24px] transition-all duration-300"
          @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow='0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.05)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.025)'"
        >
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style="background:#f3f4f6">
            <component :is="service.icon" class="w-6 h-6" style="color:#111827" />
          </div>
          <h3 class="text-lg font-bold mb-3" style="color:#111827">{{ service.title }}</h3>
          <p class="text-sm leading-relaxed" style="color:#6b7280">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
