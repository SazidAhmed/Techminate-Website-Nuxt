<script setup lang="ts">
import { Users, UserPlus, Lightbulb } from 'lucide-vue-next'

const models = [
  {
    icon: Users,
    title: 'Dedicated Project Teams',
    description: 'We deploy an autonomous, cross-functional squad (PM, Designers, Engineers, QA) to build your product end-to-end with guaranteed velocity.',
    features: ['Fixed scope & deliverables', 'End-to-end product ownership', 'Predictable timelines'],
  },
  {
    icon: UserPlus,
    title: 'Staff Augmentation',
    description: 'Scale your engineering capacity instantly. We embed senior engineers directly into your existing agile ceremonies and codebase.',
    features: ['Senior-level talent matching', 'Seamless culture integration', 'Flexible scaling up or down'],
  },
  {
    icon: Lightbulb,
    title: 'Strategic Consulting',
    description: 'We audit your legacy architecture, design scalable system topologies, and map out pragmatic, high-ROI AI integration strategies.',
    features: ['Architecture audits', 'AI viability assessments', 'Technical due diligence'],
  },
]
</script>

<template>
  <section class="py-16 sm:py-20 lg:py-28" style="background:#ffffff">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style="color:#111827">
          Flexible Engagement Models
        </h2>
        <p class="text-base sm:text-lg leading-relaxed" style="color:#6b7280">
          We structure our partnerships around your operational needs, whether you're outsourcing entirely or scaling your internal capacity.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="model in models"
          :key="model.title"
          class="rounded-[24px] p-8 sm:p-10 transition-shadow duration-300"
          style="background:#f9fafb;border:1px solid #e5e7eb"
          @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow='0 10px 25px rgba(0,0,0,0.05)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow='none'"
        >
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style="background:#ffffff;border:1px solid #e5e7eb;box-shadow:0 1px 2px rgba(0,0,0,0.05)">
            <component :is="model.icon" class="w-6 h-6" style="color:#111827" />
          </div>
          
          <h3 class="text-xl font-bold mb-4" style="color:#111827">{{ model.title }}</h3>
          <p class="text-sm leading-relaxed mb-8" style="color:#6b7280;min-height:80px">
            {{ model.description }}
          </p>

          <div style="border-top:1px solid #e5e7eb" class="pt-6">
            <ul class="space-y-3">
              <li v-for="feature in model.features" :key="feature" class="flex items-start gap-3">
                <div class="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style="background:#111827" />
                <span class="text-sm" style="color:#374151">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
