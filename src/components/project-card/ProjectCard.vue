<template>
  <div
    class="project-card"
    :style="`background-image: url('${project.img.toString()}')`"
  >
    <div class="project-info-container">
      <h1 class="project-title">
        {{ t(project.label) }}
      </h1>
      <vue-markdown
        class="markdown-project-render"
        :source="t(project.description)"
      ></vue-markdown>
      <div
        v-show="project.url"
        class="learn-more-container"
      >
        <a
          v-show="project.url"
          :href="project.url ? project.url.toString() : ''"
          target="_blank"
          class="learn-more"
        >
          <span>{{ t('l_learn_more') }}</span>
          <IconoirProvider
            :icon-props="{
              'stroke-width': 2,
              width: '1em',
              height: '1em',
            }"
          >
            <ArrowRight></ArrowRight>
          </IconoirProvider>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./ProjectCard.ts"></script>
<style scoped>
@import url('./ProjectCard.css');
</style>
