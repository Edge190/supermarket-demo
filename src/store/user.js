export default {
  state: {
    token: '',
    name:'',
    position:'',
    area:'',
  },
  mutations: {
    setToken(state,val) {
      state.token = val
      localStorage.setItem('setToken', JSON.stringify(val))
    },
    clearToken(state) {
      state.token= ''
      localStorage.removeItem('setToken')
    },
    getToken(state) {
      state.token =state.token || localStorage.getItem('setToken')
    }, 
    getUser(state,val){
      state.position = val.position
      state.name = val.name
      state.area = val.area
      localStorage.setItem('getUser', JSON.stringify(val))
    }
  }
}