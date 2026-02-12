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
    <UHeader :ui="{ root: 'border-none backdrop-blur-none bg-transparent' }">
      <template #title>
        <NuxtLink to="/">rchrdkvcs.dev</NuxtLink>
      </template>

      <UNavigationMenu
        :items="navItems"
        variant="link"
        class="hidden lg:block bg-default px-4 border border-black"
      />

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
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
