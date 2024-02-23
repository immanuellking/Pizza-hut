import axios from "axios";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const data = await axios
    .get(`${API_URL}/menu`)
    .then((res) => {
      const { data } = res.data;
      return data;
    })
    .catch((err) => {
      console.log(err);
      throw Error("Failed getting menu");
    });

  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("RESSS", res);

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}


export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}