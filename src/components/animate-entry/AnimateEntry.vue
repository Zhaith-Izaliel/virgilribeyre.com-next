<template>
  <div ref="target">
    <div
      :class="{
        'animate__animated animate__fadeIn animate__fast': animate,
        invisible: !animate,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" src="./AnimateEntry.ts"></script>
