import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'landing', component: () => import('@/pages/Landing.vue') },
    { path: '/meetups', name: 'meetups', component: () => import('@/pages/Meetups.vue') },
    { path: '/meetups/:id', name: 'meetups.details', component: () => import('@/pages/Meetup.vue') },
    { path: '/meetups/results/:id', name: 'searching.results', component: () => import('@/pages/Meetups.vue') },
    { path: '/companies', name: 'companies', component: () => import('@/pages/Companies.vue') },
    { path: '/companies/:id', name: 'companies.details', component: () => import('@/pages/Company.vue') },
    { path: '/companies/:id/:tabs', name: 'companies.details.list', component: () => import('@/pages/Company.vue') },
    { path: '/people', name: 'people', component: () => import('@/pages/People.vue') },
    { path: '/people/:id', name: 'people.details', component: () => import('@/pages/Speaker.vue') },
    { path: '/contact', name: 'contact', component: () => import('@/pages/Landing.vue') },
    { path: '/404', name: '404', component: () => import('@/pages/404.vue') },
    { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/404' },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
