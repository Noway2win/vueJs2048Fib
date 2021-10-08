import { createStore } from 'vuex'
import CounterState from './CounterModule';
import gameRecords from './gameRecords';

export default createStore({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: { [CounterState.name]: CounterState, [gameRecords.name]: gameRecords },
})
