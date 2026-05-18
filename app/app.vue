<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import AppLogo from "~/components/AppLogo.vue";

const navItems: NavigationMenuItem[][] = [
  [
    { label: "home", to: "/" },
    { label: "skills", to: "/skills" },
    { label: "projects", to: "/projects" },
    { label: "experiences", to: "/experiences" },
  ],
];

const { data: profile } = await useAsyncData("profile", () =>
  $fetch<any>("/api/profile"),
);

const socials = computed(() =>
  [
    profile.value?.github_url && {
      icon: "simple-icons:github",
      to: profile.value.github_url,
    },
    profile.value?.twitter_url && {
      icon: "simple-icons:x",
      to: profile.value.twitter_url,
    },
    profile.value?.linkedin_url && {
      icon: "simple-icons:linkedin",
      to: profile.value.linkedin_url,
    },
    profile.value?.email && {
      icon: "hugeicons:mail-01",
      to: `mailto:${profile.value.email}`,
    },
  ].filter(Boolean),
);
</script>

<template>
  <UApp>
    <UHeader :ui="{ root: 'border-black backdrop-blur-none bg-default' }">
      <template #title>
        <AppLogo class="size-12" />
      </template>

      <UNavigationMenu
        :items="navItems"
        variant="link"
        class="hidden lg:block"
      />

      <template #body>
        <UNavigationMenu :items="navItems" orientation="vertical" />
      </template>

      <template #right>
        <UButton
          label="Contact me"
          icon="hugeicons:mail-01"
          href="mailto:root@rchrdkvcs.dev"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <footer class="bg-[#aaa] border-t border-default">
      <div
        class="relative max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div class="flex flex-col md:flex-row justify-between gap-10">
          <div class="flex gap-8 items-center">
            <AppLogo class="size-20" />
            <p class="text-muted text-sm max-w-xs leading-relaxed">
              {{ profile?.bio }}
            </p>
          </div>

          <div class="flex flex-col gap-2">
            <span
              class="text-toned uppercase text-sm font-medium tracking-widest"
              >Contact</span
            >
            <div class="flex gap-2">
              <UButton
                v-for="social in socials"
                :key="social.to"
                :icon="social.icon"
                :to="social.to"
                target="_blank"
                variant="ghost"
                color="neutral"
              />
            </div>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row justify-between items-center gap-2 text-muted text-sm mt-8 md:mt-16"
        >
          <span>©{{ new Date().getFullYear() }} {{ profile?.name }}</span>
          <span>Designed & built by {{ profile?.name }}</span>
        </div>
      </div>
    </footer>
  </UApp>
</template>
