import { createStore } from "vuex";

const store = createStore({
    state: {
        userInfo: {
            1: {
                name: "Imron",
                activStatus: false,
                avatarPath: "ava1",
            },
            2: {
                name: "Samandar",
                activStatus: false,
                avatarPath: "ava2",
            }
        },
        chatHistory: [],
        chatModal: {
            isOpen: false,
            chatId: null
        }
    },
    mutations: {
        pushMessage(state, payload) {
            state.chatHistory.push(payload)
        },

        changeStatus(state, { id, activBool }) {
            state.userInfo[id].activStatus = activBool
        },

        openOrCloseModal(state, payload) {
            if (payload.chatId) {
                state.chatModal = payload
            }else {
                state.chatModal.isOpen = payload
            }
        }
    },
    actions: {
        setFunction({commit}, contex) {
            if (contex.activBool) {
                commit('changeStatus', contex)
            }else {
                setTimeout(() => commit('changeStatus', contex), 1500)
            }
        }
    },
    getters: {}
})

export default store