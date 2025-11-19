<script setup lang="ts">
import type { TimelineItem } from "#ui/components/Timeline.vue";

const items = ref<TimelineItem[]>([
  {
    date: "2025 - Present",
    title: "Flow and Data Developer @ Le Roy Logistique",
    description:
      "Developing and maintaining internal tools to optimize logistics and data flow processes.",
  },
  {
    date: "2024 - Present",
    title: "Responsible of Digital Infrastructure @ Salty Academy",
    description:
      "Managing and building various type of application for the academy, including website, learning platform and internal tools.",
  },
]);
</script>

<template>
  <UPageSection title="/experiences" description="Timeline of my experiences.">
    <UTimeline
      :ui="{
        indicator: 'bg-transparent rounded-none ring-1 ring-primary',
        separator: 'bg-primary',
      }"
      :items="items"
      class="w-full"
      size="xl"
      color="neutral"
    />
  </UPageSection>
</template>
