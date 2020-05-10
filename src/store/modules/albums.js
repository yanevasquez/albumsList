import axios from 'axios'

const albums = {
    namespaced: true,
    state: {
        albums: []
    },

    mutations: {
        SET_ALBUMS(state, data) {
            state.albums = data
        }
    },
    actions: {
        loadAlbums({ commit }) {
            axios
                .get('http://localhost:8000/albums-list/')
                .then(res => {
                    commit('SET_ALBUMS', res.data)
                })
                .catch(error => console.log(error))
        }
    }
}
export default albums