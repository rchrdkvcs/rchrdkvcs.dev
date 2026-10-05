import { getCollection, getEntry } from "astro:content";

const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) =>
  a.data.order - b.data.order;

// Missing end date = ongoing, so it sorts as the most recent.
const endTime = (d?: Date) => d?.getTime() ?? Infinity;

const formatMonth = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

export async function getProfile() {
  const entry = await getEntry("profile", "main");
  if (!entry) throw new Error("Missing src/content/profile.json");
  return entry.data;
}

export async function getSkills() {
  const skills = await getCollection("skills");
  return skills.toSorted(byOrder);
}

export async function getProjects() {
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  return projects.toSorted(byOrder);
}

// Ongoing experiences first, then most recent end date, then most recent start date.
export async function getExperiences() {
  const experiences = await getCollection("experiences");
  return experiences.toSorted(
    (a, b) =>
      endTime(b.data.endDate) - endTime(a.data.endDate) ||
      b.data.startDate.getTime() - a.data.startDate.getTime(),
  );
}

export function formatDateRange(start: Date, end?: Date) {
  if (end && formatMonth(start) === formatMonth(end)) return formatMonth(start);
  return `${formatMonth(start)} - ${end ? formatMonth(end) : "Present"}`;
}

export { formatDuration } from "./duration";
