<template>
  <section class="relative bg-[#2d343a] py-16 overflow-hidden">
    <!-- Background Glows -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F6C744]/5 rounded-full blur-[120px] animate-blob"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#23B672]/5 rounded-full blur-[120px] animate-blob animation-delay-1000"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 lg:mb-12 text-center lg:text-left reveal">
        <h2 class="text-[32px] sm:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#F6C744] to-[#23B672]">
          {{ $t('whyWorks.title') }}
        </h2>
        <p class="text-[17px] sm:text-lg text-white leading-snug lg:mx-0 max-w-2xl opacity-90">
          {{ $t('whyWorks.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center justify-items-center lg:justify-items-stretch">
        
        <!-- Left Column: Illustrative Card -->
        <div class="reveal flex justify-center w-full">
          <!-- Desktop Container (Hidden on Mobile) -->
          <div class="hidden sm:flex bg-[#4a5159] border-4 border-white/10 rounded-[48px] p-6 shadow-2xl relative aspect-square items-center justify-center overflow-hidden group hover:border-[#F6C744]/20 transition-all duration-500 w-full max-w-[632px] mx-auto">
            <div class="flex justify-center w-full h-full">
              <img src="/clash.png" alt="AlwaysWin Illustration" class="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
          
          <!-- Mobile View: Image Only (Hidden on Desktop) --> 
          <div class="flex sm:hidden justify-center items-center w-full overflow-visible"> 
            <img src="/clash.png" alt="AlwaysWin Illustration" class="w-[110%] max-w-none -mx-[5%] h-auto object-contain" /> 
          </div>
        </div>

        <!-- Right Column: Value Points -->
        <div class="relative lg:px-0 lg:pl-8 reveal">
          <!-- Vertical Separator Line - hidden on mobile -->
          <div class="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-white"></div>

          <div class="space-y-12 sm:space-y-10">
            <!-- Point 1: Price -->
            <div class="relative group">
              <div class="flex items-center gap-4 sm:gap-6 mb-4">
                <div class="w-10 h-10 sm:w-14 sm:h-14 bg-black rounded-full sm:rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#F6C744]/50 transition-all duration-300">
                   <img src="/DollarVector.png" alt="Price Growth" class="w-5 h-5 sm:w-7 sm:h-7 object-contain group-hover:scale-110 transition-transform" />
                </div>
                <h3 class="text-xl sm:text-3xl font-bold text-white tracking-tight">{{ $t('whyWorks.priceUpTitle') }}</h3>
              </div>
              <p class="text-white/70 text-[15px] sm:text-lg leading-relaxed group-hover:text-white transition-colors">
                {{ $t('whyWorks.priceUpDesc') }}
              </p>
            </div>

            <!-- Point 2: Backing -->
            <div class="relative group">
              <div class="flex items-center gap-4 sm:gap-6 mb-4">
                <div class="w-10 h-10 sm:w-14 sm:h-14 bg-black rounded-full sm:rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#23B672]/50 transition-all duration-300">
                   <img src="/tether-usdt-logo 1.png" alt="USDT Backing" class="w-5 h-5 sm:w-7 sm:h-7 object-contain group-hover:scale-110 transition-transform" />
                </div>
                <h3 class="text-xl sm:text-3xl font-bold text-white tracking-tight">{{ $t('whyWorks.backedTitle') }}</h3>
              </div>
              <p class="text-white/70 text-[15px] sm:text-lg leading-relaxed group-hover:text-white transition-colors">
                {{ $t('whyWorks.backedDesc') }}
              </p>
            </div>

            <!-- Point 3: Alignment -->
            <div class="relative group">
              <div class="flex items-center gap-4 sm:gap-6 mb-4">
                <div class="w-10 h-10 sm:w-14 sm:h-14 bg-black rounded-full sm:rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#F6C744]/50 transition-all duration-300">
                   <img src="/Vectorshake.png" alt="Incentive Alignment" class="w-5 h-5 sm:w-7 sm:h-7 object-contain group-hover:scale-110 transition-transform" />
                </div>
                <h3 class="text-xl sm:text-3xl font-bold text-white tracking-tight">{{ $t('whyWorks.alignedTitle') }}</h3>
              </div>
              <p class="text-white/70 text-[15px] sm:text-lg leading-relaxed group-hover:text-white transition-colors">
                {{ $t('whyWorks.alignedDesc') }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>
