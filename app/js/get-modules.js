export async function getUsers() {
  const users = await fetch(
    "https://634e9f834af5fdff3a625f84.mockapi.io/users"
  ).then((res) => res.json());

  return users;
}

export async function changeStatus(id, userStatus) {
  let newStatus = {
    status: userStatus,
  };
  let request = await fetch(
    `https://634e9f834af5fdff3a625f84.mockapi.io/users/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStatus),
    }
  ).then((res) => res.json());
}

export let getLoggedUser = () => JSON.parse(localStorage.getItem("loggedUser")) ?? [];

export async function logOut() {
  let loggedUser = getLoggedUser();
  changeStatus(loggedUser.id, "false");
  localStorage.clear();
  location.reload();
}


