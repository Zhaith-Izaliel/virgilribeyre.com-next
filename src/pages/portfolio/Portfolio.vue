<template>
  <div class="flex flex-col space-y-8 items-center">
    <div class="mx-auto w-full lg:w-2/3 xl:w-1/2">
      <vue-markdown
        class="m-4 markdown-render"
        :source="t('markdown.l_portfolio')"
      />
    </div>
    <Projects :projects="state.projects"></Projects>
    <div
      class="w-full lg:w-2/3 xl:w-1/2 flex items-center justify-center lg:justify-end text-lg"
    >
      <a
        :href="state.gitlab.url.toString()"
        target="_blank"
        class="xl:min-w-[25%] lg:min-w-[33%] min-w-[66%]"
      >
        <AnimatedButton
          type="cta-effect"
          style-type="info"
          class="min-w-full"
        >
          {{ t('l_want_more') }}
        </AnimatedButton>
      </a>
    </div>
  </div>
</template>
<script lang="ts" src="./Portfolio.ts"></script>
