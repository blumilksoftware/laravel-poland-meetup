import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { h } from 'vue'

const routes = [
    { path: '/home', name: 'landing', component: () => import('@/pages/Landing.vue') },
    { path: '/meetups', component: { render: () => h(RouterView) },
        children: [
            { path: '', name: 'meetups', component: () => import('@/pages/Meetups.vue') },
            { path: '/meetups/:id', name: 'meetups.details', component: () => import('@/pages/Meetup.vue') },
            { path: '/meetups/results/:id', name: 'searching.results', component: () => import('@/pages/Meetups.vue') },
        ],
    },
    { path: '/companies',  component: { render: () => h(RouterView) },
        children: [
            { path: '', name: 'companies', component: () => import('@/pages/Companies.vue') },
            { path: '/:id', name: 'companies.details', component: () => import('@/pages/Company.vue') },
            { path: '/:id/:tabs', name: 'companies.details.list', component: () => import('@/pages/Company.vue') },
        ],
    },
    { path: '/people', component: { render: () => h(RouterView) },
        children: [
            { path: '', name: 'people', component: () => import('@/pages/People.vue') },
            { path: '/people/:id', name: 'people.details', component: () => import('@/pages/Speaker.vue') },
        ],
    },
    { path: '/contact', name: 'contact', component: () => import('@/pages/Landing.vue') },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
