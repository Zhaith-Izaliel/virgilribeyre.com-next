<template>
  <div ref="target">
    <transition :name="animationType">
      <div
        v-if="animate"
        class="animated-component"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" src="./AnimateEntry.ts"></script>
<style scoped>
@import url('./AnimateEntry.css');
</style>
