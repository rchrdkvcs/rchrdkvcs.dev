export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: "cursor-pointer",
      },
    },
    pageSection: {
      slots: {
        container: "!py-8",
        title: "!text-left",
        description: "!text-left",
      },
    },
  },
});
