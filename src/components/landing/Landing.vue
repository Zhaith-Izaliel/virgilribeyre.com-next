<template>
  <div class="landing">
    <div class="landing-terminal">
      <TerminalEffect :texts="state.terminalTexts" />
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
          <AnimatedButton>
            <template #default>
              {{ t('l_cta_button') }}
            </template>
            <template #icon-before>
              <SendDiagonalSolidSolid />
            </template>
            <template #icon-after>
              <SendSolidSolid />
            </template>
          </AnimatedButton>
        </a>
      </div>
    </div>
  </div>
</template>
<script src="./Landing.ts" lang="ts"></script>
<style>
@import url('./Landing.css');
</style>
