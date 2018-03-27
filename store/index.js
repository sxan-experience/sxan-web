import Vuex from 'vuex'
import api from './api'
import state from './state'
/*
import axios from 'axios'
*/

const store = () => {
  return new Vuex.Store({
    state: {
      auth: state.auth,
      counter: state.counter,
      test: state.test,
      resData: {},
      nedbData: {},
      firebaseTest: state.firebaseTest,
      fbUser: state.fbUser,
      data: {}
    },
    actions: {
      asyncFB: api.asyncFB,
      create: api.create,
      fbSignup: api.fbSignup,
      fbCheckUser: api.fbCheckUser,
      fbCreate: api.fbCreate,
      fbLogin: api.fbLogin,
      fbLogout: api.fbLogout,
      fbPush: api.fbPush,
      fbPatch: api.fbPatch,
      fbUpdate: api.fbUpdate,
      fbRemove: api.fbRemove,
      firebase: api.firebase,
      getServer: api.getServer
    },
    mutations: {
      increment: api.increment,
      getData: api.getData,
      getNedbData: api.getNedbData,
      postNedbData: api.postNedbData
    }
  })
}

export default store
