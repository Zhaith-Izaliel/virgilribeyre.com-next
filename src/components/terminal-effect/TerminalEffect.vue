<template>
  <div
    :class="[
      'terminal-box',
      {
        'flex-col space-y-4': isCol,
        'space-x-4': !isCol,
      },
    ]"
  >
    <div>
      <slot></slot>
    </div>
    <div class="terminal-text">
      <span :class="currentClass">
        {{ currentWord }}
      </span>
      <span class="animate__animated animate__flash animate__infinite">
        <slot name="cursor">_</slot>
      </span>
    </div>
  </div>
</template>
<script lang="ts" src="./TerminalEffect.ts"></script>
<style scoped>
@import url('./TerminalEffect.css');
</style>
