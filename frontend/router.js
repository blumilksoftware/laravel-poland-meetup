import {createRouter, createWebHistory} from "vue-router"

const routes = [
    { path: "/", name: "landing", component: () => import("@/frontend/pages/Landing.vue") },
    { path: "/meetups", name: "meetups", component: () => import("@/frontend/pages/Meetups.vue") },
    { path: "/meetups/:id", name: "meetups.details", component: () => import("@/frontend/pages/Meetup.vue") },
    { path: "/companies", name: "companies", component: () => import("@/frontend/pages/Companies.vue") },
    { path: "/companies/:id", name: "companies.details", component: () => import("@/frontend/pages/Landing.vue") },
    { path: "/people", name: "people", component: () => import("@/frontend/pages/Landing.vue") },
    { path: "/people/:id", name: "people.details", component: () => import("@/frontend/pages/Landing.vue") },
    { path: "/contact", name: "contact", component: () => import("@/frontend/pages/Landing.vue") },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
