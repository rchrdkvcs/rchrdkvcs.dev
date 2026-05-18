<script setup lang="ts">
const { data: skills } = await useAsyncData("skills", () =>
  $fetch<any[]>("/api/skills"),
);

const mappedSkills = computed(() =>
  (skills.value ?? []).map((s) => ({
    title: s.label,
    description: s.description,
    icon: s.icon,
    to: s.link,
  })),
);
</script>

<template>
  <UPageSection
    title="skills"
    description="Here are some of the technologies I've been working with recently."
  >
    <UPageGrid>
      <UPageCard
        v-for="(card, index) in mappedSkills"
        :key="index"
        v-bind="card"
        :ui="{ root: 'ring-primary' }"
      />
    </UPageGrid>
  </UPageSection>
</template>
