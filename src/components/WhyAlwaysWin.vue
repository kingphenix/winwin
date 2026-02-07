<template>
  <section class="relative bg-[#2d343a] py-24 overflow-hidden">
    <!-- Background Glows -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F6C744]/5 rounded-full blur-[120px] animate-blob"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#23B672]/5 rounded-full blur-[120px] animate-blob animation-delay-1000"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-20 text-center lg:text-left reveal">
        <h2 class="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#F6C744] via-[#F6C744] to-[#23B672]">
          {{ $t('whyWorks.title') }}
        </h2>
        <p class="text-xl sm:text-2xl text-white/60 max-w-2xl leading-relaxed">
          {{ $t('whyWorks.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
        
        <!-- Left Column: Illustrative Card -->
        <div class="reveal reveal-left">
          <div class="bg-[#3e444b] border-2 border-white/5 rounded-[48px] p-2 shadow-2xl relative aspect-square flex items-center justify-center overflow-hidden group hover:border-[#F6C744]/20 transition-all duration-500">
            <img src="/clash.png" alt="AlwaysWin Illustration" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>

        <!-- Right Column: Value Points -->
        <div class="relative pl-12 reveal reveal-right">
          <!-- Vertical Separator Line -->
          <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F6C744] via-[#23B672] to-transparent"></div>

          <div class="space-y-16">
            <!-- Point 1: Price -->
            <div class="relative group">
              <div class="flex items-center gap-6 mb-4">
                <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#F6C744]/50 group-hover:bg-[#F6C744]/10 transition-all duration-300">
                   <img src="/DollarVector.png" alt="Price Growth" class="w-7 h-7 object-contain group-hover:scale-110 transition-transform" />
                </div>
                <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">{{ $t('whyWorks.priceUpTitle') }}</h3>
              </div>
              <p class="text-white/50 text-lg leading-relaxed pl-2 group-hover:text-white/70 transition-colors">
                {{ $t('whyWorks.priceUpDesc') }}
              </p>
            </div>

            <!-- Point 2: Backing -->
            <div class="relative group">
              <div class="flex items-center gap-6 mb-4">
                <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#23B672]/50 group-hover:bg-[#23B672]/10 transition-all duration-300">
                   <img src="/tether-usdt-logo 1.png" alt="USDT Backing" class="w-7 h-7 object-contain group-hover:scale-110 transition-transform" />
                </div>
                <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">{{ $t('whyWorks.backedTitle') }}</h3>
              </div>
              <p class="text-white/50 text-lg leading-relaxed pl-2 group-hover:text-white/70 transition-colors">
                {{ $t('whyWorks.backedDesc') }}
              </p>
            </div>

            <!-- Point 3: Alignment -->
            <div class="relative group">
              <div class="flex items-center gap-6 mb-4">
                <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#F6C744]/50 group-hover:bg-[#F6C744]/10 transition-all duration-300">
                   <img src="/Vectorshake.png" alt="Incentive Alignment" class="w-7 h-7 object-contain group-hover:scale-110 transition-transform" />
                </div>
                <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">{{ $t('whyWorks.alignedTitle') }}</h3>
              </div>
              <p class="text-white/50 text-lg leading-relaxed pl-2 group-hover:text-white/70 transition-colors">
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
