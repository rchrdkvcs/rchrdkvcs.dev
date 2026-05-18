<script setup lang="ts">
const config = useRuntimeConfig();
const directusUrl = config.public.directusUrl as string;

const { data: experiences } = await useAsyncData("experiences", () =>
  $fetch<any[]>("/api/experiences"),
);

const formatDate = (start: string, end: string | null) => {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${fmt(start)} - ${end ? fmt(end) : "Present"}`;
};

const timelineItems = computed(() =>
  (experiences.value ?? []).map((e) => ({
    title: `${e.post} @ ${e.company}`,
    date: formatDate(e.start_date, e.end_date),
    description: e.content,
    avatar: { src: `${directusUrl}/assets/${e.company_logo}` },
  })),
);
</script>

<template>
  <UContainer>
    <UPageSection title="experiences" description="Timeline of my experiences.">
      <UTimeline
        :ui="{
          indicator: 'bg-transparent rounded-none ring-1 ring-primary p-0.5',
          separator: 'bg-primary',
        }"
        :items="timelineItems ?? []"
        class="w-full"
        size="xl"
        color="neutral"
      >
        <template #description="{ item }">
          <MDC v-if="item.description" :value="item.description" />
        </template>
      </UTimeline>
    </UPageSection>
  </UContainer>
</template>
