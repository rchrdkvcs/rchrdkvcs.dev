export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const url = config.directusUrl;
  const token = config.directusToken;

  const res = await $fetch<{ data: any[] }>(`${url}/items/skills`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
});
