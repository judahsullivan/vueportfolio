
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue';


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/projects',
			component: () => import('../Pages/Projects.vue')
		},
		{
			path: '/services',
			component: () => import('../Pages/Services.vue')
		},
		{
			path: '/reviews',
			component: () => import('../Pages/Reviews.vue')
		},
		{
			path: '/contact',
			component: () => import('../Pages/Contact.vue')
		},
	],
})

export default router;