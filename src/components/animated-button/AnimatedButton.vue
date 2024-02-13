<template>
  <button :class="`animated-button ${type} ${styleType}`">
    <template v-if="type === 'cta-effect'">
      <div
        class="circle"
        aria-hidden="true"
      >
        <div
          class="icon"
          aria-hidden="true"
        ></div>
      </div>
      <div class="main">
        <slot></slot>
      </div>
    </template>
    <template v-else>
      <div
        class="before"
        aria-hidden="true"
      ></div>
      <div class="main">
        <slot></slot>
      </div>
      <div
        class="after"
        aria-hidden="true"
      ></div>
    </template>
  </button>
</template>
<script lang="ts" src="./AnimatedButton.ts"></script>
<style scoped>
@import url('./AnimatedButton.css');
</style>
