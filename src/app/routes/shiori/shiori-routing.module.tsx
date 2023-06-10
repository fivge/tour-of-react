const ShioriRouting = {
  path: "shiori",
  async lazy() {
    const { Layout } = await import("./shiori-module");
    return { Component: Layout };
  },
  children: [
    {
      path: "login",
      async lazy() {
        const { Login } = await import("./shiori-module");
        return { Component: Login };
      },
    },
    {
      path: "home",
      async lazy() {
        const { Home } = await import("./shiori-module");
        return { Component: Home };
      },
    },
  ],
};

export default ShioriRouting;
