<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden" style="background:#f9fafb">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div class="space-y-6 sm:space-y-8">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-balance" style="color:#111827">
            Custom Web,<br />
            Mobile, and <span style="color:#0ea5e9">AI</span><br />
            <span style="color:#0ea5e9">Software</span> Built<br />
            to Scale
          </h1>

          <p class="text-base sm:text-lg max-w-lg leading-relaxed" style="color:#6b7280">
            We build high-performance software that transforms complex business challenges into intuitive digital products.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-colors"
              style="color:#ffffff;background:#111827"
            >
              Schedule Free Consultation
            </a>
            <a
              href="#work"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-colors"
              style="color:#374151;background:#e5e7eb"
            >
              View Portfolio
            </a>
          </div>
        </div>

        <!-- Dashboard Mockup -->
        <div class="relative mt-8 lg:mt-0">
          <!-- Subtle glow bg -->
          <div class="absolute -inset-4 rounded-3xl -z-10" style="background:linear-gradient(135deg,#f0f9ff,#f1f5f9);opacity:0.7" />

          <div class="relative rounded-2xl shadow-2xl overflow-hidden" style="background:#0f172a;border:1px solid #1e293b">
            <!-- Browser Chrome -->
            <div class="px-4 py-2.5 flex items-center gap-2" style="background:#1e293b;border-bottom:1px solid #334155">
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full" style="background:#f87171" />
                <div class="w-2.5 h-2.5 rounded-full" style="background:#fbbf24" />
                <div class="w-2.5 h-2.5 rounded-full" style="background:#4ade80" />
              </div>
              <div class="flex-1 mx-3">
                <div class="rounded px-3 py-1 text-xs text-center" style="background:#334155;color:#94a3b8">
                  app.techminate.io/dashboard
                </div>
              </div>
            </div>

            <!-- Dashboard Content -->
            <div class="p-4 sm:p-5 space-y-4">
              <!-- Header row -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background:#0ea5e9">
                    <span class="font-bold text-xs" style="color:#ffffff">S</span>
                  </div>
                  <span class="font-medium text-sm" style="color:#ffffff">SaaS Dashboard</span>
                </div>
                <div class="flex gap-2 items-center">
                  <div class="w-7 h-7 rounded-lg grid place-items-center" style="background:#334155">
                    <div class="w-3.5 h-3.5 rounded-full" style="border:1px solid #94a3b8" />
                  </div>
                  <div class="w-7 h-7 rounded-lg grid place-items-center" style="background:#334155">
                    <div class="w-3.5 h-3.5 rounded-sm" style="border:1px solid #94a3b8" />
                  </div>
                </div>
              </div>

              <!-- Search Bar -->
              <div class="rounded-lg px-3 py-2 flex items-center gap-2" style="background:#1e293b">
                <div class="w-3.5 h-3.5 rounded-full flex-shrink-0" style="border:1px solid #475569" />
                <span class="text-xs flex-1" style="color:#64748b">Search clients, projects...</span>
                <div class="flex gap-1.5">
                  <div class="w-5 h-5 rounded" style="background:#0ea5e9" />
                  <div class="w-5 h-5 rounded" style="background:#334155" />
                </div>
              </div>

              <!-- Stats row -->
              <div class="grid grid-cols-3 gap-2">
                <div class="rounded-lg p-2.5" style="background:#1e293b">
                  <div class="text-xs mb-0.5" style="color:#64748b">Revenue</div>
                  <div class="text-sm font-semibold" style="color:#ffffff">$142k</div>
                  <div class="text-xs mt-0.5" style="color:#4ade80">+12.4%</div>
                </div>
                <div class="rounded-lg p-2.5" style="background:#1e293b">
                  <div class="text-xs mb-0.5" style="color:#64748b">Clients</div>
                  <div class="text-sm font-semibold" style="color:#ffffff">2,847</div>
                  <div class="text-xs mt-0.5" style="color:#38bdf8">+8.1%</div>
                </div>
                <div class="rounded-lg p-2.5" style="background:#1e293b">
                  <div class="text-xs mb-0.5" style="color:#64748b">Projects</div>
                  <div class="text-sm font-semibold" style="color:#ffffff">98.2%</div>
                  <div class="text-xs mt-0.5" style="color:#4ade80">On track</div>
                </div>
              </div>

              <!-- Chart placeholder -->
              <div class="rounded-lg p-3" style="background:#1e293b">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-medium" style="color:#94a3b8">Performance Overview</span>
                  <div class="flex gap-1">
                    <div class="w-16 h-4 rounded" style="background:#334155" />
                    <div class="w-12 h-4 rounded" style="background:#334155" />
                  </div>
                </div>
                <div class="flex items-end gap-1 h-14">
                  <div v-for="(h, i) in [40, 65, 48, 80, 55, 90, 70, 85, 60, 75, 95, 68]" :key="i"
                    class="flex-1 rounded-t transition-all"
                    :style="`height:${h}%;background:${i === 10 ? '#0ea5e9' : '#334155'}`"
                  />
                </div>
              </div>

              <!-- Table -->
              <div class="rounded-lg overflow-hidden" style="background:#1e293b">
                <div class="grid grid-cols-4 gap-2 px-3 py-2 text-xs" style="color:#64748b;border-bottom:1px solid #334155">
                  <div>Account</div>
                  <div>Status</div>
                  <div>Revenue</div>
                  <div>Actions</div>
                </div>
                <div v-for="(item, i) in [
                  { name: 'Acme Corp', status: 'Active', rev: '$12k', active: true },
                  { name: 'Globex Inc', status: 'Active', rev: '$8.4k', active: true },
                  { name: 'Initech Ltd', status: 'Pending', rev: '$5.1k', active: false },
                  { name: 'Umbrella Co', status: 'Active', rev: '$19k', active: true },
                ]" :key="i" class="grid grid-cols-4 gap-2 px-3 py-2 text-xs" style="border-bottom:1px solid rgba(51,65,85,0.5)">
                  <div class="flex items-center gap-1.5">
                    <div class="w-4 h-4 rounded flex-shrink-0" style="background:#334155" />
                    <span class="truncate" style="color:#cbd5e1">{{ item.name }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <div class="w-1.5 h-1.5 rounded-full flex-shrink-0" :style="`background:${item.active ? '#4ade80' : '#fbbf24'}`" />
                    <span style="color:#94a3b8">{{ item.status }}</span>
                  </div>
                  <div style="color:#cbd5e1">{{ item.rev }}</div>
                  <div class="flex items-center gap-1">
                    <div class="w-3 h-3 rounded-full" style="border:1px solid #475569" />
                    <div class="w-4 h-0.5 rounded" style="background:#334155" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
