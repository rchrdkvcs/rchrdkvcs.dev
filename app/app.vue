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
    <UHeader :ui="{ root: 'border border-black max-w-7xl mx-auto bg-default' }">
      <template #title>
        <NuxtLink to="/">
          <Logo class="size-16" />
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
