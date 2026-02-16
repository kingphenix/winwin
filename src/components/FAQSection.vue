<template>
  <section id="faq" class="relative bg-white py-24 overflow-hidden antialiased">
    <!-- Background Glows -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#23b672]/5 rounded-full blur-[80px] sm:blur-[120px] animate-blob"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#d93b4c]/5 rounded-full blur-[60px] sm:blur-[100px] animate-blob animation-delay-700"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12 reveal">
        <h2 class="text-3xl sm:text-6xl font-bold tracking-tight text-[#1c1a1a] mb-4 sm:mb-6" v-html="$t('faq.title')"></h2>
        <p class="text-base sm:text-lg text-[#1c1a1a] max-w-2xl mx-auto font-medium leading-relaxed mb-6 sm:mb-8">
          {{ $t('faq.subtitle') }}
        </p>

        <!-- View Full FAQ Button -->
        <div class="flex justify-center mb-8 sm:mb-12">
          <button class="inline-flex items-center justify-center gap-3 bg-[#d93b4c] text-white text-base sm:text-lg font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#c43343] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-red-500/30">
            <span>{{ $t('faq.viewFull') }}</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- FAQ Items Container -->
      <div class="bg-[#343842] rounded-[24px] sm:rounded-[32px] p-4 sm:p-12 shadow-2xl reveal border border-white/5 mx-auto max-w-[95%] sm:max-w-none">
        <div class="space-y-3 sm:space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" 
               class="group overflow-hidden rounded-2xl bg-[#6c727f] hover:bg-[#7a808f] transition-colors duration-300 cursor-pointer"
               @click="toggleFaq(index)">
            
            <!-- Question Header -->
            <div class="flex items-center justify-between p-5 sm:p-8 gap-4 sm:gap-6">
              <p class="text-white text-[12.91px] sm:text-xl font-light tracking-wide text-left flex-1" style="text-rendering: optimizeLegibility;">{{ faq.question }}</p>
              
              <!-- Icon -->
              <div class="flex-shrink-0 text-white transition-transform duration-300" :class="{ 'rotate-45': faq.open }">
                <svg class="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 5V19M5 12H19" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

            <!-- Answer Content -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-[500px] opacity-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="max-h-[500px] opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-if="faq.open" class="px-5 pb-5 sm:px-8 sm:pb-8 text-white/90 text-[12.91px] sm:text-lg leading-relaxed font-light border-t border-white/10 pt-4 sm:pt-0 sm:border-t-0" v-html="faq.answer"></div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const openStates = ref([false, false, false, false, false])

const faqs = computed(() => [
  { question: t('faq.q1'), answer: t('faq.a1'), open: openStates.value[0] },
  { question: t('faq.q2'), answer: t('faq.a2'), open: openStates.value[1] },
  { question: t('faq.q3'), answer: t('faq.a3'), open: openStates.value[2] },
  { question: t('faq.q4'), answer: t('faq.a4'), open: openStates.value[3] },
  { question: t('faq.q5'), answer: t('faq.a5'), open: openStates.value[4] }
])

const toggleFaq = (index) => {
  openStates.value[index] = !openStates.value[index]
}
</script>
