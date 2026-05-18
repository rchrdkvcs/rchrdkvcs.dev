<script setup lang="ts">
const config = useRuntimeConfig();
const directusUrl = config.public.directusUrl as string;

const [{ data: profile }, { data: skills }, { data: projects }, { data: experiences }] =
  await Promise.all([
    useAsyncData("profile", () => $fetch<any>("/api/profile")),
    useAsyncData("skills", () => $fetch<any[]>("/api/skills")),
    useAsyncData("projects", () => $fetch<any[]>("/api/projects")),
    useAsyncData("experiences", () => $fetch<any[]>("/api/experiences")),
  ]);

const links = computed(() =>
  [
    profile.value?.email && {
      icon: "hugeicons:mail-01",
      label: profile.value.email,
      to: `mailto:${profile.value.email}`,
      variant: "outline",
      target: "_blank",
    },
    profile.value?.github_url && {
      icon: "hugeicons:github",
      to: profile.value.github_url,
      variant: "outline",
      target: "_blank",
    },
    profile.value?.twitter_url && {
      icon: "hugeicons:new-twitter",
      to: profile.value.twitter_url,
      variant: "outline",
      target: "_blank",
    },
    profile.value?.linkedin_url && {
      icon: "hugeicons:linkedin-02",
      to: profile.value.linkedin_url,
      variant: "outline",
      target: "_blank",
    },
  ].filter(Boolean),
);

const formatDate = (start: string, end: string | null) => {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${fmt(start)} - ${end ? fmt(end) : "Present"}`;
};

const mappedSkills = computed(() =>
  (skills.value ?? []).map((s) => ({
    title: s.label,
    description: s.description,
    icon: s.icon,
    to: s.link,
  })),
);

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
    <UPageHero
      orientation="horizontal"
      reverse
      headline="Hey There ! I'm -"
      :title="profile?.name"
      :description="profile?.bio"
      :links="links"
    >
      <NuxtImg
        v-if="profile?.profile_picture"
        :src="`${directusUrl}/assets/${profile.profile_picture}`"
        :alt="profile.name"
        class="mx-auto w-96 shadow-2xl -rotate-2"
      />
      <NuxtImg
        v-else
        src="/images/avatar.png"
        alt="Avatar"
        class="mx-auto w-96 shadow-2xl -rotate-2"
      />
    </UPageHero>

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

    <UPageSection title="projects" description="Here are some of my projects.">
      <UPageColumns>
        <UPageCard
          v-for="(card, index) in projects?.slice(0, 5)"
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
            <h3 class="text-xl font-semibold">{{ card.name }}</h3>
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

      <UButton
        v-if="projects && projects.length > 5"
        icon="lucide:arrow-right"
        label="view all projects"
        to="/projects"
        variant="outline"
        class="w-fit mx-auto"
      />
    </UPageSection>

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
