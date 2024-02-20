<template>
  <CardGrid
    class="w-full"
    :cards="searchResults"
    :searched="search != ''"
  >
    <template #header>
      <div class="flex flex-col w-11/12 xl:w-1/2 space-y-2">
        <div class="flex justify-center items-center">
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
            v-model="search"
            placeholder="l_search_skills_placeholder"
            class="w-2/3"
          ></SearchBar>
        </div>
        <div class="flex flex-col items-end w-full">
          <SkillsSelectSort v-model="selectedSortOption"></SkillsSelectSort>
          <h2
            class="text-slate-500 flex flex-col space-y-1 my-2 mr-2 text-right w-11/12 xl:w-1/3"
          >
            <span class="flex space-x-1 justify-end">
              <span>{{ t('l_icons8_credit') }}</span>
              <a
                class="underline cursor-pointer hover:text-primary transition-all duration-300 ease-in-out"
                href="https://icons8.com"
                >{{ t('l_icons8') }}</a
              >
            </span>
            <span class="flex space-x-1 justify-end">
              <span>{{ t('l_ziglogo_credit') }}</span>
              <a
                class="underline cursor-pointer hover:text-primary transition-all duration-300 ease-in-out"
                href="https://github.com/ziglang/logo"
                >{{ t('l_ziglang') }}</a
              >
            </span>
          </h2>
        </div>
      </div>
    </template>
    <template #default="{ item }">
      <SkillCard :skill="item"></SkillCard>
    </template>
  </CardGrid>
</template>
<script lang="ts" src="./Skills.ts"></script>
