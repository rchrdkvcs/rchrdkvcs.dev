export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: "cursor-pointer",
      },
    },
    pageSection: {
      slots: {
        title: "!text-left",
        description: "!text-left",
      },
    },
  },
});
