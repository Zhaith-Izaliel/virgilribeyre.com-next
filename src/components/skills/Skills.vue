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
          placeholder="l_search_skills_placeholder"
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
      <SkillCard :skill="item"></SkillCard>
    </template>
  </CardGrid>
</template>
<script lang="ts" src="./Skills.ts"></script>
