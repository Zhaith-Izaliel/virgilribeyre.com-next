<template>
  <section
    class="w-11/12 lg:w-2/3 xl:w-1/2 flex flex-col items-center space-y-12"
  >
    <TimelineCard
      v-for="event in sortedEvents"
      :key="event.name"
      :event="event"
    ></TimelineCard>
  </section>
</template>
<script lang="ts" src="./Timeline.ts"></script>
