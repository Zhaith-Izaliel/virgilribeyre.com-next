<template>
  <div class="flex flex-col h-screen w-screen -z-10">
    <NavBar
      :items="state.items"
      :socials="state.socials"
    />
    <Landing id="#top"></Landing>
  </div>
  <div class="w-full space-y-48 py-24 z-10 bg-slate-100">
    <animate-entry>
      <about-me id="about-me"></about-me>
    </animate-entry>
    <animate-entry>
      <portfolio id="portfolio"></portfolio>
    </animate-entry>
    <animate-entry>
      <experiences id="timeline"></experiences>
    </animate-entry>
  </div>
  <footer-vue></footer-vue>
  <back-to-top></back-to-top>
</template>
<script lang="ts" src="./Home.ts"></script>
