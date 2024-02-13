<template>
  <div
    ref="target"
    class="w-full"
  >
    <div
      :class="[
        'w-full',
        {
          'animate__animated animate__fadeIn animate__fast': animate,
          invisible: !animate,
        },
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" src="./AnimateEntry.ts"></script>
