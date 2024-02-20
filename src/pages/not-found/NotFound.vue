<template>
  <main
    class="grid min-h-screen min-w-screen place-items-center px-6 py-24 sm:py-32 lg:px-8"
  >
    <div class="text-center">
      <p class="text-5xl font-semibold text-primary">404</p>
      <h1
        class="mt-4 text-3xl lg:text-7xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        {{ t('l_page_not_found') }}
      </h1>
      <p class="mt-6 text-base lg:text-2xl leading-7 text-gray-600">
        {{ t('l_page_not_found_description') }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <router-link
          to="/"
          class="text-sm lg:text-xl rounded-md bg-primary px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-primary/75 transition-all duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >{{ t('l_back_home') }}</router-link
        >
        <a
          :href="mail"
          class="text-sm lg:text-xl font-semibold text-background cursor-pointer transition-all duration-300 ease-in-out hover:text-info"
          >{{ t('l_contact_me') }} <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </div>
  </main>
</template>
<script lang="ts" src="./NotFound.ts"></script>
