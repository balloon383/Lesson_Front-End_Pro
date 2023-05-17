let getTodos = async () => {
    const get = await fetch(
      "https://61498bf2035b3600175ba32f.mockapi.io/todo"
    ).then(res => res.json())

    return get;
        
}

export let postTodos = async (todo) => {
  const posting = await fetch(
    `https://61498bf2035b3600175ba32f.mockapi.io/todo`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  ).then((res) => res.json());

  return posting;
};

export let deleteTodos = async (id) => {
  const deletion = await fetch(
    `https://61498bf2035b3600175ba32f.mockapi.io/todo/${id}`,
    {
      method: "DELETE"
    }
  ).then((res) => res.json());

  return deletion;
};

export let putTodos = async (todo) => {
  const putting = await fetch(
    `https://61498bf2035b3600175ba32f.mockapi.io/todo/${todo.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  ).then((res) => res.json());

  return putting;
};

export default getTodos