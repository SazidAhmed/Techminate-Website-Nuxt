<script setup lang="ts">
import { Share2, Mail, Send } from 'lucide-vue-next'

const footerLinks = {
  solutions: [
    { name: 'Web Development', href: '#' },
    { name: 'Mobile Engineering', href: '#' },
    { name: 'AI/ML Integration', href: '#' },
    { name: 'Product Design', href: '#' },
  ],
  company: [
    { name: 'Methodology', href: '#' },
    { name: 'Case Studies', href: '#work' },
    { name: 'About Techminate', href: '#about' },
    { name: 'Contact', href: '#' },
  ],
}
</script>

<template>
  <footer style="background:#f9fafb;color:#111827">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main footer content -->
      <div class="py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
        <!-- Brand Column -->
        <div class="md:col-span-4 space-y-6">
          <div class="flex items-center gap-2">
            <h3 class="font-bold text-xl tracking-tight text-[#111827]">Techminate</h3>
          </div>
          <p class="text-xs leading-relaxed max-w-xs" style="color:#6b7280">
            Architectural Precision in Software. We design and build high-performance digital products for global enterprises and ambitious startups.
          </p>
          <div class="flex gap-2">
            <button class="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style="background:#f3f4f6;border:1px solid #e5e7eb" aria-label="Share">
              <Share2 class="w-3.5 h-3.5" style="color:#4b5563" />
            </button>
            <button class="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style="background:#f3f4f6;border:1px solid #e5e7eb" aria-label="Email">
              <Mail class="w-3.5 h-3.5" style="color:#4b5563" />
            </button>
          </div>
        </div>

        <!-- Solutions -->
        <div class="md:col-span-2">
          <h4 class="text-[10px] font-bold uppercase tracking-wider mb-6" style="color:#111827">Solutions</h4>
          <ul class="space-y-4">
            <li v-for="link in footerLinks.solutions" :key="link.name">
              <a :href="link.href" class="text-xs transition-colors" style="color:#4b5563" @mouseenter="($event.target as HTMLElement).style.color='#111827'" @mouseleave="($event.target as HTMLElement).style.color='#4b5563'">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="md:col-span-2">
          <h4 class="text-[10px] font-bold uppercase tracking-wider mb-6" style="color:#111827">Company</h4>
          <ul class="space-y-4">
            <li v-for="link in footerLinks.company" :key="link.name">
              <a :href="link.href" class="text-xs transition-colors" style="color:#4b5563" @mouseenter="($event.target as HTMLElement).style.color='#111827'" @mouseleave="($event.target as HTMLElement).style.color='#4b5563'">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="md:col-span-4">
          <h4 class="text-[10px] font-bold uppercase tracking-wider mb-6" style="color:#111827">Newsletter</h4>
          <p class="text-xs leading-relaxed mb-6" style="color:#6b7280;max-width:280px">
            Join 2,000+ technology leaders receiving our quarterly insights on software architecture and AI trends.
          </p>
          <form @submit.prevent class="relative max-w-[280px]">
            <input 
              type="email" 
              placeholder="your@email.com" 
              class="w-full text-xs rounded-lg py-3 px-4 focus:outline-none focus:ring-1 focus:ring-gray-300"
              style="background:#ffffff;border:1px solid #e5e7eb;color:#111827"
              required 
            />
            <button 
              type="submit" 
              class="absolute right-1 top-1 bottom-1 w-10 flex items-center justify-center rounded-md transition-colors"
              style="background:#111827"
              aria-label="Subscribe"
            >
              <Send class="w-3.5 h-3.5" style="color:#ffffff" />
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="py-6 flex flex-col sm:flex-row items-center justify-between gap-4" style="border-top:1px solid #e5e7eb">
        <p class="text-[11px]" style="color:#6b7280">
          © 2024 Techminate Inc. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-[11px] transition-colors" style="color:#6b7280" @mouseenter="($event.target as HTMLElement).style.color='#111827'" @mouseleave="($event.target as HTMLElement).style.color='#6b7280'">Legal Notice</a>
          <a href="#" class="text-[11px] transition-colors" style="color:#6b7280" @mouseenter="($event.target as HTMLElement).style.color='#111827'" @mouseleave="($event.target as HTMLElement).style.color='#6b7280'">Privacy Framework</a>
          <a href="#" class="text-[11px] transition-colors" style="color:#6b7280" @mouseenter="($event.target as HTMLElement).style.color='#111827'" @mouseleave="($event.target as HTMLElement).style.color='#6b7280'">Security Standards</a>
        </div>
      </div>
    </div>
  </footer>
</template>
