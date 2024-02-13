<template>
  <div class="skill-card">
    <div class="skill-card-header">
      <img
        :src="getSkillImg(skill.name)"
        :alt="skill.name"
        class="h-16 xl:h-20"
      />
      <h1 class="skill-title">
        {{ t(skill.label) }}
      </h1>
    </div>
    <div class="flex items-center flex-col space-y-2 w-full">
      <ul class="flex justify-center items-center w-full h-6">
        <li
          v-for="j in skill.level"
          :key="j"
          class="w-1/6 h-1 bg-indigo-600"
        ></li>
        <li
          class="min-w-3 min-h-3 border-2 border-indigo-600 rounded-full"
        ></li>
        <li
          v-for="k in emptySkillCells(skill.level)"
          :key="k"
          :class="`w-1/6 h-1 bg-slate-300 ${
            skill.level === 1 ? 'no-skill-cell' : ''
          }`"
        ></li>
      </ul>
      <vue-markdown
        class="markdown-skill-render"
        :source="t(skill.description)"
      />
    </div>
  </div>
</template>
<script lang="ts" src="./SkillCard.ts"></script>
<style scoped>
@import url('./SkillCard.css');
</style>
