<template>
  <div class="landing">
    <div class="landing-terminal">
      <!-- <TerminalEffect :texts="state.terminalTexts" /> -->
    </div>
    <div class="landing-profile">
      <div class="landing-cta">
        <h1 class="landing-name">
          {{ t('l_cta') }}
        </h1>
        <a
          :href="Config.socials.malt"
          target="_blank"
        >
          <AnimatedButton>{{ t('l_contact_me') }}</AnimatedButton>
        </a>
      </div>
    </div>
  </div>
</template>
<script src="./Landing.ts" lang="ts"></script>
<style>
@import url('./Landing.css');
</style>
