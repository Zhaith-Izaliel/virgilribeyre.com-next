<template>
  <footer
    class="flex flex-col md:flex-row space-y-4 md:space-y-0 border-t border-t-slate-300 w-11/12 mx-auto items-center justify-evenly p-6 text-slate-600"
  >
    <div class="inline-block">{{ t('l_copyright', { currentYear }) }}</div>
    <div class="flex space-x-1 items-center">
      <p xmlns:cc="http://creativecommons.org/ns#">
        {{ t('l_license') }}
        <a
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          style="display: inline-block"
          >CC BY-NC-ND 4.0</a
        >
      </p>
      <div class="flex items-center">
        <img
          style="height: 22px !important"
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
        /><img
          style="height: 22px !important"
          src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
        /><img
          style="height: 22px !important"
          src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
        /><img
          style="height: 22px !important"
          src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"
        />
      </div>
    </div>
    <NavBarSocials
      class="text-slate-500"
      :socials="socials"
      :is-bar="false"
    />
  </footer>
</template>
<script lang="ts" src="./Footer.ts"></script>
