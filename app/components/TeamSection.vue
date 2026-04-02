<script setup lang="ts">
const steps = [
  { number: 1, title: 'Discovery', description: 'Deep dive into your goals, users, and market to shape the right solution.' },
  { number: 2, title: 'Architecture', description: 'System design, tech stack selection, and technical specification.' },
  { number: 3, title: 'Engineering', description: 'Agile sprints with regular demos and stakeholder feedback loops.' },
  { number: 4, title: 'Validation', description: 'Automated testing, QA reviews, and user acceptance testing.' },
  { number: 5, title: 'Scale', description: 'Production deployment, monitoring, and continuous improvement.' },
]
</script>

<template>
  <section id="about" class="py-16 sm:py-20 lg:py-28" style="background:#ffffff">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style="color:#111827">
          A Rigorous Engineering Process
        </h2>
        <p class="text-base sm:text-lg leading-relaxed" style="color:#6b7280">
          We follow a disciplined, transparent workflow designed for high-stakes software development.
        </p>
      </div>

      <!-- Steps -->
      <div class="relative">
        <!-- Connecting line (desktop) -->
        <div class="hidden lg:block absolute top-8 left-0 right-0 h-px mx-[10%]" style="background:#e5e7eb" />

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 relative">
          <div
            v-for="step in steps"
            :key="step.number"
            class="flex flex-col items-center text-center"
          >
            <div class="relative flex-shrink-0 mb-4 z-10">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg" style="background:#111827">
                <span class="text-xl sm:text-2xl font-bold" style="color:#ffffff">{{ step.number }}</span>
              </div>
            </div>
            <h3 class="text-base sm:text-lg font-semibold mb-2" style="color:#111827">{{ step.title }}</h3>
            <p class="text-xs sm:text-sm leading-relaxed max-w-[160px]" style="color:#6b7280">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
