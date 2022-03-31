import { http } from "../services/config";

export default {
  ListarPokemons: (limit, offset) => {
    return http.get(`limit=${limit}&offset=${offset}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
