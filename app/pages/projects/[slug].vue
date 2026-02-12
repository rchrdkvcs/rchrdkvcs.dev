<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const projects = useProjects();
const selectedProject = computed(() =>
  projects.find((project) => project.slug === slug),
);

const navigation = ref(
  projects.map((project) => ({
    label: project.project,
    to: `/projects/${project.slug}`,
  })),
);

const { data: content } = await useAsyncData(`project-${slug}`, () =>
  queryCollection("projects").path(`/projects/${slug}`).first(),
);
</script>

<template>
  <UContainer>
    <UPage v-if="selectedProject">
      <template #left>
        <UPageAside>
          <UNavigationMenu orientation="vertical" :items="navigation" />
        </UPageAside>
      </template>

      <UPageHeader
        :title="selectedProject?.project"
        :description="selectedProject?.description"
        :ui="{
          root: 'border-primary',
        }"
      >
        <div class="flex flex-wrap gap-2 mt-4">
          <UBadge
            v-for="(badge, index) in selectedProject?.badge"
            :key="index"
            v-bind="badge"
          />
        </div>
        <div class="flex gap-2 mt-4">
          <UButton
            v-if="selectedProject?.repo"
            icon="mdi:github"
            label="Source Code"
            variant="outline"
            target="_blank"
            :to="selectedProject?.repo"
          />
          <UButton
            v-if="selectedProject?.link"
            icon="lucide:external-link"
            label="Live Demo"
            variant="outline"
            target="_blank"
            :to="selectedProject?.link"
          />
        </div>
      </UPageHeader>

      <UPageBody>
        <ContentRenderer v-if="content" :value="content" class="prose prose-invert max-w-none" />
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
      :actions="[
        {
          icon: 'lucide:arrow-left',
          label: 'Go back',
          to: '/projects',
        },
      ]"
      class="mt-8"
    />
  </UContainer>
</template>

<style scoped>
.prose {
  --tw-prose-body: var(--ui-text);
  --tw-prose-headings: var(--ui-text-highlighted);
  --tw-prose-links: var(--ui-primary);
  --tw-prose-bold: var(--ui-text-highlighted);
  --tw-prose-code: var(--ui-text-highlighted);
  --tw-prose-pre-bg: var(--ui-bg-elevated);
  --tw-prose-pre-code: var(--ui-text);
  --tw-prose-th-borders: var(--ui-primary);
  --tw-prose-td-borders: var(--ui-bg-accented);
}

.prose :deep(h2) {
  border-bottom: 1px solid var(--ui-primary);
  padding-bottom: 0.5rem;
  margin-top: 2rem;
}

.prose :deep(table) {
  width: 100%;
}

.prose :deep(th) {
  text-align: left;
  font-weight: 600;
}

.prose :deep(pre) {
  background: var(--ui-bg-elevated);
  border: 1px solid var(--ui-primary);
  padding: 1rem;
  overflow-x: auto;
}

.prose :deep(code) {
  font-family: var(--font-mono);
}

.prose :deep(a) {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.prose :deep(blockquote) {
  border-left: 3px solid var(--ui-primary);
  padding-left: 1rem;
  font-style: italic;
}
</style>
