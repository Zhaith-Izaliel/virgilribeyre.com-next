<template>
  <section class="vr__navbar-socials">
    <a :href="social.url" v-for="social in socials" target="_blank" class="vr__navbar-social">
      <template v-if="social.name === 'linkedin'">
        <Linkedin></Linkedin>
      </template>
      <template v-else-if="social.name === 'mail'">
        <Mail></Mail>
      </template>
      <template v-else-if="social.name === 'gitlab'">
        <GitlabFull></GitlabFull>
      </template>
      <template v-else-if="social.name === 'github'">
        <Github></Github>
      </template>
      <template v-else-if="social.name === 'malt'">
        <Suitcase></Suitcase>
      </template>
    </a>
  </section>
</template>
<script lang="ts" src="./NavBarSocials.ts">
</script>
<style scoped>
@import './NavBarSocials.css';
</style>

