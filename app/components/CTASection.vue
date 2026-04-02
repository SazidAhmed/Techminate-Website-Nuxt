<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const { openModal } = useBookingModal()
</script>

<template>
  <section class="py-16 sm:py-20 lg:py-28" style="background:#ffffff">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl overflow-hidden" style="background:#0f172a">
        <!-- Background dot pattern -->
        <div class="absolute inset-0" style="background-image:radial-gradient(circle,rgba(255,255,255,0.08) 1px,transparent 1px);background-size:28px 28px;pointer-events:none" />
        <!-- Glow accents -->
        <div class="absolute pointer-events-none" style="top:-80px;left:20%;width:400px;height:400px;background:rgba(14,165,233,0.12);border-radius:50%;filter:blur(80px)" />
        <div class="absolute pointer-events-none" style="bottom:-80px;right:20%;width:400px;height:400px;background:rgba(14,165,233,0.08);border-radius:50%;filter:blur(80px)" />

        <div class="relative px-6 sm:px-12 lg:px-20 py-14 sm:py-20 text-center">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 max-w-3xl mx-auto leading-tight" style="color:#ffffff">
            Ready to build your next breakthrough product?
          </h2>

          <p class="text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed" style="color:#94a3b8">
            Partner with an engineering team that prioritizes business outcomes with every line of code. No long-term lock-in required.
          </p>

          <button
            @click="openModal"
            class="inline-flex items-center gap-2 rounded-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none"
            style="padding:12px 28px;background:#ffffff;color:#0f172a;font-size:15px;font-weight:600;box-shadow:0 4px 16px rgba(0,0,0,0.2)"
          >
            Schedule Your Free Consultation
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
