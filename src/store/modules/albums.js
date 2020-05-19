import axios from 'axios'

const albums = {

    namespaced: true,

    state: {
        albums: [],
        nt: 'Madonna',
        nn: 'Madonna'

    },
    mutations: {
        SET_ALBUMS(state, data) {
            state.albums = data
        },
        SET(state, nt, nn) {
            state.albums.title.push(nt),
                state.albums.name.push(nn)
        }
    },

    actions: {
        addClick({ commit, state }) {
            const cliK = JSON.stringify({
                title: state.nt,
                name: state.nn
            })
            axios
                .post('http://localhost:3000/albums-list/click', cliK)
                .then(res => {
                    console.log(res.data),
                        commit('SET', res.cliK)
                })
                .catch(error => {
                    console.log(error.res)
                })

        },
        loadAlbums({ commit }) {
            axios
                .get('http://localhost:3000/albums-list/')
                .then(res => {
                    console.log(res.data),
                        commit('SET_ALBUMS', res.data)
                })
                .catch(error => console.log(error))
        }
    },
}
export default albums