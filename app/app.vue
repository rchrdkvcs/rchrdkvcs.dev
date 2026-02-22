<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const route = useRoute();

const navItems = ref<NavigationMenuItem[]>([
  [
    {
      label: "home",
      to: "/",
    },
    {
      label: "skills",
      to: "/skills",
    },
    {
      label: "projects",
      to: "/projects",
      active: computed(() => route.path.startsWith("/projects")),
    },
    {
      label: "experiences",
      to: "/experiences",
    },
  ],
]);
</script>

<template>
  <UApp>
    <UHeader :ui="{ root: 'border-black backdrop-blur-none bg-default' }">
      <template #title>
        <NuxtLink to="/">
          <Logo class="size-12" />
        </NuxtLink>
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

    <USeparator color="primary" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
