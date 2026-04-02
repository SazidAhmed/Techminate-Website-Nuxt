<script setup lang="ts">
import { X } from 'lucide-vue-next'
// Assuming useBookingModal is manually imported or auto-imported by Nuxt
const { isOpen, closeModal } = useBookingModal()
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style="background:rgba(17, 24, 39, 0.6);backdrop-filter:blur(8px)">
        
        <!-- Modal Backdrop Click Area -->
        <div class="absolute inset-0" @click="closeModal"></div>

        <!-- Modal Content Container -->
        <div 
          class="relative w-full max-w-4xl h-[90vh] max-h-[800px] rounded-[24px] overflow-hidden flex flex-col shadow-2xl" 
          style="background:#ffffff"
        >
          <!-- Header -->
          <div class="px-6 py-4 flex items-center justify-between" style="border-bottom:1px solid #e5e7eb;background:#f9fafb">
            <div>
              <h3 class="text-lg font-bold" style="color:#111827">Schedule a Consultation</h3>
              <p class="text-sm" style="color:#6b7280">Find a time that works best for your team.</p>
            </div>
            <button 
              @click="closeModal"
              class="p-2 rounded-full transition-colors hover:bg-gray-200"
              style="color:#6b7280"
              aria-label="Close modal"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <!-- Calendly Embed -->
          <div class="flex-1 w-full bg-white relative">
            <iframe 
              src="https://calendly.com/techminate-placeholder/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
              width="100%" 
              height="100%" 
              frameborder="0" 
              class="absolute inset-0"
            >
            </iframe>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
