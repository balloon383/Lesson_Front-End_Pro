export async function getUsers(flag = 'false') {
    if(flag == 'false'){
      const users = await fetch(
      "https://634e9f834af5fdff3a625f84.mockapi.io/users"
    ).then((res) => res.json());
  return users;

  } else{
    const users = await fetch(
      `https://634e9f834af5fdff3a625f84.mockapi.io/users/${flag}`
    ).then((res) => res.json());
  return users;

  }
  
}

export async function changeStatus(user, userStatus = 'true') {
  let newStatus = {
    status: userStatus,
    shoppingCart: user.shoppingCart
  };
  let request = await fetch(
    `https://634e9f834af5fdff3a625f84.mockapi.io/users/${user.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStatus),
    }
  ).then((res) => res.json())
}

export let getLoggedUser = () => JSON.parse(localStorage.getItem("loggedUser")) ?? [];
export let getUserInfo = () => {} 

export async function logOut() {
  let loggedUser = getLoggedUser();
  await changeStatus(loggedUser, "false");
  localStorage.clear();
  location.reload();
}


