<script setup lang="ts">
defineProps<{
  showAll?: boolean;
}>();

const { data: projects } = await useAsyncData(`projects`, () =>
  queryCollection("projects").order("date", "DESC").all(),
);
</script>

<template>
  <UPageSection title="projects" description="Here are some of my projects.">
    <UPageColumns>
      <UPageCard
        v-for="(card, index) in showAll ? projects : projects?.slice(0, 5)"
        :key="index"
        :to="card.stem"
        :ui="{
          root: 'ring-primary transition-all',
          header: 'flex justify-between items-center w-full mb-2',
          footer: 'flex flex-wrap gap-2',
        }"
        :description="card.description"
      >
        <template #header>
          <h3 class="text-xl font-semibold">{{ card.title }}</h3>
          <div>
            <UButton
              v-if="card.repo"
              icon="mdi:github"
              variant="ghost"
              size="lg"
              target="_blank"
              :to="card.repo"
              @click.stop
            />
            <UButton
              v-if="card.link"
              icon="lucide:external-link"
              variant="ghost"
              size="lg"
              target="_blank"
              :to="card.link"
              @click.stop
            />
            <UButton
              icon="lucide:arrow-right"
              variant="ghost"
              size="lg"
              :to="card.stem"
            />
          </div>
        </template>

        <template #footer>
          <UBadge
            v-for="(badge, badgeIndex) in card.tags"
            :key="badgeIndex"
            :label="badge"
          />
        </template>
      </UPageCard>
    </UPageColumns>

    <UButton
      v-if="!showAll && projects?.length > 5"
      icon="lucide:arrow-right"
      label="view all projects"
      to="/projects"
      variant="outline"
      class="w-fit mx-auto"
    />
  </UPageSection>
</template>
