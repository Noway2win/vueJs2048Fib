import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '../views/CounterView.vue';
import Board from '../views/Board.vue';

const routes = [
	{
		path: '/',
		name: 'board',
		component: Board,
	},
	{
		path: '/counter',
		name: 'Counter',
		component: CounterView,
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
