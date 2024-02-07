<template>
  <section class="skills">
    <h1
      class="text-4xl text-slate-600 border-b border-slate-300 pb-4 w-1/3 text-center"
    >
      {{ t('l_skills') }}
    </h1>
    <ul class="skills-grid">
      <li
        v-for="(skill, i) in skills"
        :key="i"
        class="skill-item"
      >
        <div
          class="flex items-center space-x-4 pb-2 mb-2 border-b border-slate-200 w-full"
        >
          <img
            :src="getSkillImg(skill.name)"
            :alt="skill.name"
          />
          <h1 class="text-2xl text-slate-600 font-semibold tracking-tighter">
            {{ t(skill.label) }}
          </h1>
        </div>
        <div class="flex items-center flex-col space-y-2 w-full">
          <ul class="flex justify-center items-center w-full h-6">
            <li
              v-for="j in skill.level"
              :key="j"
              class="w-1/5 h-1 bg-indigo-600"
            ></li>
            <li class="w-3 h-3 border-2 border-indigo-600 rounded-full"></li>
            <li
              v-for="k in emptySkillCells(skill.level)"
              :key="k"
              :class="`w-1/5 h-1 bg-slate-300 ${
                skill.level === 1 ? 'no-skill-cell' : ''
              }`"
            ></li>
          </ul>
          <vue-markdown
            class="markdown-skill-render"
            :source="t(skill.description)"
          />
        </div>
      </li>
    </ul>
    <div class="background-container">
      <div class="right"></div>
      <div class="left"></div>
    </div>
  </section>
</template>
<script lang="ts" src="./Skills.ts"></script>
<style scoped>
@import url('./Skills.css');
</style>
