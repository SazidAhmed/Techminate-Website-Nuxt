<script setup lang="ts">
import { ref } from 'vue'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple MVP typically takes 8–12 weeks, while more complex enterprise solutions can range from 4–6 months. We provide detailed timelines during our discovery phase and maintain full transparency throughout.'
  },
  {
    question: 'Can you help modernize our existing legacy platforms?',
    answer: 'Absolutely. Legacy modernization is one of our core strengths. We conduct a thorough audit of your existing system, identify technical debt, and create a phased migration strategy that minimizes disruption to your operations.'
  },
  {
    question: 'What is the process for integrating AI into our current product?',
    answer: 'We begin with a discovery session to identify the highest-ROI opportunities for AI integration. From there, we prototype, validate with your team, and then build a production-ready solution—complete with monitoring and fine-tuning workflows.'
  },
  {
    question: 'Will we own the source code?',
    answer: 'Yes, always. You own 100% of the intellectual property we create for you. All source code is delivered via your own Git repository, with complete documentation, so your team has full visibility and control from day one.'
  },
]

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="py-16 sm:py-20 lg:py-28" style="background:#f9fafb">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-14">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style="color:#111827">
          Frequently Asked Questions
        </h2>
      </div>

      <div style="display:flex;flex-direction:column;gap:12px">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="rounded-[16px] overflow-hidden transition-all duration-300"
          :style="{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: openIndex === index ? '1px solid #e5e7eb' : '1px solid transparent' }"
        >
          <button
            :id="`faq-btn-${index}`"
            class="w-full flex items-center justify-between text-left transition-colors"
            style="padding:20px 24px;background:transparent"
            :aria-expanded="openIndex === index"
            @click="toggle(index)"
          >
            <span class="text-sm font-bold pr-4" style="color:#111827">{{ faq.question }}</span>
            <span
              class="flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-200"
              :style="{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)', color: '#6b7280' }"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
            </span>
          </button>

          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="openIndex === index">
              <p class="text-sm leading-relaxed" style="padding:0 24px 20px;color:#6b7280">
                {{ faq.answer }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
