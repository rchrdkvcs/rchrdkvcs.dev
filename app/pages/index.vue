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
          icon: 'hugeicons:mail-01',
          label: 'root@rchrdkvcs.dev',
          to: 'mailto:root@rchrdkvcs.dev',
          variant: 'outline',
          target: '_blank',
        },
        {
          icon: 'hugeicons:github',
          to: 'https://github.com/rchrdkvcs',
          variant: 'outline',
          target: '_blank',
        },
        {
          icon: 'hugeicons:new-twitter',
          to: 'https://x.com/rchrdkvcs',
          variant: 'outline',
          target: '_blank',
        },
        {
          icon: 'hugeicons:linkedin-02',
          to: 'https://www.linkedin.com/in/rchrdkvcs/',
          variant: 'outline',
          target: '_blank',
        },
      ]"
    >
      <NuxtImg
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
