<template>
  <footer class="flex items-center justify-between p-6 text-slate-600">
    <p>{{ t('l_copyright', { currentYear }) }}</p>
    <NavBarSocials
      class="text-slate-500"
      :socials="socials"
      :is-bar="false"
    />
  </footer>
</template>
<script lang="ts" src="./Footer.ts"></script>
