<template>
  <div class="nav-wrapper">
    <nav class="nav-container">
      <section class="nav-menu-btn">
        <IconoirProvider>
          <Menu @click="toggleMenu" />
        </IconoirProvider>
      </section>
      <section class="nav-logo">
        <router-link to="/">
          <img
            src="@/assets/SilveredIvy_logoOnly.svg"
            alt="logo"
            width="48rem"
          />
        </router-link>
      </section>
      <section
        v-if="items.length > 0"
        class="nav-items-container"
      >
        <router-link
          v-for="(item, i) in items"
          :key="i"
          :to="item.route"
        >
          <AnimatedButton
            style-type="info"
            class="text-default px-8 py-4"
          >
            {{ t(item.label) }}
          </AnimatedButton>
        </router-link>
      </section>
      <section class="flex justify-center items-center">
        <NavBarSocials :socials="socials" />
        <div class="md:border-l border-l-default md:pl-2 md:ml-2">
          <LangMenu></LangMenu>
        </div>
      </section>
    </nav>
  </div>
  <div
    :class="[
      'mobile-nav-menu animate__animated animate__faster',
      {
        hidden: state.menuState === 'initial',
        animate__slideInDown: state.menuState === 'open',
        animate__slideOutUp: state.menuState === 'closed',
      },
    ]"
  >
    <section class="mobile-nav-container">
      <div class="mobile-nav-menu-close">
        <IconoirProvider
          :icon-props="{
            width: '2em',
            height: '2em',
          }"
        >
          <Xmark @click="toggleMenu" />
        </IconoirProvider>
      </div>
      <nav class="mobile-nav-items-container">
        <router-link
          v-for="(item, i) in items"
          :key="i"
          :to="item.route"
          class="nav-item"
        >
          {{ t(item.label) }}
        </router-link>
      </nav>
      <NavBarSocials
        class="nav-socials"
        icon-width="2em"
        icon-height="2em"
        :socials="socials"
        :is-bar="false"
      />
    </section>
  </div>
</template>

<script lang="ts" src="./NavBar.ts"></script>

<style scoped>
@import './NavBar.css';
</style>
