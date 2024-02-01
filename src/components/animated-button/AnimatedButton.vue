<template>
  <button
    v-if="type === 'cta-effect'"
    :class="`animated-button ${styleType} ${type}`"
  >
    <span
      class="circle"
      aria-hidden="true"
    >
      <span
        class="icon"
        aria-hidden="true"
      ></span>
    </span>
    <span class="main">
      <slot></slot>
    </span>
  </button>
  <button
    v-else
    :class="`animated-button ${type} ${styleType}`"
  >
    <span
      class="before"
      aria-hidden="true"
    ></span>
    <span class="main">
      <slot></slot>
    </span>
    <span
      class="after"
      aria-hidden="true"
    ></span>
  </button>
</template>
<script lang="ts" src="./AnimatedButton.ts"></script>
<style scoped>
@import url('./AnimatedButton.css');
</style>
