<template>
  <div class="relative w-full min-h-screen bg-white font-['Inter'] overflow-x-hidden">
    <!-- Animated Background Blobs -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-glow-pink animate-blob"></div>
      <div class="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-glow-yellow animate-blob animation-delay-700"></div>
      <div class="absolute bottom-[-10%] left-[10%] w-[45%] h-[45%] bg-glow-green animate-blob animation-delay-1000"></div>
      <div class="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-glow-red animate-blob animation-delay-300"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <NavigationHeader />
      <div class="reveal">
        <HowItWorks />
      </div>
      <div class="reveal">
        <WhyAlwaysWin />
      </div>
      <div class="reveal">
        <ProtocolJourney />
      </div>
      <div class="reveal">
        <FAQSection />
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavigationHeader from './components/NavigationHeader.vue'
import HowItWorks from './components/HowItWorks.vue'
import WhyAlwaysWin from './components/WhyAlwaysWin.vue'
import ProtocolJourney from './components/ProtocolJourney.vue'
import FAQSection from './components/FAQSection.vue'
import FooterSection from './components/FooterSection.vue'

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Lowered for better mobile triggering
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, observerOptions)

  const revealElements = document.querySelectorAll('.reveal')
  revealElements.forEach((el) => observer.observe(el))
})
</script>
