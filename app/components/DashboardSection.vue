<script setup lang="ts">
import { Search, Rocket, Eye, BrainCircuit, Shield } from 'lucide-vue-next'
</script>

<template>
  <section id="process" class="py-16 sm:py-20 lg:py-28" style="background:#f9fafb">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold" style="color:#111827">
          Why Leading Firms Choose Techminate
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Large card - Strategic Product Discovery -->
        <div class="md:col-span-2 rounded-[24px] p-8 sm:p-10 transition-shadow" style="background:#ffffff;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05)">
          <div class="w-10 h-10 rounded-full flex items-center justify-center mb-6" style="border:1px solid #e5e7eb">
            <Search class="w-5 h-5" style="color:#111827" />
          </div>
          <h3 class="text-xl font-bold mb-3" style="color:#111827">Strategic Product Discovery</h3>
          <p class="text-base leading-relaxed" style="color:#6b7280;max-width:80%">
            We don't just execute; we advise. Every partnership begins with a rigorous audit of your business goals and user friction points to ensure we build what actually moves the needle.
          </p>
        </div>

        <!-- Dark card - Resilient Architecture -->
        <div class="rounded-[24px] p-8 sm:p-10 transition-shadow" style="background:#1e2432;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05)">
          <div class="w-10 h-10 rounded-full flex items-center justify-center mb-6 border" style="border-color:rgba(255,255,255,0.1)">
            <Rocket class="w-5 h-5" style="color:#38bdf8" />
          </div>
          <h3 class="text-xl font-bold mb-3" style="color:#ffffff">Resilient Architecture</h3>
          <p class="text-base leading-relaxed" style="color:#94a3b8">
            Battle-tested engineering standards that ensure your product scales gracefully from 1,000 to 1,000,000+ users without downtime.
          </p>
        </div>

        <!-- Transparent Lifecycle -->
        <div class="rounded-[24px] p-8 sm:p-10 transition-shadow" style="background:#ffffff;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05)">
          <div class="w-10 h-10 rounded-full flex items-center justify-center mb-6" style="border:1px solid #e5e7eb">
            <Eye class="w-5 h-5" style="color:#111827" />
          </div>
          <h3 class="text-xl font-bold mb-3" style="color:#111827">Transparent Lifecycle</h3>
          <p class="text-base leading-relaxed" style="color:#6b7280">
            Real-time access to our dev boards, weekly sprint demos, and zero-surprise pricing models.
          </p>
        </div>

        <!-- Outcome-Driven AI -->
        <div class="rounded-[24px] p-8 sm:p-10 transition-shadow" style="background:#ffffff;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05)">
          <div class="w-10 h-10 rounded-full flex items-center justify-center mb-6" style="border:1px solid #e5e7eb">
            <BrainCircuit class="w-5 h-5" style="color:#111827" />
          </div>
          <h3 class="text-xl font-bold mb-3" style="color:#111827">Outcome-Driven AI</h3>
          <p class="text-base leading-relaxed" style="color:#6b7280">
            Moving beyond the hype to deploy practical AI tools that reduce operational costs by up to 30%.
          </p>
        </div>

        <!-- DevOps Partnership -->
        <div class="rounded-[24px] p-8 sm:p-10 transition-shadow" style="background:#ffffff;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05)">
          <div class="w-10 h-10 rounded-full flex items-center justify-center mb-6" style="border:1px solid #e5e7eb">
            <Shield class="w-5 h-5" style="color:#111827" />
          </div>
          <h3 class="text-xl font-bold mb-3" style="color:#111827">DevOps Partnership</h3>
          <p class="text-base leading-relaxed" style="color:#6b7280">
            Comprehensive 24/7 support and proactive maintenance to keep your core infrastructure optimal.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
