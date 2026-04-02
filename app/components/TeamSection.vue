<script setup lang="ts">
import { Linkedin } from "lucide-vue-next";

const team = [
  {
    name: "Nathanaël",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    linkedIn: "#",
  },
  {
    name: "Sazid",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    linkedIn: "#",
  },
  {
    name: "M. Aziz",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    linkedIn: "#",
  },
  {
    name: "Mahadad",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    linkedIn: "#",
  },
];
</script>

<template>
  <section
    id="team"
    class="py-16 sm:py-20 lg:py-28"
    style="background: #f9fafb; border-top: 1px solid #e5e7eb"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
          style="color: #111827"
        >
          Meet the Core Team
        </h2>
        <p class="text-base sm:text-lg leading-relaxed" style="color: #6b7280">
          The elite engineering talent architecting your digital transformation.
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div
          v-reveal
          v-for="(member, index) in team"
          :key="member.name"
          :style="`transition-delay: ${index * 100}ms`"
          class="group relative w-full overflow-hidden rounded-[24px] aspect-[4/5] sm:aspect-[3/4]"
          style="
            background: #111827;
            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
          "
        >
          <!-- Portrait Image -->
          <!-- We rely on group-hover to remove the grayscale filter and slightly zoom the image -->
          <img
            :src="member.image"
            :alt="member.name"
            class="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
          />

          <!-- Gentle gradient overlay to ensure text readability -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"
          ></div>

          <!-- Glassmorphic Info Pan (bottom anchored) -->
          <div
            class="absolute bottom-4 left-4 right-4 overflow-hidden rounded-2xl transition-all duration-500"
            style="
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(16px);
              border: 1px solid rgba(255, 255, 255, 0.15);
            "
          >
            <div class="p-5 flex items-center justify-between">
              <!-- Text Info -->
              <div
                class="transform transition-transform duration-300 group-hover:-translate-y-1"
              >
                <h3
                  class="text-lg xl:text-xl font-bold mb-1"
                  style="color: #ffffff"
                >
                  {{ member.name }}
                </h3>
                <p class="text-sm font-medium" style="color: #e0f2fe">
                  {{ member.role }}
                </p>
              </div>

              <!-- Action Item (LinkedIn) -->
              <a
                :href="member.linkedIn"
                class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                style="background: #ffffff; color: #0f172a"
                aria-label="LinkedIn Profile"
              >
                <Linkedin class="w-4 h-4 translate-y-[-1px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
