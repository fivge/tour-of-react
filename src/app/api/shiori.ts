import { createQueryKeys } from "@lukemorales/query-key-factory";
import $http from "@core/http/index";
import env from "@env/environment";

const perfix = `${env.shioriApi}/api/v1`;

const http = config =>
  $http({
    ...config,
    headers: {},
    transformResponse: [
      data => {
        console.log("tra", data);
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
const httpWithAuth = config => $http({ ...config, headers: {} });

export const api = {
  login: data =>
    http({
      method: "POST",
      url: `${perfix}/auth/login`,
      data,
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
