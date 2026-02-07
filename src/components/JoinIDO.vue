<template>
  <section class="bg-[#23b672] py-16">
    <div class="max-w-5xl mx-auto px-6">
      <div class="bg-white rounded-3xl p-10 md:p-16 shadow-2xl">
        <div class="text-center">
          <h2 class="text-4xl md:text-5xl font-medium tracking-tight text-[#1c1a1a] mb-6">
            {{ $t('getInEarly.title').split('Win')[0] }}<span class="text-transparent bg-clip-text bg-[linear-gradient(90deg,#23B672_85.1%,#F0B90B_100%)] font-bold">Win</span>{{ $t('getInEarly.title').split('Win')[1] }}
          </h2>
          <p class="text-xl text-gray-600 tracking-tight max-w-2xl mx-auto mb-10">
            {{ $t('getInEarly.description') }}
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button class="flex items-center gap-2 bg-[#d93b4c] text-white text-lg font-medium px-10 py-4 rounded-full hover:bg-[#c43343] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-red-500/20">
              {{ $t('getInEarly.joinPreIDO') }}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="flex items-center gap-2 text-black text-lg font-medium px-10 py-4 rounded-full border-2 border-black hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300">
              {{ $t('getInEarly.learnMore') }}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
