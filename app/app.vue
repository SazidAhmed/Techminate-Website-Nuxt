<script setup lang="ts">
useSeoMeta({
  title: 'Techminate | Enterprise Software Architecture & AI',
  description: 'We design and build high-performance digital products for global enterprises and ambitious startups. Custom Web, Mobile, and AI Software built to scale.',
  ogTitle: 'Techminate | Enterprise Software & AI Integrations',
  ogDescription: 'Architectural Precision in Software. Custom Web, Mobile, and AI products built for high velocity.',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
  <div class="relative min-h-screen bg-white">
    <!-- Global Glassmorphism Background Mesh -->
    <div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-30 mix-blend-multiply filter blur-[100px]" style="background:#0ea5e9"></div>
      <div class="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full opacity-20 mix-blend-multiply filter blur-[120px]" style="background:#a855f7"></div>
      <div class="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] rounded-full opacity-20 mix-blend-multiply filter blur-[120px]" style="background:#3b82f6"></div>
      
      <!-- Premium Noise Overlay for texture -->
      <div class="absolute inset-0 opacity-[0.4]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
    </div>

    <BookingModal />
    <Navigation />
    <main>
      <HeroSection />
      <TrustedBySection />
      <TechStackSection />
      <ServicesSection />
      <DashboardSection />
      <AIIntegrationSection />
      <PortfolioSection />
      <EngagementModelsSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
    <FooterSection />
    <BackToTop />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}

:global(html) {
  scroll-behavior: smooth;
}

:global(html),
:global(body),
:global(#__nuxt) {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

:global(body) {
  overflow-x: hidden;
}

/* Custom Scrollbar */
:global(::-webkit-scrollbar) {
  width: 10px;
}
:global(::-webkit-scrollbar-track) {
  background: #f3f4f6;
}
:global(::-webkit-scrollbar-thumb) {
  background: #cbd5e1;
  border-radius: 5px;
}
:global(::-webkit-scrollbar-thumb:hover) {
  background: #94a3b8;
}

/* Custom Selection Highlight */
:global(::selection) {
  background-color: #0ea5e9;
  color: #ffffff;
}
</style>
