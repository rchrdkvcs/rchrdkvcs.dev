<script setup lang="ts">
const projectsCards = ref([
  {
    project: "/stream-board",
    description:
      "Stream Board is a simple way to create FaQ overlay for streaming. It is a web application that allows you to display questions and answers on your stream after added it to the dashboard.",
    repo: "",
    link: "https://adonisjs.com/",
    badge: [
      {
        label: "AdonisJS",
        icon: "simple-icons:adonisjs",
      },
      {
        label: "Postgre SQL",
        icon: "simple-icons:postgresql",
      },
      {
        label: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
      },
      {
        label: "Framer Motion",
        icon: "simple-icons:framer",
      },
    ],
  },
  {
    project: "/docs-site",
    description:
      "Control Docs is a documentation website about a GTA 5 RolePlay game server. Siteweb created with AdonisJS 6 and Inertia (React)",
    repo: "",
    link: "https://adonisjs.com/",
    badge: [
      {
        label: "AdonisJS",
        icon: "simple-icons:adonisjs",
      },
      {
        label: "React",
        icon: "simple-icons:react",
      },
      {
        label: "Uno CSS",
        icon: "simple-icons:unocss",
      },
      {
        label: "Markdown",
        icon: "simple-icons:markdown",
      },
    ],
  },
  {
    project: "/krem-pizzéria",
    description:
      "Krem Pizzéria is a Hungarian restaurant for which I have created a presentation website with sections for 'About,' 'Menu,' and 'Contact.",
    repo: "",
    link: "https://adonisjs.com/",
    badge: [
      {
        label: "Next.Js",
        icon: "simple-icons:nextdotjs",
      },
      {
        label: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
      },
      {
        label: "Framer Motion",
        icon: "simple-icons:framer",
      },
      {
        label: "Figma",
        icon: "simple-icons:figma",
      },
    ],
  },
  {
    project: "/five-stars",
    description:
      "A simple showcase website for a GTA 5 RolePlay game server, featuring a clean and modern design. In the future, I am going to implement more functionality to create a questionnaire for Whitelist.",
    repo: "",
    link: "https://adonisjs.com/",
    badge: [
      {
        label: "Next.Js",
        icon: "simple-icons:nextdotjs",
      },
      {
        label: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
      },
      {
        label: "Framer Motion",
        icon: "simple-icons:framer",
      },
    ],
  },
]);
</script>

<template>
  <UPageSection title="/projects" description="Here are some of my projects.">
    <UPageColumns>
      <UPageCard
        v-for="(card, index) in projectsCards"
        :key="index"
        :ui="{
          root: 'ring-primary',
          header: 'flex justify-between items-center w-full mb-2',
          footer: 'flex flex-wrap gap-2',
        }"
        :description="card.description"
      >
        <template #header>
          <h3 class="text-xl font-semibold">{{ card.project }}</h3>
          <div>
            <UButton
              icon="mdi:github"
              variant="ghost"
              size="lg"
              target="_blank"
              :to="card.repo"
            />
            <UButton
              icon="lucide:external-link"
              variant="ghost"
              size="lg"
              target="_blank"
              :to="card.link"
            />
          </div>
        </template>

        <template #footer>
          <UBadge
            v-for="(badge, index) in card.badge"
            :key="index"
            v-bind="badge"
          />
        </template>
      </UPageCard>
    </UPageColumns>
  </UPageSection>
</template>
