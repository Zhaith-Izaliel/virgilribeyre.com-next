<template>
  <section class="vr__navbar-main">
    <section v-if="itemsLeft.length > 0" class="vr__navbar-left">
      <router-link
        class="vr__navbar-item"
        :to="item.route"
        v-for="item in itemsLeft"
      >
        {{ $t(item.label) }}
      </router-link>
    </section>
    <section v-if="itemsCenter.length > 0" class="vr__navbar-center">
      <router-link
        class="vr__navbar-item"
        :to="item.route"
        v-for="item in itemsCenter"
      >
        {{ $t(item.label) }}
      </router-link>
    </section>
    <section v-if="itemsRight.length > 0" class="vr__navbar-right">
      <router-link
        class="vr__navbar-item"
        :to="item.route"
        v-for="item in itemsRight"
      >
        {{ $t(item.label) }}
      </router-link>
    </section>
  </section>
</template>

<script lang="ts" src="./NavBar.ts"></script>

<style scoped>
@import "./NavBar.css";
</style>
