import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import Homepage from "./pages/Homepage.vue";
import TravelAndAccomodationPage from "./pages/TravelAndAccomodationPage.vue";
import RegistryPage from "./pages/RegistryPage.vue";
import RSVPPage from "./pages/RSVPPage.vue";
import "./global.css";

interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/travel-and-accomodation-page",
    name: "TravelAndAccomodationPage",
    component: TravelAndAccomodationPage,
  },
  {
    path: "/registry-page",
    name: "RegistryPage",
    component: RegistryPage,
  },
  {
    path: "/rsvp-page",
    name: "RSVPPage",
    component: RSVPPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title as string;
  const metaDesc = toRoute?.meta?.description as string;

  window.document.title = metaTitle || "New-File-3";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value: string) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

const vuetify = createVuetify({ components, directives });

createApp(App).use(router).use(vuetify).mount("#app");

export default router;
