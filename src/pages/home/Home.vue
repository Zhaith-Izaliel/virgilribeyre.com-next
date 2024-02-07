<template>
  <div class="flex flex-col h-screen w-screen -z-10">
    <NavBar
      :items="state.items"
      :socials="state.socials"
    />
    <Landing id="#top"></Landing>
  </div>
  <div class="pt-6 z-10 bg-slate-100">
    <AboutMe id="#about-me"></AboutMe>
  </div>
  <Footer></Footer>
</template>
<script lang="ts" src="./Home.ts"></script>
