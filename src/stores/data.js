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
      { name: "VuePizza", desc: "Cамая вкусная пицца во вселенной", stak: "HTML SCSS VUE JS", img: '1', url: 'vue-pizzaa.vercel.app' },
      { name: "Sneakers", desc: "Магазин лучших кроссовок", stak: "HTML SCSS VUE JS", img: '3', url: 'sneakers-7ohu2kd4d-samvels-projects.vercel.app' },
      { name: "TodoList", desc: "Список заметок", stak: "HTML SCSS VUE JS", img: '4', url: 'creep-killer040228.github.io/TodoList/' },
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
        console.log(this.repository);
      } catch (error) {
        console.error("Произошла ошибка", error);
      }
    },
  },
});
