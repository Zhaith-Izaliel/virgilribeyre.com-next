<template>
  <section class="w-full flex flex-col">
    <div class="flex flex-col space-y-2">
      <h1 class="text-2xl md:text-3xl font-semibold tracking-tight">
        {{ t(event.label) }}
      </h1>
      <h2 class="text-base md:text-xl text-blue-400">
        {{ `${dateToString(event.start)} - ${dateToString(event.end)}` }}
      </h2>
      <vue-markdown
        :source="t(event.description)"
        class="markdown-experiences-render"
      ></vue-markdown>
    </div>
  </section>
</template>
<script lang="ts" src="./TimelineCard.ts"></script>
