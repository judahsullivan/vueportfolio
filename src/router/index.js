import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/HomePage.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/projects',
			component: () => import('../Pages/ProjectsPage.vue')
		},
		{
			path: '/services',
			component: () => import('../Pages/ServicesPage.vue')
		},
		{
			path: '/reviews',
			component: () => import('../Pages/ReviewsPage.vue')
		},
		{
			path: '/contact',
			component: () => import('../Pages/ContactPage.vue')
		},
	],
})

export default router