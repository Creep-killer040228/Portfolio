import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router/router.js";
import App from "./App.vue";
import "./assets/style/main.scss";

import { createI18n, useI18n } from "vue-i18n";
import { languages } from "./locales/i18n";
import { defaultLocale } from "./locales/i18n";
const messages = Object.assign(languages);
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: "en",
  messages,
  globalInjection: true,
});

createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
})
  .use(createPinia())
  .use(router)
  .use(i18n)
  .mount("#app");
