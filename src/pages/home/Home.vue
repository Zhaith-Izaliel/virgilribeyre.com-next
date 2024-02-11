<template>
  <div class="flex flex-col h-screen w-screen -z-10">
    <NavBar
      :items="state.items"
      :socials="state.socials"
    />
    <Landing id="#top"></Landing>
  </div>
  <div class="w-full pt-6 z-10 bg-slate-100">
    <AboutMe id="about-me"></AboutMe>
    <Portfolio id="portfolio"></Portfolio>
    <Experiences id="timeline"></Experiences>
  </div>
  <FooterVue></FooterVue>
</template>
<script lang="ts" src="./Home.ts"></script>
