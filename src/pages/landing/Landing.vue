<template>
  <div class="landing">
    <div class="xl:hidden h-full sm:h-1/3 xl:h-1/12 w-full block"></div>
    <div class="image-container"></div>
    <div class="text-container">
      <h1 class="text-4xl sm:text-5xl md:text-8xl">
        {{ t('l_virgil_ribeyre') }}
      </h1>
      <p class="text-3xl sm:text-4xl lg:text-5xl">
        <span class="text-indigo-500">
          {{ t('l_software_developer') }}
        </span>
        <span class="animate__animated animate__flash animate__infinite">
          <slot name="cursor">_</slot>
        </span>
      </p>
      <h2 class="text-xl sm:text-2xl md:text-3xl text-slate-400">
        {{ t('l_years_old', { age }) }}
      </h2>
      <a
        :href="state.malt.url.toString()"
        target="_blank"
        class="w-11/12 md:w-3/5 lg:w-1/2 xl:w-8/12"
      >
        <AnimatedButton
          type="cta-effect"
          style-type="success"
          class="text-base sm:text-lg md:text-2xl min-w-full"
          >{{ t('l_cta') }}</AnimatedButton
        >
      </a>
    </div>
  </div>
</template>
<script src="./Landing.ts" lang="ts"></script>
<style scoped>
@import url('./Landing.css');
</style>
