<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { data: projects } = await useAsyncData("projects-nav", () =>
  $fetch<any[]>("/api/projects"),
);

const content = computed(() =>
  (projects.value ?? []).find((p) => p.slug === slug),
);

const navLinks = computed(() =>
  (projects.value ?? []).map((p) => ({
    label: p.name,
    to: `/projects/${p.slug}`,
  })),
);
</script>

<template>
  <UContainer>
    <UPage v-if="content">
      <template #left>
        <UPageAside>
          <UNavigationMenu
            :items="navLinks"
            orientation="vertical"
            highlight
          />
        </UPageAside>
      </template>

      <UPageHeader
        :title="content.name"
        :description="content.description"
        :ui="{ root: 'border-primary' }"
      >
        <div class="flex flex-wrap gap-2 mt-4">
          <UBadge
            v-for="(badge, index) in content.tags"
            :key="index"
            :label="badge"
          />
        </div>
        <div class="flex gap-2 mt-4">
          <UButton
            v-if="content.demo_url"
            icon="lucide:external-link"
            label="Live Demo"
            variant="outline"
            target="_blank"
            :to="content.demo_url"
          />
          <UButton
            v-if="content.gh_url"
            icon="mdi:github"
            label="Source Code"
            variant="outline"
            target="_blank"
            :to="content.gh_url"
          />
        </div>
      </UPageHeader>

      <UPageBody>
        <MDC
          v-if="content.content"
          :value="content.content"
          class="prose prose-invert max-w-none"
        />
        <div v-else class="text-muted py-8">
          <p>Detailed project documentation coming soon.</p>
        </div>
      </UPageBody>
    </UPage>

    <UEmpty
      v-else
      title="No projects found"
      description="It looks like the project you are looking for doesn't exist."
      variant="naked"
      :actions="[{ icon: 'lucide:arrow-left', label: 'Go back', to: '/projects' }]"
      class="mt-8"
    />
  </UContainer>
</template>
