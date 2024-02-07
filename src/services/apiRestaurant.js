import axios from "axios";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const data  = await axios
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
