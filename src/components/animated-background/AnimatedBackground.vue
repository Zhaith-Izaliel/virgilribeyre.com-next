<template>
  <div class="relative flex flex-col">
    <slot></slot>
    <div class="animated-background">
      <span
        v-for="(star, i) in stars"
        :key="i"
        class="stars"
        aria-hidden="true"
        :style="computeStyle(star)"
      ></span>
    </div>
  </div>
</template>
<script src="./AnimatedBackground.ts" lang="ts"></script>
<style scoped>
@import url('./AnimatedBackground.css');
</style>
