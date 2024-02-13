<template>
  <div class="flex flex-col space-y-8 items-center justify-center">
    <div class="flex flex-col mx-auto w-full lg:w-2/3 xl:w-1/2">
      <vue-markdown
        class="m-4 markdown-render"
        :source="t('markdown.l_experiences')"
      />
    </div>
    <Timeline :events="state.events"></Timeline>
  </div>
</template>
<script lang="ts" src="./Experiences.ts"></script>
