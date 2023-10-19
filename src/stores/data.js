import { defineStore } from "pinia";
import axios from "axios";
export const useData = defineStore({
  id: "data",
  state: () => ({
    burgBtn: false,
    transleite: false,
    isDarkMode: false,
    repository: [],
    card: [
      {
        name: "Sneakers",
        stak: "HTML SCSS VUE JS",
        desc: "Магазин лучших кроссовок",
      },
    ],
  }),
  actions: {
    DarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    async get() {
      try {
        const res = await axios.get(
          `https://api.github.com/users/Creep-killer040228/repos`
        );
        this.repository = res.data;
      } catch (error) {
        console.error("Произошла ошибка", error);
      }
    },
  },
});
