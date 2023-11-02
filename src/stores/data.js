import { defineStore } from "pinia";
import axios from "axios";
export const useData = defineStore({
  id: "data",
  state: () => ({
    burgBtn: false,
    transleite: false,
    isDarkMode: false,
    repository: [],
    smailItem: [
      {
        stak: 'HTML SCSS VUE.JS', descTitle: 'Приложение для управления списками задач',
        descSub: 'Tudolist - это удобное приложение для организации задач, которое повышает продуктивность и эффективность. '
      }
    ],
    skills: [
      { title: '65%', skill: 'JavaScript TypeScript Node.js', lang: 'Languages' },
      { title: '55%', skill: 'PostgreSQL', lang: 'Databases' },
      { title: '90%', skill: 'VSCode Git GitHub Figma', lang: 'Tools' },
      { title: '90%', skill: 'HTML CSS EJS SCSS REST', lang: 'Other' },
      { title: '75%', skill: ' Vue.js React.js Express.js', lang: 'Frameworks' },
    ],
    projectsAll: [
      { name: "VuePizza", desc: "Cамая вкусная пицца во вселенной", stak: "HTML SCSS VUE.JS", img: '1', url: 'vue-pizzaa.vercel.app' },
      { name: "Sneakers", desc: "Магазин лучших кроссовок", stak: "HTML SCSS VUE.JS", img: '3', url: 'sneakers-7ohu2kd4d-samvels-projects.vercel.app' },
      { name: "Sneakers", desc: "Магазин лучших кроссовок", stak: "HTML SCSS VUE.JS", img: '3', url: 'sneakers-7ohu2kd4d-samvels-projects.vercel.app' },
    ],
    projectsSmall: [
      { name: "TodoList", desc: "Список заметок", stak: "HTML SCSS VUE JS", img: '4', url: 'creep-killer040228.github.io/TodoList/' },
    ]
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
