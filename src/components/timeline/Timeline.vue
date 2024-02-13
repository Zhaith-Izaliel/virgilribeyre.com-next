<template>
  <section class="w-2/3 flex flex-col items-center space-y-12">
    <TimelineCard
      v-for="event in sortedEvents"
      :key="event.name"
      :event="event"
    ></TimelineCard>
  </section>
</template>
<script lang="ts" src="./Timeline.ts"></script>
