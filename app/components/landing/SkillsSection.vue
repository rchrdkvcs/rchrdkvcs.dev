<script setup lang="ts">
const skills = useSkills();
</script>

<template>
  <UPageSection
    title="skills"
    description="Here are some of the technologies I've been working with recently."
  >
    <UPageGrid>
      <UPageCard
        v-for="(card, index) in skills"
        :key="index"
        v-bind="card"
        :ui="{ root: 'ring-primary' }"
      />
    </UPageGrid>
  </UPageSection>
</template>

<style scoped></style>
