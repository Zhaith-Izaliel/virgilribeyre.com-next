<template>
  <IconoirProvider>
    <section
      v-if="socials.length > 0"
      class="nav-socials-container"
    >
      <a
        v-for="social,i in socials"
        :key="i"
        :href="social.url"
        :class="{
          'hidden md:inline': i !== 0 && isBar,
        }"
        :target="social.name === 'mail' ? '_self' : '_blank'"
        class="nav-social"
      >
        <div v-if="social.name === 'linkedin'">
          <Linkedin />
        </div>
        <div v-else-if="social.name === 'mail'">
          <Mail />
        </div>
        <div v-else-if="social.name === 'gitlab'">
          <GitlabFull />
        </div>
        <div v-else-if="social.name === 'github'">
          <Github />
        </div>
        <div v-else-if="social.name === 'malt'">
          <Suitcase />
        </div>
      </a>
    </section>
  </IconoirProvider>
</template>
<script lang="ts" src="./NavBarSocials.ts">
</script>
<style scoped>
@import "./NavBarSocials.css";
</style>
