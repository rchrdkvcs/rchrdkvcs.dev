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
          icon: 'lucide:mail',
          label: 'root@rchrdkvcs.dev',
          to: 'mailto:root@rchrdkvcs.dev',
          variant: 'outline',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/rchrdkvcs',
          variant: 'outline',
          target: '_blank',
        },
        {
          icon: 'lucide:twitter',
          to: 'https://x.com/rchrdkvcs',
          variant: 'outline',
          target: '_blank',
        },
        {
          icon: 'lucide:linkedin',
          to: 'https://www.linkedin.com/in/rchrdkvcs/',
          variant: 'outline',
          target: '_blank',
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
