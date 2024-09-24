#### demo

##### query

对于大多数查询，通常只需检查 isPending 状态，然后检查 isError 状态，最后假设数据可用并呈现成功状态：

```ts
import { useQuery } from "@tanstack/react-query";

function Todos() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoList,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

##### query key

https://github.com/lukemorales/query-key-factory

##### mutation

```ts
const { mutateAsync } = useMutation({
  mutationFn: addTodo,
  onSuccess: (data, variables, context) => {
    // I will fire first
  },
  onError: (error, variables, context) => {
    // I will fire first
  },
  onSettled: (data, error, variables, context) => {
    // I will fire first
  },
});

mutate(todo, {
  onSuccess: (data, variables, context) => {
    // I will fire second!
  },
  onError: (error, variables, context) => {
    // I will fire second!
  },
  onSettled: (data, error, variables, context) => {
    // I will fire second!
  },
});
```

- `mutation.reset()`
  有时需要清除变异请求的错误或数据。要做到这一点，你可以使用 `reset` 函数来处理
- `mutation.mutateAsync(todo)`
  使用 mutateAsync 而不是 mutate 来获得一个 promise，它将在成功时解析或在错误时抛出。例如，这可以用于合成副作用。

##### Query Invalidation

```ts
// Invalidate every query in the cache
queryClient.invalidateQueries();
// Invalidate every query with a key that starts with `todos`
queryClient.invalidateQueries({ queryKey: ["todos"] });
```

#### typescript

https://tanstack.com/query/latest/docs/framework/react/typescript#registering-a-global-error

TanStack Query v5 允许通过修改 Register 接口，为所有内容设置全局 Error 类型，而无需在调用端指定泛型。这将确保推理仍然有效，但 error 字段将属于指定类型：

```jsx
import '@tanstack/react-query'

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError
  }
}

const { error } = useQuery({ queryKey: ['groups'], queryFn: fetchGroups })
//      ^? const error: AxiosError | null
```
