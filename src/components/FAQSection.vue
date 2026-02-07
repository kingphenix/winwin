<template>
  <section id="faq" class="relative bg-gray-50 py-24 overflow-hidden">
    <!-- Background Glows -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#23b672]/5 rounded-full blur-[120px] animate-blob"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#d93b4c]/5 rounded-full blur-[100px] animate-blob animation-delay-700"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <h2 class="text-4xl sm:text-6xl font-bold tracking-tight text-[#1c1a1a] mb-6">
          {{ $t('faq.title') }}
        </h2>
        <p class="text-lg sm:text-2xl text-[#1c1a1a]/50 max-w-2xl mx-auto font-medium leading-relaxed">
          {{ $t('faq.subtitle') }}
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="bg-[#1c1a1a] rounded-[40px] p-4 sm:p-10 shadow-2xl reveal">
        <div class="space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" 
               class="group bg-white/5 rounded-3xl p-6 sm:p-8 cursor-pointer hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
               @click="toggleFaq(index)">
            <div class="flex items-center justify-between gap-6">
              <p class="text-white text-xl sm:text-2xl font-bold tracking-tight">{{ faq.question }}</p>
              <div class="w-12 h-12 rounded-full bg-[#23b672]/10 flex items-center justify-center text-[#23b672] group-hover:bg-[#23b672] group-hover:text-white transition-all duration-300 flex-shrink-0">
                <svg class="w-6 h-6 transition-transform duration-500" :class="{ 'rotate-45': faq.open }" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V20M4 12H20" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[500px]"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 max-h-[500px]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="faq.open" class="overflow-hidden mt-6 text-white/50 text-base sm:text-xl leading-relaxed font-medium">
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- View Full FAQ Button -->
      <div class="text-center mt-12 reveal">
        <button class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#d93b4c] text-white text-lg font-bold px-10 py-5 rounded-full hover:bg-[#c43343] hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-red-500/30">
          <span>{{ $t('faq.viewFull') }}</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
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
