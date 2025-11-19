<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  [
    {
      label: "/home",
      to: "/",
    },
    {
      label: "/skills",
      to: "/skills",
    },
    {
      label: "/projects",
      to: "/projects",
    },
    {
      label: "/experiences",
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
        <UNavigationMenu :items="items" variant="link" />
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
