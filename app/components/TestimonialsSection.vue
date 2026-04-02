<script setup lang="ts">
import { Star } from 'lucide-vue-next'

const testimonials = [
  {
    quote: "Techminate transformed our internal operations with a custom AI dashboard. Their team was technical, responsive, and truly understood our business goals.",
    author: 'David Chen',
    role: 'CEO, Acme Industries',
    rating: 5,
    avatar: '/images/avatar-david.png',
    initials: 'DC',
  },
  {
    quote: "The most professional development partner we've worked with. Their architecture is solid, and their UI design is truly world-class.",
    author: 'Sarah Jenkins',
    role: 'COO, Momentum Partners',
    rating: 5,
    avatar: '/images/avatar-sarah.png',
    initials: 'SJ',
  }
]
</script>

<template>
  <section class="py-16 sm:py-20 lg:py-28" style="background:#f9fafb">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.author"
          class="rounded-2xl p-6 sm:p-8"
          style="background:#ffffff;border:1px solid #e5e7eb;box-shadow:0 1px 3px rgba(0,0,0,0.04)"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <Star v-for="i in testimonial.rating" :key="i" class="w-4 h-4" style="fill:#f59e0b;color:#f59e0b" />
          </div>

          <!-- Quote -->
          <p class="text-base leading-relaxed mb-6 italic" style="color:#374151">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.author"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div class="text-sm font-semibold" style="color:#111827">{{ testimonial.author }}</div>
              <div class="text-xs" style="color:#6b7280">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
