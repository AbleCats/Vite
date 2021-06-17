export default {
    namespaced: true,
    actions: {
      addAge({commit, state}, value) {
        commit('SET_USER_AGE', state.age + value);
      }
    },
    getters: {
      age: state => state.age
    },
    mutations: {
      SET_USER_AGE(state, age) {
          state.age = age;
      }
    },
    state: {
      age: 5
    }
};