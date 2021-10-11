const CounterState = {
	state: {
		record: { result: 100000000, playerName: 'Maria' },
		results: [{ result: 100000000, playerName: 'Maria' }],
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
			if (payload.result > state.record.result) {
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