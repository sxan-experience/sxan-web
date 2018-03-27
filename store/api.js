import axios from 'axios'
const api = {
  create (state, params) {
    params.data.user = state.state.fbUser.uid
    params.data.token = state.state.fbUser.stsTokenManager.accessToken
    console.log(params)
    axios.post(state.state.server + '/firebase?create=' + params.type, params)
      .then((res) => {
        console.log('firebase api push response', res.data)
        return res.data
      })
  },
  getServer (state) {
    // TODO set server to env vars instead of window.location.origin
    console.log(window.location.origin)
    state.state.server = window.location.origin.indexOf('localhost') >= 0 ? 'http://localhost:3030' : window.location.origin
    console.log(state.state.server)
  },
  fbPatch (state, params) {
    axios.patch('https://sxan-89600.firebaseio.com/testPUT/' + state.state.fbUser.uid + '.json?auth=' + state.state.fbUser.stsTokenManager.accessToken, params).then((res) => {
      console.log('firebase REST patch', res)
    })
    /*
    axios.patch('http://localhost:3030/firebase?createContent=marky&access_token=' + state.state.fbUser.stsTokenManager.accessToken, params)
      .then((res) => {
        console.log('firebase api patch response', res.data)
        return res.data
      })
      */
  },
  fbUpdate (state, params) {
    axios.put(state.state.server + '/firebase?createContent=marky&access_token=' + state.state.fbUser.stsTokenManager.accessToken, params)
      .then((res) => {
        console.log('firebase api update response', res.data)
        return res.data
      })
  },
  fbRemove (state, params) {
    axios.delete(state.state.server + '/firebase?createContent=marky&access_token=' + state.state.fbUser.stsTokenManager.accessToken, params)
      .then((res) => {
        console.log('firebase api delete response', res.data)
        return res.data
      })
  },
  fbPush (state, params) {
    console.log(params)
    axios.post(state.state.server + '/firebase?createContent=marky&access_token=' + state.state.fbUser.stsTokenManager.accessToken, params)
      .then((res) => {
        console.log('firebase api push response', res.data)
        return res.data
      })
  },
  fbCreate (state, params) {
    axios.post('https://sxan-89600.firebaseio.com/testPOST.json?auth=' + state.state.fbUser.stsTokenManager.accessToken, params).then((res) => {
      console.log('firebanose REST post', res)
    })
    axios.put('https://sxan-89600.firebaseio.com/testPUT/' + state.state.fbUser.uid + '.json?auth=' + state.state.fbUser.stsTokenManager.accessToken, params).then((res) => {
      console.log('firebase REST put', res)
    })
    /* Inefficiently posting/putting to server before firebase
    axios.post('http://localhost:3030/firebase?createContent=marky&access_token=' + state.state.fbUser.stsTokenManager.accessToken, params)
      .then((res) => {
        console.log('firebase api push response', res.data)
        return res.data
      })
    */
  },
  fbLogin (state, params) {
    console.log('firebase login test from api.js', params)
    axios.post(state.state.server + '/firebase?login=true', params)
      .then((res) => {
        console.log('firebase api login response', res.data)
        state.state.fbUser = res.data
        console.log(state)
        window.localStorage.setItem('fbUser', JSON.stringify(state.state.fbUser))
        return res.data
      })
  },
  fbLogout (state) {
    window.localStorage.removeItem('fbUser')
    state.state.fbUser = {}
    /* TODO Do we need a server call to logout?
    axios.put('http://localhost:3030/firebase?logout=marky&access_token=' + state.state.fbUser.stsTokenManager.accessToken)
      .then((res) => {
        console.log('firebase api logout response', res, state)
        console.log(state)
      })
      */
  },
  fbCheckUser (state) {
    // TODO call this bitch on reload.
    state.state.fbUser = localStorage.fbUser ? JSON.parse(localStorage.getItem('fbUser')) : {}
  },
  asyncFB (state, params) {
    axios.post(window.location.origin + '/firebase?createUser=marky', params)
      .then((res) => {
        console.info(res.data)
        return res.data
      })
      .catch((e) => {
        return 'bad case of the disappearing data'
      })
  },
  fbSignup (state, params) {
    axios.post(state.state.server + `/firebase?createUser=marky`, params)
      .then((res) => {
        console.info('fbSignup data:', res.data)
        state.state.fbUser = res.data
        return res.data
      })
      .catch((e) => {
        return 'bad case of the disappearing data'
      })
  },
  asyncData (state, {params}, callback) {
    axios.get(state.state.server + `/gun?${params}`)
      .then((res) => {
        callback(null, {homeData: res.data})
      })
      .catch((e) => {
        callback({statusCode: 404, message: 'Post not found'})
      })
  },
  increment (state) {
    state.counter++
  },
  getData (state) {
    axios.get('https://scanna.firebaseio.com/comments/-KjjKELK4uQM_lEDdRRw.json')
      .then((res) => {
        console.log(res.data)
        state.resData = res.data
      })
  },
  getNedbData (state, id) {
    let jsonUrl = 'https://sxan-systems.herokuapp.com/nedb/' + id
    console.log(jsonUrl)
    axios.get(jsonUrl)
      .then((res) => {
        console.log(res.data)
        state.nedbData = res.data
        console.log(state.nedbData)
      })
  },
  postNedbData (state, payload) {
    console.log(payload)
    axios.post('https://sxan-systems.herokuapp.com/nedb', payload)
      .then((res) => {
        console.log(res.data)
        state.nedbData = res.data
        console.log(state.nedbData)
      })
  }
}
export default api
