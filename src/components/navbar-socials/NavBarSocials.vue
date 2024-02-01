<template>
  <div>
    <IconoirProvider
      :icon-props="{
        width: iconWidth,
        height: iconHeight,
      }"
    >
      <section
        v-if="socials.length > 0"
        class="flex justify-center items-center"
      >
        <a
          v-for="(social, i) in socials"
          :key="i"
          :href="social.url"
          :class="{
            'hidden md:inline': i !== 0 && isBar,
          }"
          :target="social.name === 'mail' ? '_self' : '_blank'"
        >
          <AnimatedButton
            v-if="isBar"
            style-type="info"
            class="p-4 !text-default"
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
          </AnimatedButton>
          <div
            v-else
            class="px-2"
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
          </div>
        </a>
      </section>
    </IconoirProvider>
  </div>
</template>
<script lang="ts" src="./NavBarSocials.ts"></script>
