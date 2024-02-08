<template>
  <CardGrid
    :cards="projects"
    class="w-full"
  >
    <template #header>
      <div class="flex space-x-4 w-2/3 xl:w-1/3 justify-center items-center">
        <h1
          class="flex space-x-2 items-center justify-center text-4xl text-slate-600 w-full text-center"
        >
          <IconoirProvider>
            <BookmarkBook />
          </IconoirProvider>
          <span>
            {{ t('l_projects') }}
          </span>
        </h1>
      </div>
    </template>
    <template #default="{ item }">
      <ProjectCard :project="item"></ProjectCard>
    </template>
  </CardGrid>
</template>
<script lang="ts" src="./Projects.ts"></script>
