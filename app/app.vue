<template>
  <div>
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
