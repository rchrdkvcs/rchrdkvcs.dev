<script setup lang="ts">
const experiences = useExperiences();
</script>

<template>
  <UPageSection title="experiences" description="Timeline of my experiences.">
    <UTimeline
      :ui="{
        indicator: 'bg-transparent rounded-none ring-1 ring-primary p-0.5',
        separator: 'bg-primary',
      }"
      :items="experiences"
      class="w-full"
      size="xl"
      color="neutral"
    />
  </UPageSection>
</template>
