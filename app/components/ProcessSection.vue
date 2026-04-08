<script setup lang="ts">
const steps = [
  {
    number: 1,
    title: "Discovery",
    description: "Deep-dive workshops to define technical specs and KPIs.",
  },
  {
    number: 2,
    title: "Architecture",
    description: "System design, security audit, and UX blueprinting.",
  },
  {
    number: 3,
    title: "Engineering",
    description: "Sprint-based development with continuous CI/CD pipelines.",
  },
  {
    number: 4,
    title: "Validation",
    description: "Automated QA, UAT, and stress testing for launch readiness.",
  },
  {
    number: 5,
    title: "Scale",
    description: "Ongoing monitoring, optimization, and product evolution.",
  },
];
</script>

<template>
  <section
    id="process"
    class="py-16 sm:py-20 lg:py-28 bg-[#f8fafc]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
          style="color: #111827"
        >
          A Rigorous Engineering Process
        </h2>
        <p class="text-base sm:text-lg leading-relaxed" style="color: #6b7280">
          We follow a disciplined, transparent workflow designed for high-stakes
          software development.
        </p>
      </div>

      <!-- Steps -->
      <div class="relative mt-8">
        <!-- Connecting line (desktop) -->
        <div
          class="hidden lg:block absolute top-[28px] sm:top-[32px] left-[5%] right-[5%] h-[2px] bg-slate-200 z-0"
        />

        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10"
        >
          <div
            v-for="step in steps"
            :key="step.number"
            class="flex flex-col items-center text-center group"
          >
            <div class="relative flex-shrink-0 mb-5 lg:mb-6">
              <div
                class="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300"
                :class="[
                  step.number === 1
                    ? 'bg-white border-[3px] border-[#0a0f1c] shadow-lg'
                    : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
                ]"
              >
                <span
                  class="text-lg sm:text-xl font-bold"
                  :class="step.number === 1 ? 'text-[#0a0f1c]' : 'text-[#3f4d63]'"
                >{{ step.number }}</span>
              </div>
            </div>
            <h3
              class="text-sm sm:text-base font-bold mb-3"
              :class="step.number === 1 ? 'text-[#0a0f1c]' : 'text-[#1e293b]'"
            >
              {{ step.title }}
            </h3>
            <p
              class="text-xs sm:text-sm leading-relaxed max-w-[150px] text-[#64748b]"
            >
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
