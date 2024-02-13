<template>
  <AnimatedBackground
    class="h-full w-full"
    :stars="state.stars"
  >
    <div class="landing">
      <div class="xl:hidden h-full sm:h-1/3 xl:h-1/12 w-full block"></div>
      <div
        class="flex h-full absolute -z-10 xl:relative justify-center items-center w-full xl:w-1/3 m-0 p-0"
      >
        <img
          alt="Virgil"
          class="lg:h-11/12 absolute md:bottom-0"
          src="@/assets/VR-Large-First.png"
        />
      </div>
      <div class="text-container">
        <h1 class="text-4xl sm:text-5xl md:text-8xl">
          {{ t('l_virgil_ribeyre') }}
        </h1>
        <TerminalEffect
          :is-col="true"
          :pause-time="1000"
          :texts="state.terminalTexts"
          class="text-3xl sm:text-4xl lg:text-5xl"
        >
        </TerminalEffect>
        <h2 class="text-xl sm:text-2xl md:text-3xl text-slate-400">
          {{ t('l_years_old', { age }) }}
        </h2>
        <a
          :href="state.malt.url.toString()"
          target="_blank"
          class="w-11/12 md:w-3/5 lg:w-1/2 xl:w-7/12"
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
  </AnimatedBackground>
</template>
<script src="./Landing.ts" lang="ts"></script>
<style scoped>
@import url('./Landing.css');
</style>
