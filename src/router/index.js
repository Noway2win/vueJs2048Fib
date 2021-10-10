import { createRouter, createWebHistory } from 'vue-router'
import GameView from '../views/GameView.vue';

const routes = [
	{
		path: '/',
		name: 'GameView',
		component: GameView,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
