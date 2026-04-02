<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)
const isScrolled = ref(false)
const isHidden = ref(false)
let lastScrollY = 0

// Import modal state
const { openModal } = useBookingModal()

const navLinks = [
  { name: 'Solutions', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
]

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // Add background/border after slight scroll
  isScrolled.value = currentScrollY > 20
  
  // Hide navbar when scrolling down past 200px, show when scrolling up
  if (currentScrollY > 200) {
    if (currentScrollY > lastScrollY && !isOpen.value) {
      isHidden.value = true // Scrolling down
    } else {
      isHidden.value = false // Scrolling up
    }
  } else {
    isHidden.value = false // Top of page
  }
  
  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const closeMenu = () => { isOpen.value = false }
</script>

<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled ? 'py-3' : 'py-5',
      isHidden ? '-translate-y-full' : 'translate-y-0'
    ]"
    :style="{
      background: isScrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid #e5e7eb' : '1px solid transparent'
    }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-10">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 flex-shrink-0">
          <div class="w-7 h-7 rounded flex items-center justify-center" style="background:#111827">
            <span class="font-bold text-xs" style="color:#ffffff">T</span>
          </div>
          <span class="font-semibold text-base" style="color:#111827">Techminate</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-sm font-medium transition-colors"
            style="color:#6b7280"
            @mouseenter="($event.target as HTMLElement).style.color='#111827'"
            @mouseleave="($event.target as HTMLElement).style.color='#6b7280'"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center">
          <button
            @click="openModal"
            class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none"
            style="color:#ffffff;background:#111827"
          >
            Book a Consultation
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg transition-colors"
          style="color:#6b7280"
          :aria-label="isOpen ? 'Close menu' : 'Open menu'"
          @click="isOpen = !isOpen"
        >
          <Menu v-if="!isOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-show="isOpen" class="md:hidden py-4 mt-3" style="border-top:1px solid #e5e7eb;background:rgba(255,255,255,0.98)">
          <div class="flex flex-col gap-1">
            <a
              v-for="link in navLinks"
              :key="link.name"
              :href="link.href"
              class="text-sm font-medium px-3 py-2 rounded-lg transition-colors"
              style="color:#374151"
              @click="closeMenu"
            >
              {{ link.name }}
            </a>
            <div class="pt-3 mt-2" style="border-top:1px solid #e5e7eb">
              <button
                @click="() => { closeMenu(); openModal(); }"
                class="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors focus:outline-none"
                style="color:#ffffff;background:#111827"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
