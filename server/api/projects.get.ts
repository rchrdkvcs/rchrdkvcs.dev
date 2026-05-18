export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const url = config.directusUrl;
  const token = config.directusToken;

  const res = await $fetch<{ data: any[] }>(`${url}/items/projects?sort=placement,-id`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
});
