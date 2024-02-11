<template>
  <router-link
    :class="`transition-all duration-500 ease-in-out animate__faster ${
      scrolled ? 'animate__animated animate__fadeIn' : 'hidden'
    }`"
    to="/#top"
  >
    <aside
      class="flex items-center justify-center fixed bottom-0 right-0 rounded-full bg-background text-default hover:text-primary transition-all h-12 w-12 m-6 mb-16 duration-300 ease-in-out shadow-indigo-400/50 shadow"
    >
      <IconoirProvider>
        <NavArrowUp></NavArrowUp>
      </IconoirProvider>
    </aside>
  </router-link>
</template>
<script lang="ts" src="./BackToTop.ts"></script>
