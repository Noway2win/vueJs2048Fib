const CounterState = {
	state: {
		record: { result: 45, playerName: 'Игрок 1' },
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
			if (payload.result > state.record.result) {
				commit('updateRecord', payload);
			}
		}
	},
	getters: {
		record: state => state.record.result,
		results: state => state.results
	},
	namespaced: true,
	name: 'game'
}

export default CounterState;