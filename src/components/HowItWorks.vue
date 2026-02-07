<template>
  <section id="how-it-works" class="relative bg-white py-20 overflow-hidden">
    <!-- Background Glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[10%] right-[-5%] w-96 h-96 bg-[#23b672]/5 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-[#a01a66]/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <!-- Back Button -->
      <div class="flex justify-center mb-12 reveal">
        <a href="/" class="group flex items-center gap-3 bg-[#f3f4f6] hover:bg-[#e5e7eb] px-1.5 py-1.5 rounded-full transition-all duration-300">
          <div class="w-8 h-8 rounded-full bg-[#ffc5c5] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <svg class="w-5 h-5 text-[#ff4d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <span class="text-[#1c1a1a] font-medium text-sm pr-5 tracking-tight">{{ $t('nav.backToHomepage') }}</span>
        </a>
      </div>

      <!-- Header -->
      <div class="text-center mb-10 reveal">
        <h2 class="text-4xl sm:text-5xl md:text-[64px] leading-[110%] font-bold tracking-tight text-[#1c1a1a] break-words">
          {{ $t('hero.howItWorks') }}
        </h2>
      </div>

      <!-- Formula Indicator Box -->
      <div class="flex justify-center mb-16 reveal">
        <div class="border-2 border-black rounded-xl py-5 px-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 bg-white">
          <p class="text-lg sm:text-xl font-bold text-[#1c1a1a] break-words">
            {{ $t('hero.formula') }} 
            <span class="text-[#23b672] ml-2">(P=R/C)</span>
          </p>
        </div>
      </div>

      <!-- Main Outer Container -->
      <div class="space-y-12">
        
        <!-- Card 1: Buying -->
        <div class="reveal">
          <div class="bg-white border-2 border-black rounded-[24px] sm:rounded-[40px] p-6 sm:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-500">
            <div 
              @click="openModal('/videos/Buy%20Scenario.mp4')"
              class="group w-full h-[220px] sm:h-[400px] bg-gray-50 rounded-[20px] sm:rounded-[30px] flex items-center justify-center mb-8 relative overflow-hidden shadow-inner cursor-pointer"
            >
              <video 
                src="/videos/Buy%20Scenario.mp4" 
                autoplay 
                muted 
                loop 
                playsinline 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              ></video>
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div class="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500">
                  <svg class="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M7 6v12l10-6z" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 class="text-3xl sm:text-[40px] leading-[110%] font-bold tracking-tight text-[#1c1a1a] mb-5 break-words">{{ $t('hero.buyingTitle') }}</h3>
            <p class="text-lg sm:text-[20px] leading-[1.6] font-medium text-gray-500 max-w-5xl break-words">
              {{ $t('hero.buyingDesc') }}
            </p>
          </div>
        </div>

        <!-- Card 2: Selling -->
        <div class="reveal">
          <div class="bg-white border-2 border-black rounded-[24px] sm:rounded-[40px] p-6 sm:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-500">
            <div 
              @click="openModal('/videos/Sell%20scenario.mp4')"
              class="group w-full h-[220px] sm:h-[400px] bg-gray-50 rounded-[20px] sm:rounded-[30px] flex items-center justify-center mb-8 relative overflow-hidden shadow-inner cursor-pointer"
            >
              <video 
                src="/videos/Sell%20scenario.mp4" 
                autoplay 
                muted 
                loop 
                playsinline 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              ></video>
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div class="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500">
                  <svg class="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M7 6v12l10-6z" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 class="text-3xl sm:text-[40px] leading-[110%] font-bold tracking-tight text-[#1c1a1a] mb-5 break-words">{{ $t('hero.sellingTitle') }}</h3>
            <p class="text-lg sm:text-[20px] leading-[1.6] font-medium text-gray-500 max-w-5xl break-words">
              {{ $t('hero.sellingDesc') }}
            </p>
          </div>
        </div>

        <!-- Card 3: USDT Support -->
        <div class="reveal">
          <div class="bg-[#f9fafb] border-2 border-black rounded-[24px] sm:rounded-[40px] p-6 sm:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center gap-10">
            <div class="w-full md:w-[260px] h-[220px] flex items-center justify-center flex-shrink-0 animate-float bg-white rounded-3xl border-2 border-black p-6">
              <img src="/Frame 11Usdt.png" alt="USDT Supported" class="w-full h-auto max-h-full object-contain" />
            </div>
            <div class="flex-1">
              <h3 class="text-3xl sm:text-[40px] leading-[110%] font-bold tracking-tight text-[#1c1a1a] mb-5 break-words">{{ $t('hero.swappingTitle') }}</h3>
              <p class="text-lg sm:text-[20px] leading-[1.6] font-medium text-gray-500 break-words">
                {{ $t('hero.swappingDesc') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Detailed Text Section -->
        <div class="mt-20 space-y-16">
          <div class="reveal">
            <p class="text-3xl sm:text-[52px] leading-tight font-bold tracking-tight">
              <span class="text-[#1c1a1a]">{{ $t('hero.detailed1_1') }}</span>
              <span class="text-[#1c1a1a]/40">{{ $t('hero.detailed1_2') }}</span>
            </p>
          </div>
          <div class="reveal">
            <p class="text-3xl sm:text-[52px] leading-tight font-bold tracking-tight">
              <span class="text-[#1c1a1a]">{{ $t('hero.detailed2_1') }}</span>
              <span class="text-[#1c1a1a]/40">{{ $t('hero.detailed2_2') }}</span>
            </p>
          </div>
          <div class="reveal">
            <p class="text-3xl sm:text-[52px] leading-tight font-bold tracking-tight">
              <span class="text-[#1c1a1a]">{{ $t('hero.detailed3_1') }}</span>
              <span class="text-[#1c1a1a]/40">{{ $t('hero.detailed3_2') }}</span>
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- Video Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="isModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <!-- Backdrop -->
          <div @click="closeModal" class="absolute inset-0 bg-[#1c1a1a]/90 backdrop-blur-xl"></div>
          
          <!-- Modal Content -->
          <div class="relative w-full max-w-5xl bg-black rounded-[32px] overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/20">
            <!-- Close Button -->
            <button 
              @click="closeModal"
              class="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:rotate-90 group"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <!-- Full Video -->
            <video 
              :src="activeVideoSrc" 
              autoplay 
              controls
              playsinline 
              class="w-full h-auto max-h-[85vh] object-contain"
            ></video>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isModalOpen = ref(false)
const activeVideoSrc = ref('')

const openModal = (src) => {
  activeVideoSrc.value = src
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    activeVideoSrc.value = ''
    document.body.style.overflow = ''
  }, 300)
}

// Close on Escape key
const handleKeyDown = (e) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})
</script>
