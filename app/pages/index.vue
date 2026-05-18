<script setup lang="ts">
const config = useRuntimeConfig();
const directusUrl = config.public.directusUrl as string;

const { data: profile } = await useAsyncData("profile", () =>
  $fetch<any>("/api/profile"),
);

const links = computed(() => [
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
].filter(Boolean));
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

    <SkillsSection />
    <ProjectsSection />
    <ExperiencesSection />
  </UContainer>
</template>
