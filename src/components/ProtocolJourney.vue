<script setup lang="ts">
import { ref, onMounted } from 'vue';

const videoRef = ref<HTMLVideoElement | null>(null);

onMounted(() => {
    // Simple play attempt on mount, similar to standard behavior
    if (videoRef.value) {
        videoRef.value.play().catch(() => {
            // Put mute back if auto-play fails
            if (videoRef.value) videoRef.value.muted = true;
        });
    }
});
</script>

<template>
  <section class="relative bg-white pt-24 pb-0 overflow-hidden">
    <!-- Background Glows -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-0 w-96 h-96 bg-[#23B672]/5 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-[#E54859]/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6">
      
      <!-- Value Growth Section -->
      <div class="mb-32 reveal">
        <h2 class="text-4xl sm:text-6xl md:text-[64px] font-bold tracking-tight text-[#1c1a1a] mb-8 leading-[1.05]">
          {{ $t('valueGrowth.title').split('WIN')[0] }}<span class="text-transparent bg-clip-text bg-[linear-gradient(90deg,#23B672_85.1%,#F0B90B_100%)] font-bold">WIN</span>{{ $t('valueGrowth.title').split('WIN')[1].split('design')[0] }}<span class="text-transparent bg-clip-text bg-[linear-gradient(90deg,#23B672_82.22%,#F6C744_100%)] font-bold">design</span>{{ $t('valueGrowth.title').split('design')[1] }}
        </h2>
        <p class="text-[15px] sm:text-xl text-[#1c1a1a] max-w-5xl mb-10 leading-relaxed font-medium">
            {{ $t('valueGrowth.description') }}
        </p>
        <button class="group w-[45%] sm:w-auto px-6 py-3.5 sm:px-10 sm:py-5 rounded-full bg-gradient-to-r from-[#E54859] to-[#D43547] text-white text-[14px] sm:text-lg font-bold flex items-center justify-center gap-2 sm:gap-3 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
          {{ $t('valueGrowth.readMore') }}
          <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" viewBox="0 0 12 12" fill="none">
            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- Protocol Journey Section -->
      <div class="relative">
        <div class="reveal">
          <h3 class="text-3xl sm:text-5xl font-bold text-[#1c1a1a] mb-6 tracking-tight">
              {{ $t('protocolJourney.title') }}
          </h3>
          <p class="text-[15px] sm:text-xl text-[#1c1a1a] max-w-5xl mb-8 md:mb-16 leading-relaxed font-medium">
              {{ $t('protocolJourney.subtitle') }}
          </p>
        </div>

        <!-- Visualization -->
        <div class="relative w-full my-12 sm:-mt-16 sm:mb-48 overflow-hidden pointer-events-none">
                 <video 
                     ref="videoRef"
                     src="/videos/FinalGraph.mp4" 
                     autoplay 
                     muted 
                     loop 
                     playsinline 
                     class="w-full h-auto object-contain scale-y-[1.01] origin-top translate-y-[2%]"
                 ></video>
        </div>

      </div>


    </div>

    <!-- CTA Section -->
    <div class="w-full bg-[#23B672] py-16 sm:py-24 mt-0 reveal">
        <div class="max-w-5xl mx-auto px-6">
            <div class="bg-white rounded-[40px] px-6 py-12 sm:px-8 sm:py-16 md:p-24 text-center shadow-none sm:shadow-[20px_20px_0px_0px_rgba(0,0,0,0.1)] border-0 sm:border-2 border-black/5">
                <h2 class="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1a1a] mb-6 sm:mb-8 leading-tight">
                    {{ $t('getInEarly.title').split('Win')[0] }}<span class="text-[#23B672] sm:text-transparent sm:bg-clip-text sm:bg-[linear-gradient(90deg,#23B672_85.1%,#F0B90B_100%)] font-bold">Win</span>{{ $t('getInEarly.title').split('Win')[1] }}
                </h2>
                <p class="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-[#1c1a1a] max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed font-medium">
                    {{ $t('getInEarly.description') }}
                </p>
                
                <div class="flex flex-row items-center justify-center gap-3 sm:gap-6">
                    <button class="w-[38%] sm:flex-none px-2 py-3 sm:px-10 sm:py-5 rounded-full bg-[#E54859] text-white text-[12px] sm:text-lg font-bold flex items-center justify-center gap-1.5 sm:gap-3 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
                        <span class="whitespace-nowrap">{{ $t('getInEarly.joinPreIDO') }}</span>
                        <svg class="w-2.5 h-2.5 sm:w-4 sm:h-4" viewBox="0 0 12 12" fill="none">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="w-[38%] sm:flex-none px-2 py-3 sm:px-10 sm:py-5 rounded-full bg-white border border-[#1c1a1a] text-[#1c1a1a] text-[12px] sm:text-lg font-bold flex items-center justify-center gap-1.5 sm:gap-3 hover:bg-black/5 hover:scale-105 active:scale-95 transition-all duration-300">
                        <span class="whitespace-nowrap">{{ $t('getInEarly.learnMore') }}</span>
                        <svg class="w-2.5 h-2.5 sm:w-4 sm:h-4" viewBox="0 0 12 12" fill="none">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>


