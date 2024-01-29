<template>
  <button class="animated-button">
    <IconoirProvider>
      <slot name="icon-before"></slot>
      <slot name="icon-after"></slot>
    </IconoirProvider>
    <span class="button-text"></span>
  </button>
</template>
<script lang="ts" src="./AnimatedButton.ts"></script>
<style>
@import url("./AnimatedButton.css");
</style>
