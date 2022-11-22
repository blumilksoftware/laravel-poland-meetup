import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'landing', component: () => import('@/pages/Landing.vue') },
    { path: '/meetups', name: 'meetups', component: () => import('@/pages/Meetups.vue') },
    { path: '/meetups/:id', name: 'meetups.details', component: () => import('@/pages/Meetup.vue') },
    { path: '/companies', name: 'companies', component: () => import('@/pages/Companies.vue') },
    { path: '/companies/:id', name: 'companies.details', component: () => import('@/pages/Landing.vue') },
    { path: '/people', name: 'people', component: () => import('@/pages/Landing.vue') },
    { path: '/people/:id', name: 'people.details', component: () => import('@/pages/Landing.vue') },
    { path: '/contact', name: 'contact', component: () => import('@/pages/Landing.vue') },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
