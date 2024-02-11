<template>
  <div class="flex flex-col space-y-8 items-center justify-center">
    <div
      class="flex flex-col items-center justify-center mx-auto w-full lg:w-2/3 xl:w-1/2"
    >
      <vue-markdown
        class="m-4 markdown-render"
        :source="t('markdown.l_about_me')"
      />
      <div
        class="w-full flex items-center justify-center lg:justify-end text-lg"
      >
        <a
          :href="state.mail.url"
          class="xl:min-w-[25%] lg:min-w-[33%] min-w-[66%]"
        >
          <AnimatedButton
            type="cta-effect"
            style-type="info"
            class="min-w-full"
          >
            {{ t('l_work_with_me') }}
          </AnimatedButton>
        </a>
      </div>
    </div>
    <Skills :skills="state.skills"></Skills>
  </div>
</template>
<script lang="ts" src="./AboutMe.ts"></script>
<style scoped>
@import url('./AboutMe.css');
</style>
