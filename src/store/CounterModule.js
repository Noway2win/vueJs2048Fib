const CounterState = {
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		},
		random(state) {
			state.count = Math.floor(Math.random() * 100);
		}
	},
	actions: {
		increment({ commit }) {
			commit('increment');
		},
		decrement({ commit }) {
			commit('decrement');
		},
		random({ commit }) {
			commit('random');
		},
	},
	getters: {
		count: state => state.count
	},
	namespaced: true,
	name: 'counter'
}

export default CounterState;