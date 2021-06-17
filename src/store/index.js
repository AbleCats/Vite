import {createStore, Store} from 'vuex';
import user from './module/user';

const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
  modules: {
    user
  },
  strict: debug
});

export default store;