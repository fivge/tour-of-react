import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const delay = timer =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, timer);
  });

const getTodos = async () => {
  const todos = [
    {
      id: 1,
      title: "No1",
    },
  ];

  await delay(2000);

  console.log("get todos");

  return Promise.resolve(todos);
};

const postTodo = async data => {
  await delay(3000);
  console.log("update todos");

  return Promise.resolve("succc");
};

const Demo = () => {
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  useEffect(() => {
    // matrixParams
    init();
  }, []);

  const init = () => {};

  return (
    <div>
      <ul>
        {query.data?.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default Demo;
