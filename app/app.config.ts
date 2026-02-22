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
    navigationMenu: {
      variants: {
        active: {
          true: {
            link: "before:bg-elevated/25! before:border-default before:border",
          },
        },
      },
    },
    prose: {
      blockquote: {
        base: "border-s-4 border-muted ps-4 italic",
      },
    },
  },
});
