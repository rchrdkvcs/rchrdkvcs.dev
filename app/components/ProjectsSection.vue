<script setup lang="ts">
const projects = useProjects();

defineProps<{
  showAll?: boolean;
}>();
</script>

<template>
  <UPageSection title="projects" description="Here are some of my projects.">
    <UPageColumns>
      <UPageCard
        v-for="(card, index) in showAll ? projects : projects.slice(0, 5)"
        :key="index"
        :ui="{
          root: 'ring-primary',
          header: 'flex justify-between items-center w-full mb-2',
          footer: 'flex flex-wrap gap-2',
        }"
        :description="card.description"
      >
        <template #header>
          <h3 class="text-xl font-semibold">{{ card.project }}</h3>
          <div>
            <UButton
              icon="mdi:github"
              variant="ghost"
              size="lg"
              target="_blank"
              :to="card.repo"
            />
            <UButton
              icon="lucide:external-link"
              variant="ghost"
              size="lg"
              target="_blank"
              :to="card.link"
            />
          </div>
        </template>

        <template #footer>
          <UBadge
            v-for="(badge, index) in card.badge"
            :key="index"
            v-bind="badge"
          />
        </template>
      </UPageCard>
    </UPageColumns>

    <UButton
      v-if="!showAll && projects.length > 5"
      icon="lucide:arrow-right"
      label="view all projects"
      to="/projects"
      variant="outline"
      class="w-fit mx-auto"
    />
  </UPageSection>
</template>
