<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const navItems: NavigationMenuItem[][] = [
  [
    { label: "home", to: "/" },
    { label: "skills", to: "/skills" },
    { label: "projects", to: "/projects" },
    { label: "experiences", to: "/experiences" },
  ],
];
</script>

<template>
  <UApp>
    <UHeader :ui="{ root: 'border-black backdrop-blur-none bg-default' }">
      <template #title>
        <Logo class="size-12" />
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

    <UFooter :ui="{ root: 'bg-[#111]'}">
      <template #left>
        <p class="text-inverted/75 text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>
      <template #right>
        <p class="text-inverted/75 text-sm">
          Designed and developed by Richard Kovacs
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
