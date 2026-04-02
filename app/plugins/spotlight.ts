export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('spotlight', {
    mounted(el) {
      // Must ensure the element has relative positioning to contain the pseudo-element glow
      el.style.position = 'relative';
      el.style.overflow = 'hidden';

      // Create the spotlight DOM element instead of pseudo-element to avoid CSS clashes
      const spotlight = document.createElement('div');
      spotlight.className = 'spotlight-overlay pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300';
      spotlight.style.background = 'radial-gradient(600px circle at 0px 0px, rgba(14, 165, 233, 0.04), transparent 40%)';
      spotlight.style.zIndex = '0'; // Keep behind text
      
      // Ensure children stay above the spotlight
      Array.from(el.children).forEach(child => {
        (child as HTMLElement).style.position = 'relative';
        (child as HTMLElement).style.zIndex = '1';
      });

      el.appendChild(spotlight);

      el.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(14, 165, 233, 0.05), transparent 40%)`;
      });

      el.addEventListener('mouseenter', () => {
        spotlight.classList.remove('opacity-0');
        spotlight.classList.add('opacity-100');
      });

      el.addEventListener('mouseleave', () => {
        spotlight.classList.remove('opacity-100');
        spotlight.classList.add('opacity-0');
      });
    }
  })
})
