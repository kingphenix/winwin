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
        <div class="border-[3px] border-black rounded-2xl py-5 px-10 shadow-sm transition-all duration-300 bg-white/50 backdrop-blur-sm">
          <p class="text-lg sm:text-xl font-bold text-[#1c1a1a] break-words">
            {{ $t('hero.formula') }} 
            <span class="text-[#23b672] ml-2">(P=R/C)</span>
          </p>
        </div>
      </div>

      <!-- Main Outer Container -->
      <div class="border-0 sm:border-[3px] border-black rounded-[32px] sm:rounded-[64px] p-0 sm:p-10 space-y-8 sm:space-y-12 bg-transparent sm:bg-white/50 backdrop-blur-none sm:backdrop-blur-sm shadow-none sm:shadow-sm">
        
        <!-- Card 1: Buying -->
        <div class="reveal">
          <div class="bg-white border sm:border-[3px] border-black rounded-[28px] sm:rounded-[48px] p-5 sm:p-10 hover:border-gray-200 transition-all duration-500">
            <div 
              @click="openModal('/videos/Buy%20Scenario.mp4')"
              class="group w-full bg-black rounded-[20px] sm:rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden shadow-inner cursor-pointer border-2 border-black"
            >
              <video 
                src="/videos/Buy%20Scenario.mp4" 
                autoplay 
                muted 
                loop 
                playsinline 
                class="w-full h-full object-cover transition-transform duration-700 scale-[1.03] group-hover:scale-110"
              ></video>
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div class="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500">
                  <svg class="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M7 6v12l10-6z" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 class="text-[26px] sm:text-[40px] leading-[110%] font-bold tracking-tight text-[#1c1a1a] mb-3 break-words">{{ $t('hero.buyingTitle') }}</h3>
            <p class="text-[15px] sm:text-[20px] leading-[1.5] font-medium text-black/60 max-w-5xl break-words">
              {{ $t('hero.buyingDesc') }}
            </p>
          </div>
        </div>

        <!-- Card 2: Selling -->
        <div class="reveal">
          <div class="bg-white border sm:border-[3px] border-black rounded-[28px] sm:rounded-[48px] p-5 sm:p-10 hover:border-gray-200 transition-all duration-500">
            <div 
              @click="openModal('/videos/Sell%20scenario.mp4')"
              class="group w-full bg-black rounded-[20px] sm:rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden shadow-inner cursor-pointer border-2 border-black"
            >
              <video 
                src="/videos/Sell%20scenario.mp4" 
                autoplay 
                muted 
                loop 
                playsinline 
                class="w-full h-full object-cover transition-transform duration-700 scale-[1.03] group-hover:scale-110"
              ></video>
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div class="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500">
                  <svg class="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M7 6v12l10-6z" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 class="text-[26px] sm:text-[40px] leading-[110%] font-bold tracking-tight text-[#1c1a1a] mb-3 break-words">{{ $t('hero.sellingTitle') }}</h3>
            <p class="text-[15px] sm:text-[20px] leading-[1.5] font-medium text-black/60 max-w-5xl break-words">
              {{ $t('hero.sellingDesc') }}
            </p>
          </div>
        </div>

        <!-- Card 3: USDT Support -->
        <div class="reveal">
          <div class="bg-white border sm:border-[3px] border-black rounded-[28px] sm:rounded-[48px] p-5 sm:p-10 flex flex-col md:flex-row items-center gap-10 hover:border-gray-200 transition-all duration-500">
            <div class="w-full md:w-[260px] h-[220px] flex items-center justify-center flex-shrink-0 animate-float bg-gray-50 rounded-3xl border-0 sm:border-[3px] border-black overflow-hidden">
              <img src="/Frame 11Usdt.png" alt="USDT Supported" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1">
              <h3 class="text-[26px] sm:text-[40px] leading-[110%] font-bold tracking-tight text-[#1c1a1a] mb-3 break-words">{{ $t('hero.swappingTitle') }}</h3>
              <p class="text-[15px] sm:text-[20px] leading-[1.5] font-medium text-black/60 break-words">
                {{ $t('hero.swappingDesc') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Detailed Text Section -->
      <div class="mt-20 space-y-12 sm:space-y-16">
        <div class="reveal">
          <p class="text-[28px] sm:text-[42px] leading-[39px] sm:leading-[60px] font-medium tracking-[-0.05em] font-['Inter']">
            <span class="text-[#1c1a1a]">{{ $t('hero.detailed1_1') }}</span>
            <span class="text-[#1c1a1a]/40">{{ $t('hero.detailed1_2') }}</span>
          </p>
        </div>
        <div class="reveal">
          <p class="text-[28px] sm:text-[42px] leading-[39px] sm:leading-[60px] font-medium tracking-[-0.05em] font-['Inter']">
            <span class="text-[#1c1a1a]">{{ $t('hero.detailed2_1') }}</span>
            <span class="text-[#1c1a1a]/40">
              <template v-if="!isExpanded">
                <span class="sm:hidden">
                  {{ $t('hero.detailed2_2').substring(0, 14) }}
                  <button 
                    @click="isExpanded = true"
                    class="inline-flex items-center gap-0.5 text-[#23B672] font-bold ml-1 hover:opacity-80 transition-opacity"
                  >
                    See more
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M19 9l-7 7-7-7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </span>
                <span class="hidden sm:inline">{{ $t('hero.detailed2_2') }}</span>
              </template>
              <template v-else>
                {{ $t('hero.detailed2_2') }}
              </template>
            </span>
          </p>
        </div>
        <div class="reveal" :class="{ 'hidden sm:block': !isExpanded }">
          <p class="text-[28px] sm:text-[42px] leading-[39px] sm:leading-[60px] font-medium tracking-[-0.05em] font-['Inter']">
            <span class="text-[#1c1a1a]">{{ $t('hero.detailed3_1') }}</span>
            <span class="text-[#1c1a1a]/40">
              {{ $t('hero.detailed3_2') }}
              <button 
                v-if="isExpanded"
                @click="isExpanded = false"
                class="sm:hidden inline-flex items-center gap-0.5 text-[#23B672] font-bold ml-1 hover:opacity-80 transition-opacity"
              >
                Show less
                <svg class="w-4 h-4 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </span>
          </p>
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
const isExpanded = ref(false)
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
