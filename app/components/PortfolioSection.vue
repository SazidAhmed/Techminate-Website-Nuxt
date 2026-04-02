<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const projects = [
  {
    category: 'ENTERPRISE FINTECH',
    title: 'Decommissioning Legacy Monoliths for a Tier-1 Bank',
    description: 'We orchestrated a zero-downtime migration to a containerized microservices architecture. By decoupling their core transaction engine, we eliminated technical debt and dramatically reduced cloud infrastructure spend.',
    image: '/images/case-fintech.png',
    link: '#',
    metric: { value: '40%', label: 'Cloud Cost Reduction' }
  },
  {
    category: 'GLOBAL LOGISTICS',
    title: 'Predictive AI Inventory Routing',
    description: 'Developed a custom machine learning model integrated directly into their ERP. The system dynamically predicts stockouts and reroutes supply chain shipments autonomously, yielding measurable ROI in quarter one.',
    image: '/images/case-logistics.png',
    link: '#',
    metric: { value: '3.2M', label: 'Annual Savings' }
  },
]
</script>

<template>
  <section id="work" class="py-16 sm:py-20 lg:py-28" style="background:#ffffff">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-10 sm:mb-12 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold" style="color:#111827">
          Selected Case Studies
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group rounded-2xl overflow-hidden transition-all duration-300"
          style="background:#ffffff;border:1px solid #e5e7eb"
          @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow='0 20px 40px rgba(0,0,0,0.1)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow='none'"
        >
          <!-- Image -->
          <div class="relative overflow-hidden" style="aspect-ratio:16/9">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Metric badge -->
            <div v-if="project.metric" class="absolute bottom-4 left-4">
              <div class="rounded-xl px-3 py-2" style="background:rgba(255,255,255,0.96);backdrop-filter:blur(4px);box-shadow:0 4px 12px rgba(0,0,0,0.15);border:1px solid #e5e7eb">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 rounded-full" style="background:#22c55e" />
                  <div class="text-sm font-bold" style="color:#111827">{{ project.metric.value }} {{ project.metric.label }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5 sm:p-6">
            <span class="inline-flex items-center text-xs font-bold uppercase tracking-wider mb-3" style="color:#0ea5e9">
              {{ project.category }}
            </span>
            <h3 class="text-lg font-bold mb-2 leading-snug transition-colors" style="color:#111827">
              {{ project.title }}
            </h3>
            <p class="text-sm leading-relaxed mb-4" style="color:#6b7280">
              {{ project.description }}
            </p>
            <a
              :href="project.link"
              class="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              style="color:#374151"
            >
              Explore Case Study
              <ArrowRight class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
