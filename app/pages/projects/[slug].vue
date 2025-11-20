<script setup lang="ts">
const projects = useProjects();
const navigation = ref(
  projects.map((project) => ({
    label: project.project,
    to: `/projects/${project.project}`,
  })),
);
const route = useRoute();
const selectedProject = computed(() =>
  projects.find((project) => project.project === route.params.slug),
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
      />

      <UPageBody>
        <div>Hello</div>
      </UPageBody>
    </UPage>

    <UEmpty
      v-else
      title="No projects found"
      description="It looks like you the project you are looking for doesn't exist."
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

<style scoped></style>
