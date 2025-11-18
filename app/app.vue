<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Skills",
      to: "/skills",
    },
    {
      label: "Projects",
      to: "/projects",
    },
    {
      label: "Experiences",
      to: "/experiences",
    },
  ],
]);
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <NuxtLink to="/" class="font-bold">Hello World</NuxtLink>
      </template>

      <UNavigationMenu
        :items="items"
        :ui="{
          root: 'border-black',
        }"
      />

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
