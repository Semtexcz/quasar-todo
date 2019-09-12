const state = {
  tasks: {
    'ID1': {
      name: 'Go to shop',
      completed: false,
      dueDate: '2019/10/12',
      dueTime: '18:30'
    },
    'ID2': {
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/07/01',
      dueTime: '18:30'
    },
    'ID3': {
      name: 'Get apples',
      completed: false,
      dueDate: '2019/12/24',
      dueTime: '20:00'
    }
  }
}

const mutations = {
  updateTask (state, payload) {
    console.log('payload (from mutation): ', payload)
    Object.assign(state.tasks[payload.id], payload.updates)
  }
}

const actions = {
  updateTask ({ commit }, payload) {
    commit('updateTask', payload)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
