<template>
  <footer class="bg-[#329AD4] py-12">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-2 text-white">
          <div class="w-4 h-4 border border-white rounded-full flex items-center justify-center text-[8px]">C</div>
          <span class="text-sm sm:text-[16.4px] tracking-[-0.98px] text-center break-words">{{ $t('footer.copyright') }}</span>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-[30px] text-white text-sm sm:text-[16px] tracking-[-0.8px]">
          <a href="#" class="hover:text-yellow-200 hover:scale-105 transition-all duration-300 whitespace-nowrap">{{ $t('footer.privacy') }}</a>
          <a href="#" class="hover:text-yellow-200 hover:scale-105 transition-all duration-300 whitespace-nowrap">{{ $t('footer.risk') }}</a>
          <a href="#" class="hover:text-yellow-200 hover:scale-105 transition-all duration-300 whitespace-nowrap">{{ $t('footer.terms') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
