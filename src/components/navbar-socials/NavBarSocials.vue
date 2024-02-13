<template>
  <section
    v-if="socials.length > 0"
    class="flex justify-center items-center"
  >
    <a
      v-for="(social, i) in socials"
      :key="i"
      :href="social.url.toString()"
      :class="{
        'hidden md:inline': isBar,
      }"
      :target="social.name === 'mail' ? '_self' : '_blank'"
    >
      <span class="sr-only">{{ t(`sr.l_open_${social.name}`) }}</span>
      <IconoirProvider
        :icon-props="{
          width: iconWidth,
          height: iconHeight,
        }"
      >
        <AnimatedButton
          v-if="isBar"
          style-type="info"
          class="p-4 text-default"
        >
          <Linkedin v-if="social.name === 'linkedin'" />
          <Mail v-else-if="social.name === 'mail'" />
          <GitlabFull v-else-if="social.name === 'gitlab'" />
          <Github v-else-if="social.name === 'github'" />
          <Suitcase v-else-if="social.name === 'malt'" />
          <Link v-else />
        </AnimatedButton>

        <div
          v-else
          class="px-2 hover:text-primary transition-all duration-300 ease-in-out"
        >
          <Linkedin v-if="social.name === 'linkedin'" />
          <Mail v-else-if="social.name === 'mail'" />
          <GitlabFull v-else-if="social.name === 'gitlab'" />
          <Github v-else-if="social.name === 'github'" />
          <Suitcase v-else-if="social.name === 'malt'" />
          <Link v-else />
        </div>
      </IconoirProvider>
    </a>
  </section>
</template>
<script lang="ts" src="./NavBarSocials.ts"></script>
