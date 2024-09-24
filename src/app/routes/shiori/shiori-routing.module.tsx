const ShioriRouting = {
  path: "shiori",
  async lazy() {
    const { Layout } = await import("./shiori-module");
    return { Component: Layout };
  },
  children: [
    {
      index: true,
      async lazy() {
        const { Start } = await import("./shiori-module");
        return { Component: Start };
      },
    },
    {
      path: "login",
      async lazy() {
        const { Login } = await import("./shiori-module");
        return { Component: Login };
      },
    },
    {
      path: "demo",
      async lazy() {
        const { Demo } = await import("./shiori-module");
        return { Component: Demo };
      },
    },
    {
      path: "home",
      async lazy() {
        const { Home } = await import("./shiori-module");
        return { Component: Home };
      },
    },
    {
      path: "home/:search",
      async lazy() {
        const { Home } = await import("./shiori-module");
        return { Component: Home };
      },
    },
  ],
};

export default ShioriRouting;
