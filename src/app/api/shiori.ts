import { createQueryKeys } from "@lukemorales/query-key-factory";
import $http from "@core/http/index";
import env from "@env/environment";

import { useAuth } from "../routes/shiori/shared/auth.store";
import { snackbar } from "@components/index";
import { redirect } from "react-router-dom";

const perfix = `${env.shioriApi}/api/v1`;

const http = config =>
  $http({
    ...config,
    transformResponse: [
      data => {
        let newData = data;
        try {
          newData = JSON.parse(newData);
        } catch (error) {}

        if (newData.message) {
          return newData.message;
        }
        return newData;
      },
    ],
  });

const delay = timer =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve("");
    }, timer);
  });

const httpWithAuth = async config => {
  const session = useAuth.getState().session;
  const token = useAuth.getState().token;
  const headers = {
    "X-Session-Id": session,
    Authorization: `Bearer ${token}`,
  };
  try {
    const res = await http({ ...config, headers });
    return res;
  } catch (error) {
    // Unauthorized
    if (error && error.status === 401) {
      // await snackbar({ message: "未登录" });
      // await redirect("/shiori/login");
      window.location.replace("/shiori/login");
      // await delay(3000);
    }
    return Promise.reject(error);
  }
};

export const api = {
  login: data =>
    http({
      method: "POST",
      url: `${perfix}/auth/login`,
      data,
    }),
  getTags: () =>
    httpWithAuth({
      url: `${perfix}/tags/`,
    }),
};

// const fooApi =
// transformResponse: [function (data) {
//     // Do whatever you want to transform the data

//     return data;
//   }],
// transformRequest: [function (data, headers) {
//     // Do whatever you want to transform the data

//     return data;
//   }],
// headers: {'X-Requested-With': 'XMLHttpRequest'},

export const shiori = createQueryKeys("shiori", {
  // all: null,
  // detail: (userId: string) => ({
  //   queryKey: [userId],
  //   // queryFn: () => api.getUser(userId),
  // }),
  tags: {
    queryKey: ["tags"],
    queryFn: () => api.getTags(),
  },
});

// export const todos = createQueryKeys('todos', {
//     detail: (todoId: string) => [todoId],
//     list: (filters: TodoFilters) => ({
//       queryKey: [{ filters }],
//       queryFn: (ctx) => api.getTodos({ filters, page: ctx.pageParam }),
//       contextQueries: {
//         search: (query: string, limit = 15) => ({
//           queryKey: [query, limit],
//           queryFn: (ctx) => api.getSearchTodos({
//             page: ctx.pageParam,
//             filters,
//             limit,
//             query,
//           }),
//         }),
//       },
//     }),
//   });
