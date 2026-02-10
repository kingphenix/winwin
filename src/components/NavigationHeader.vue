<template>
  <header class="bg-gradient-to-r from-[#a01a66] to-[#dc4039] h-20 sm:h-24 w-full flex items-center fixed top-0 z-50 shadow-lg">
    <nav class="max-w-6xl mx-auto w-full flex items-center justify-between px-4 sm:px-6">
      <!-- Logo -->
      <div class="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
        <img src="/logo%20favicon.svg" alt="AlwaysWin" class="h-8 sm:h-10 w-auto" />
        <span class="text-white text-lg sm:text-2xl font-bold tracking-tight font-['Inter']">Always<span class="text-yellow-400">Win</span></span>
      </div>

      <!-- Navigation Links (Desktop) -->
      <div class="hidden md:flex items-center gap-4 lg:gap-[27px] text-white text-base lg:text-[18px] font-medium tracking-[-0.9px]">
        <a href="/" class="hover:text-yellow-400 transition-all duration-300 ease-in-out whitespace-nowrap">{{ $t('nav.home') }}</a>
        <a href="#pre-ido" class="hover:text-yellow-400 transition-all duration-300 ease-in-out whitespace-nowrap">{{ $t('nav.preIDO') }}</a>
        <a href="#" class="hover:text-yellow-400 transition-all duration-300 ease-in-out whitespace-nowrap">{{ $t('nav.whitepaper') }}</a>
        <a href="#faq" class="hover:text-yellow-400 transition-all duration-300 ease-in-out whitespace-nowrap">{{ $t('nav.faq') }}</a>
      </div>

      <!-- Right Side -->
      <div class="flex items-center gap-2 sm:gap-[19px] relative ml-2">
        <div class="relative" ref="languageDropdownRef">
          <button 
            @click="showLanguageDropdown = !showLanguageDropdown"
            class="flex items-center gap-1.5 sm:gap-2 text-white border border-white/30 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-300 ease-in-out"
          >
            <!-- Dynamic Flag Icon -->
            <img 
              :src="currentLanguageObj.flag" 
              :alt="currentLanguageObj.name" 
              class="w-5 sm:w-6 h-auto rounded-sm object-cover border border-white/20"
            />
            <span class="text-xs sm:text-sm font-medium tracking-tight uppercase">{{ currentLanguageObj.code }}</span>
            <!-- Dropdown Arrow -->
            <svg 
              class="w-3 sm:w-4 h-3 sm:h-4 transition-transform duration-300" 
              :class="{ 'rotate-180': showLanguageDropdown }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          
          <!-- Language Dropdown -->
          <div v-if="showLanguageDropdown" class="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl py-2 min-w-[140px] sm:min-w-[160px] z-50 border border-gray-100 max-h-[300px] overflow-y-auto">
            <button 
              v-for="lang in languages"
              :key="lang.code"
              @click="selectLanguage(lang)" 
              class="flex items-center gap-3 w-full text-left px-4 py-2 text-black hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200"
              :class="{ 'bg-yellow-50 font-semibold text-yellow-600': currentLanguage === lang.code }"
            >
              <img :src="lang.flag" :alt="lang.name" class="w-5 h-auto rounded-sm object-cover border border-gray-200" />
              <span class="text-sm">{{ lang.name }}</span>
            </button>
          </div>
        </div>
        
        <!-- Connect Wallet Button -->
        <button class="flex items-center gap-1.5 sm:gap-2 bg-white text-black text-[10px] sm:text-sm font-medium px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-yellow-400/20 max-w-[120px] sm:max-w-[200px]">
          <span class="truncate">{{ $t('nav.connectWallet') }}</span>
          <img src="/WalletVector.svg" alt="" class="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
        </button>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="flex md:hidden items-center justify-center w-9 h-9 text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
        >
          <svg v-if="!isMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-[-10px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-10px]"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 top-20 z-40 bg-gradient-to-b from-[#dc4039] to-[#a01a66] md:hidden overflow-y-auto">
        <div class="flex flex-col items-center justify-center min-h-full py-12 gap-8 px-6 text-center">
          <a @click="isMenuOpen = false" href="/" class="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">{{ $t('nav.home') }}</a>
          <a @click="isMenuOpen = false" href="#pre-ido" class="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">{{ $t('nav.preIDO') }}</a>
          <a @click="isMenuOpen = false" href="#" class="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">{{ $t('nav.whitepaper') }}</a>
          <a @click="isMenuOpen = false" href="#faq" class="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">{{ $t('nav.faq') }}</a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const showLanguageDropdown = ref(false)
const isMenuOpen = ref(false)
const languageDropdownRef = ref(null)
const currentLanguage = ref('en')

const languages = [
  { code: 'en', name: 'English', flag: '/usa-flag.svg' },
  { code: 'fr', name: 'Français', flag: '/france-flag.svg' },
  { code: 'de', name: 'Deutsch', flag: '/germany-flag.svg' },
  { code: 'es', name: 'Español', flag: '/spain-flag.svg' },
  { code: 'zh', name: '中文', flag: '/china-flag.svg' },
  { code: 'pt', name: 'Português', flag: '/portugal-flag.svg' },
  { code: 'ru', name: 'Русский', flag: '/russia-flag.svg' },
  { code: 'ja', name: '日本語', flag: '/japan-flag.svg' },
]

const currentLanguageObj = computed(() => {
  return languages.find(l => l.code === currentLanguage.value) || languages[0]
})

const selectLanguage = (lang) => {
  currentLanguage.value = lang.code
  locale.value = lang.code
  showLanguageDropdown.value = false
}

const handleClickOutside = (event) => {
  if (languageDropdownRef.value && !languageDropdownRef.value.contains(event.target)) {
    showLanguageDropdown.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
