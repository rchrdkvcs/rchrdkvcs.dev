<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { data: content } = await useAsyncData(`project-${slug}`, () =>
  queryCollection("projects").path(`/projects/${slug}`).first(),
);

const { data: navigation } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("projects").order("date", "DESC");
});
</script>

<template>
  <UContainer>
    <UPage v-if="content">
      <template #left>
        <UPageAside>
          <UContentNavigation :navigation="navigation" highlight />
        </UPageAside>
      </template>

      <UPageHeader
        :title="content.title"
        :description="content.description"
        :ui="{
          root: 'border-primary',
        }"
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
            v-if="content.repo"
            icon="mdi:github"
            label="Source Code"
            variant="outline"
            target="_blank"
            :to="content.repo"
          />
          <UButton
            v-if="content.link"
            icon="lucide:external-link"
            label="Live Demo"
            variant="outline"
            target="_blank"
            :to="content.link"
          />
        </div>
      </UPageHeader>

      <UPageBody>
        <ContentRenderer
          v-if="content"
          :value="content"
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
