export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const url = config.directusUrl;
  const token = config.directusToken;

  const res = await $fetch<{ data: any[] }>(`${url}/items/experiences?sort=-end_date,-start_date`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
});
