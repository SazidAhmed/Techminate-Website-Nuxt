<script setup lang="ts">
import { MessageSquare, FileText, Settings2, Search, PieChart, Code2 } from 'lucide-vue-next'

const topFeatures = [
  { icon: MessageSquare, title: 'Automated Support', description: 'Resolve 70% of routine inquiries instantly.' },
  { icon: FileText, title: 'Intelligent Data Extraction', description: 'Reduce manual document processing by 90%.' },
  { icon: Settings2, title: 'Operational Efficiency', description: 'AI-orchestrated workflows that save thousands of hours.' },
]

const bottomFeatures = [
  { icon: Search, title: 'Discovery & Search', description: 'Semantic search to find internal IP in seconds.' },
  { icon: PieChart, title: 'Predictive Sales', description: 'High-accuracy modeling for churn and upsell.' },
  { icon: Code2, title: 'Custom Private LLMs', description: 'Secure internal copilots trained on your data.' },
]
</script>

<template>
  <section class="py-16 sm:py-20 lg:py-28 relative overflow-hidden" style="background:rgba(2,6,23,0.85); backdrop-filter:blur(40px); border-top:1px solid rgba(255,255,255,0.1); border-bottom:1px solid rgba(255,255,255,0.1)">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-12 sm:mb-16 max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style="color:#ffffff">
          AI Integration for Measurable ROI
        </h2>
        <p class="text-base sm:text-lg leading-relaxed" style="color:#94a3b8">
          We don't build AI for the sake of novelty. We deploy intelligent systems that automate labor-intensive processes, surfacing insights that directly impact your bottom line.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="space-y-4 sm:space-y-6">
        <!-- Top row -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div v-for="feature in topFeatures" :key="feature.title" class="flex gap-3 sm:gap-4 p-5 rounded-2xl transition-colors hover:bg-white/5 border border-transparent hover:border-white/10">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 flex items-center justify-center rounded-lg" style="background:rgba(14,165,233,0.15);border:1px solid rgba(14,165,233,0.3)">
                <component :is="feature.icon" class="w-4 h-4" style="color:#38bdf8" />
              </div>
            </div>
            <div>
              <h3 class="text-sm font-semibold mb-1" style="color:#ffffff">{{ feature.title }}</h3>
              <p class="text-sm leading-relaxed" style="color:#94a3b8">{{ feature.description }}</p>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div style="border-top:1px solid #1e293b" />

        <!-- Bottom row -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div v-for="feature in bottomFeatures" :key="feature.title" class="flex gap-3 sm:gap-4 p-5 rounded-2xl transition-colors hover:bg-white/5 border border-transparent hover:border-white/10">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 flex items-center justify-center rounded-lg" style="background:rgba(14,165,233,0.15);border:1px solid rgba(14,165,233,0.3)">
                <component :is="feature.icon" class="w-4 h-4" style="color:#38bdf8" />
              </div>
            </div>
            <div>
              <h3 class="text-sm font-semibold mb-1" style="color:#ffffff">{{ feature.title }}</h3>
              <p class="text-sm leading-relaxed" style="color:#94a3b8">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
