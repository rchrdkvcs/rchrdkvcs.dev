<script setup lang="ts">
const skillsCards = ref([
  {
    title: "Adonis Js",
    description:
      "Proficient in building robust backend applications using the Adonis Js framework.",
    icon: "simple-icons:adonisjs",
    to: "https://adonisjs.com/",
  },
  {
    title: "PostgreSQL",
    description:
      "Experienced in designing and managing relational databases with PostgreSQL.",
    icon: "simple-icons:postgresql",
    to: "https://www.postgresql.org/",
  },
  {
    title: "Tailwind CSS",
    description:
      "Skilled in creating responsive and visually appealing designs using Tailwind CSS.",
    icon: "simple-icons:tailwindcss",
    to: "https://tailwindcss.com/",
  },
  {
    title: "Vue 3 (Nuxt)",
    description:
      "Experience in building dynamic web applications using Vue 3 and Nuxt.js framework and Nuxt UI.",
    icon: "simple-icons:vuedotjs",
    to: "https://vuejs.org/",
  },
  {
    title: "React (Next)",
    description:
      "Skilled in developing interactive user interfaces with React and Next.js framework.",
    icon: "simple-icons:react",
    to: "https://reactjs.org/",
  },
  {
    title: "PHP (Symfony)",
    description:
      "Experienced in building scalable web applications using PHP and Symfony framework.",
    icon: "simple-icons:php",
    to: "https://www.php.net/",
  },
  {
    title: "Angular",
    description:
      "Proficient in developing single-page applications using Angular framework.",
    icon: "simple-icons:angular",
    to: "https://angular.io/",
  },
  {
    title: "Docker",
    description:
      "Skilled in containerizing applications and managing deployments using Docker.",
    icon: "simple-icons:docker",
    to: "https://www.docker.com/",
  },
  {
    title: "Git",
    description:
      "Experienced in version control and collaborative development using Git, Github and also Gitlab",
    icon: "simple-icons:git",
    to: "https://git-scm.com/",
  },
  {
    title: "Figma",
    description:
      "Proficient in designing user interfaces and prototypes using Figma.",
    icon: "simple-icons:figma",
    to: "https://www.figma.com/",
  },
  {
    title: "MongoDB",
    description:
      "Experienced in designing and managing NoSQL databases with MongoDB.",
    icon: "simple-icons:mongodb",
    to: "https://www.mongodb.com/",
  },
  {
    title: "CI/CD",
    description:
      "Skilled in implementing Continuous Integration and Continuous Deployment pipelines for efficient software delivery.",
    icon: "simple-icons:mongodb",
    to: "https://www.mongodb.com/",
  },
]);
</script>

<template>
  <UPageSection
    title="/skills"
    description="Here are some of the technologies I've been working with recently."
  >
    <UPageGrid>
      <UPageCard
        v-for="(card, index) in skillsCards"
        :key="index"
        v-bind="card"
        :ui="{ root: 'ring-primary' }"
      />
    </UPageGrid>
  </UPageSection>
</template>

<style scoped></style>
