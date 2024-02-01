<template>
  <AnimatedBackground
    class="h-screen w-screen"
    :stars="state.stars"
  >
    <div
      class="flex relative flex-col xl:flex-row justify-around items-center h-full w-full"
    >
      <div class="xl:hidden h-full sm:h-1/3 xl:h-1/12 w-full block"></div>
      <div
        class="flex h-full absolute -z-10 xl:relative justify-center items-center w-full xl:w-1/3 m-0 p-0"
      >
        <img
          alt="Virgil"
          class="absolute md:bottom-0"
          src="@/assets/VR-Large-First.png"
        />
      </div>
      <div
        class="w-full h-1/3 flex flex-col py-8 xl:py-72 space-y-4 xl:space-y-12 backdrop-blur-3xl justify-center text-2xl md:text-4xl items-center rounded-3xl xl:w-2/5 text-default bg-background/75 shadow-2xl shadow-info"
      >
        <h1 class="text-5xl md:text-8xl">
          {{ t('l_virgil_ribeyre') }}
        </h1>
        <h2 class="text-4xl md:text-5xl text-indigo-500">
          {{ t('l_software_developer') }}
        </h2>
        <TerminalEffect
          :is-col="true"
          :loop="true"
          :pause-time="1000"
          :texts="state.terminalTexts"
        >
        </TerminalEffect>
        <h2 class="text-2xl xl:text-4xl">
          {{ t('l_cta') }}
        </h2>
        <a
          :href="Config.socials.malt"
          target="_blank"
          class="w-3/5 lg:w-1/3"
        >
          <AnimatedButton
            type="cta-effect"
            style-type="success"
            class="text-lg md:text-2xl min-w-full"
            >{{ t('l_contact_me') }}</AnimatedButton
          >
        </a>
      </div>
    </div>
  </AnimatedBackground>
</template>
<script src="./Landing.ts" lang="ts"></script>
