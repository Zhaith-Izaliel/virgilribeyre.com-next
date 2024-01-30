<template>
  <button class="animated-button">
    <span class="circle">
      <span
        class="arrow"
        aria-hidden="true"
      ></span>
    </span>
    <span class="button-text">
      <slot>
        {{ t('l_click_me') }}
      </slot>
    </span>
  </button>
</template>
<script lang="ts" src="./AnimatedButton.ts"></script>
<style>
@import url('./AnimatedButton.css');
</style>
