<script setup lang="ts">
const { data: projects } = await useAsyncData("projects", () =>
  $fetch<any[]>("/api/projects"),
);
</script>

<template>
  <UContainer>
    <UPageSection title="projects" description="Here are some of my projects.">
      <UPageColumns>
        <UPageCard
          v-for="(card, index) in projects"
          :key="index"
          :to="`/projects/${card.slug}`"
          :ui="{
            root: 'ring-primary transition-all',
            header: 'flex justify-between items-center w-full mb-2',
            footer: 'flex flex-wrap gap-2',
          }"
          :description="card.description"
        >
          <template #header>
            <h3 class="text-xl font-semibold truncate min-w-0">{{ card.name }}</h3>
            <div>
              <UButton
                v-if="card.demo_url"
                icon="lucide:external-link"
                variant="ghost"
                size="lg"
                target="_blank"
                :to="card.demo_url"
                @click.stop
              />
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
                :to="`/projects/${card.slug}`"
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
    </UPageSection>
  </UContainer>
</template>
