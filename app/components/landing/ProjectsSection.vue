<script setup lang="ts">
defineProps<{
  showAll?: boolean;
}>();

const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const { data: projects } = await useAsyncData("projects", () =>
  $fetch<any[]>("/api/projects"),
);
</script>

<template>
  <UPageSection title="projects" description="Here are some of my projects.">
    <UPageColumns>
      <UPageCard
        v-for="(card, index) in showAll ? projects : projects?.slice(0, 5)"
        :key="index"
        :to="`/projects/${slugify(card.name)}`"
        :ui="{
          root: 'ring-primary transition-all',
          header: 'flex justify-between items-center w-full mb-2',
          footer: 'flex flex-wrap gap-2',
        }"
        :description="card.description"
      >
        <template #header>
          <h3 class="text-xl font-semibold">{{ card.name }}</h3>
          <div>
            <UButton
              v-if="card.gh_url"
              icon="mdi:github"
              variant="ghost"
              size="lg"
              target="_blank"
              :to="card.gh_url"
              @click.stop
            />
            <UButton
              icon="lucide:arrow-right"
              variant="ghost"
              size="lg"
              :to="`/projects/${slugify(card.name)}`"
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
      v-if="!showAll && projects && projects.length > 5"
      icon="lucide:arrow-right"
      label="view all projects"
      to="/projects"
      variant="outline"
      class="w-fit mx-auto"
    />
  </UPageSection>
</template>
