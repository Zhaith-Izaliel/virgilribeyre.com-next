<template>
  <section class="cards-grid-container">
    <slot name="header"></slot>
    <section :class="`cards-grid ${gridClasses}`">
      <slot
        v-for="(card, i) in shownCards"
        :key="i"
        :item="card"
        :index="i"
      >
      </slot>
    </section>
    <button
      v-show="!searched && cards.length > max"
      class="show-more"
      @click.prevent="showMore"
    >
      <template v-if="!state.showMore.value">
        <slot name="show-more">
          <IconoirProvider>
            <NavArrowDown />
          </IconoirProvider>
          {{ t('l_show_more') }}
        </slot>
      </template>
      <template v-else>
        <slot name="show-less">
          <IconoirProvider>
            <NavArrowUp />
            {{ t('l_show_less') }}
          </IconoirProvider>
        </slot>
      </template>
    </button>
    <div class="background-container">
      <div class="right"></div>
      <div class="left"></div>
    </div>
  </section>
</template>
<script lang="ts" src="./CardGrid.ts"></script>
<style scoped>
@import url('./CardGrid.css');
</style>
