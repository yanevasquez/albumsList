import axios from 'axios'

const albums = {

    namespaced: true,
    state: {
        albums: [],
        newAlbum: ''
    },

    mutations: {
        SET_ALBUMS(state, data) {
            state.albums = data
        },
        ADD_ALBUMS(state, data) {
            state.albums.push(data)
        }
    },

    actions: {
        loadAlbums({ commit }) {
            axios
                .get('http://191.252.204.71:8000/albums-list/')
                .then(res => {
                    commit('SET_ALBUMS', res.data)
                })
                .catch(error => console.log(error))
        },
        addAlbum({ commit, state }) {
            if (!state.newAlbum) {
                return 'okay'
            }
            const album = {
                title: state.newAlbum,
                name: state.newAlbum
            }
            axios
                .post('http://191.252.204.71:8000/albums-list/click', album)
                .then(res => {
                    commit('ADD_ALBUMS', res.album)
                })
                .catch(error => {
                    console.log(error.response)
                })
        }
    }
}

export default albums