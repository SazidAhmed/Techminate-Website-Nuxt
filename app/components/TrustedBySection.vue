<script setup lang="ts">
import { Layers, Grid3X3, Brain, Gauge } from 'lucide-vue-next'

const features = [
  { icon: Layers, label: 'CUSTOM PRODUCT ENGINEERING' },
  { icon: Grid3X3, label: 'ENTERPRISE SCALABILITY' },
  { icon: Brain, label: 'APPLIED INTELLIGENCE' },
  { icon: Gauge, label: 'AGILE DELIVERY MODEL' },
]
</script>

<template>
  <section class="pb-16 sm:pb-20" style="background:#f9fafb">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-y border-gray-200 py-6">
        <div
          v-for="feature in features"
          :key="feature.label"
          class="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-bold tracking-widest text-[#111827]"
        >
          <div class="w-8 h-8 rounded-full flex items-center justify-center" style="background:#e5e7eb">
            <component :is="feature.icon" class="w-4 h-4" style="color:#111827" />
          </div>
          {{ feature.label }}
        </div>
      </div>
    </div>
  </section>
</template>
