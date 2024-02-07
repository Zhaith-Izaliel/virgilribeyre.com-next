<template>
  <div class="flex flex-col space-y-8 items-center justify-center">
    <div
      class="flex items-center justify-center mx-auto w-full lg:w-2/3 xl:w-1/2"
    >
      <vue-markdown
        class="m-4 markdown-render"
        :source="t('markdown.l_about_me')"
      />
    </div>
    <Skills :skills="state.skills"></Skills>
  </div>
</template>
<script lang="ts" src="./AboutMe.ts"></script>
<style>
@import url('./AboutMe.css');
</style>
