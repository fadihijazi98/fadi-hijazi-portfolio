import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SkillsView from "@/views/SkillsView";
import ExperienceView from "@/views/ExperienceView";
import GetInTouchView from "@/views/GetInTouchView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
  {
    path: "/experience",
    name: "/experience",
    component: ExperienceView,
  },
  {
    path: "/get-in-touch",
    name: "/get-in-touch",
    component: GetInTouchView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
