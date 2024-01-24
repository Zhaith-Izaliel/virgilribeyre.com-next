<template>
  <section class="vr__navbar-main">
    <section class="vr__navbar-menu-btn">
      <Menu></Menu>
    </section>
    <section v-if="items.length > 0" class="vr__navbar-items">
      <router-link
        class="vr__navbar-item"
        :to="item.route"
        v-for="item in items"
      >
        {{ $t(item.label) }}
      </router-link>
    </section>
    <section class="hidden md:block">
      <NavBarSocials :socials="socials"></NavBarSocials>
    </section>
  </section>
</template>

<script lang="ts" src="./NavBar.ts"></script>

<style scoped>
@import "./NavBar.css";
</style>

