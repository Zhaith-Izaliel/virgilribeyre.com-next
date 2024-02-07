<template>
  <CardGrid
    class="w-full"
    :cards="searchResults"
    :searched="state.search.value != ''"
  >
    <template #header>
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
        <SearchBar
          v-model="state.search.value"
          class="w-2/3"
        ></SearchBar>
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
    </template>
    <template #default="{ item }">
      <Card class="w-full">
        <div
          class="flex items-center space-x-4 pb-2 mb-2 border-b border-slate-200 w-full"
        >
          <img
            :src="getSkillImg(item.name)"
            :alt="item.name"
          />
          <h1 class="text-2xl text-slate-600 font-semibold tracking-tighter">
            {{ t(item.label) }}
          </h1>
        </div>
        <div class="flex items-center flex-col space-y-2 w-full">
          <ul class="flex justify-center items-center w-full h-6">
            <li
              v-for="j in item.level"
              :key="j"
              class="w-1/5 h-1 bg-indigo-600"
            ></li>
            <li
              class="min-w-3 min-h-3 border-2 border-indigo-600 rounded-full"
            ></li>
            <li
              v-for="k in emptySkillCells(item.level)"
              :key="k"
              :class="`w-1/5 h-1 bg-slate-300 ${
                item.level === 1 ? 'no-skill-cell' : ''
              }`"
            ></li>
          </ul>
          <vue-markdown
            class="markdown-skill-render"
            :source="t(item.description)"
          />
        </div>
      </Card>
    </template>
  </CardGrid>
</template>
<script lang="ts" src="./Skills.ts"></script>
