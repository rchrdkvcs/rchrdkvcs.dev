// Shared by the build (static fallback) and the browser (live value for ongoing positions).

// LinkedIn-style duration, counting both the start and end months: "1 yr 3 mos".
export function formatDuration(start: Date, end = new Date()) {
  const months = Math.max(
    1,
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
      (end.getUTCMonth() - start.getUTCMonth()) +
      1,
  );
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [
    years && `${years} yr${years > 1 ? "s" : ""}`,
    rest && `${rest} mo${rest > 1 ? "s" : ""}`,
  ];
  return parts.filter(Boolean).join(" ");
}
