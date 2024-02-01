<template>
  <div class="flex flex-col h-screen w-screen">
    <NavBar
      :items="state.items"
      :socials="state.socials"
    />
    <Landing id="#top"></Landing>
  </div>
</template>
<script lang="ts" src="./Home.ts"></script>
