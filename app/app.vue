<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

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
    <UHeader :ui="{ root: 'border-primary' }">
      <template #title>
        <NuxtLink to="/">rchrdkvcs.dev</NuxtLink>
      </template>

      <template #right>
        <UNavigationMenu
          :items="navItems"
          variant="link"
          class="hidden lg:block"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="navItems" orientation="vertical" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator color="primary" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
      </template>
    </UFooter>
  </UApp>
</template>
