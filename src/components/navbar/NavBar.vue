<template>
  <nav class="nav-container">
    <section class="nav-menu-btn">
      <IconoirProvider>
        <Menu @click="toggleMenu" />
      </IconoirProvider>
    </section>
    <section
      v-if="items.length > 0"
      class="nav-items-container"
    >
      <router-link
        v-for="(item, i) in items"
        :key="i"
        class="nav-item"
        :to="item.route"
      >
        {{ $t(item.label) }}
      </router-link>
    </section>
    <NavBarSocials :socials="socials" />
  </nav>
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
            width: '2rem',
            height: '2rem',
          }"
        >
          <Xmark @click="toggleMenu" />
        </IconoirProvider>
      </div>
      <nav class="mobile-nav-items-container">
        <router-link
          v-for="(item, i) in items"
          :key="i"
          class="nav-item"
          :to="item.route"
        >
          {{ $t(item.label) }}
        </router-link>
      </nav>
      <NavBarSocials
        :socials="socials"
        :is-bar="false"
      />
    </section>
  </div>
</template>

<script lang="ts" src="./NavBar.ts"></script>

<style scoped>
@import "./NavBar.css";
</style>
