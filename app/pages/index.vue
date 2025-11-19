<script setup lang="ts"></script>

<template>
  <UContainer>
    <UPageHero
      orientation="horizontal"
      reverse
      headline="Hey There ! I'm -"
      title="Richard Kovacs"
      description="Full-Stack Developer, with a passion for building applications and websites."
      :links="[
        {
          icon: '',
          label: 'Contact Me',
          to: 'mailto:root@rchrdkvcs.dev',
          variant: 'outline',
        },
      ]"
    >
      <NuxtImg
        src="/images/avatar.png"
        alt="Avatar"
        class="mx-auto w-96 shadow-2xl -rotate-6"
      />
    </UPageHero>

    <SkillsSection />
    <ProjectsSection />
    <ExperiencesSection />
  </UContainer>
</template>
