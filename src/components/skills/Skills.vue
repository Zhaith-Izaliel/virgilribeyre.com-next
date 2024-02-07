<template>
  <section class="skills">
    <div class="flex space-x-4 w-2/3 xl:w-1/3 justify-center items-center">
      <h1
        class="flex space-x-2 items-center justify-center text-4xl text-slate-600 w-1/3 text-center"
      >
        <IconoirProvider>
          <Box3dCenter />
        </IconoirProvider>
        <span>
          {{ t('l_skills') }}
        </span>
      </h1>
      <form class="w-2/3">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >{{ t('l_search') }}</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <IconoirProvider>
              <Search></Search>
            </IconoirProvider>
          </div>
          <input
            id="default-search"
            v-model="state.search.value"
            type="search"
            class="block w-full ml-2 px-6 py-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary"
            :placeholder="t('l_search_placeholder')"
          />
        </div>
      </form>
    </div>
    <h2
      class="text-slate-500 flex space-x-1 justify-end my-2 text-right w-2/3 xl:w-1/3"
    >
      <span>{{ t('l_icons8_credit') }}</span>
      <a
        class="underline cursor-pointer hover:text-primary transition-all duration-300 ease-in-out"
        href="https://icons8.com"
        >{{ t('l_icons8') }}</a
      >
    </h2>
    <ul class="skills-grid">
      <li
        v-for="(skill, i) in shownSkills"
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
            <li
              class="min-w-3 min-h-3 border-2 border-indigo-600 rounded-full"
            ></li>
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
    <button
      v-show="state.search.value == ''"
      class="flex space-x-2 items-center justify-center rounded-full border-slate-200 bg-slate-100 border-2 px-3 py-1 transition-all duration-500 hover:border-primary"
      @click.prevent="showMore"
    >
      <template v-if="!state.showMore.value">
        <IconoirProvider>
          <NavArrowDown />
        </IconoirProvider>
        {{ t('l_show_more') }}
      </template>
      <template v-else>
        <IconoirProvider>
          <NavArrowUp />
        </IconoirProvider>
        {{ t('l_show_less') }}
      </template>
    </button>
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
