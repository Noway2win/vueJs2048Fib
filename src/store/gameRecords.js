const CounterState = {
	state: {
		record: 45,
		results: [],
	},
	mutations: {
		updateRecord(state, payload) {
			state.record = payload;
		},
		addResult(state, payload) {
			state.results.push(payload);
		}
	},
	actions: {
		newResult({ commit, state }, payload) {
			commit('addResult', payload);
			if (payload > state.record) {
				commit('updateRecord', payload);
			}
		}
	},
	getters: {
		record: state => state.record,
		results: state => state.results
	},
	namespaced: true,
	name: 'game'
}

export default CounterState;