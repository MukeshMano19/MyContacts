import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logeedInUser: { id: '' },
        contacts: [],
        selectedContact: {},
        selectedChat: {},
        messages: []
    },
    getters: {
        getId: (state) => {
            return state.contacts.length + 1;
        },
    },
    mutations: {
        setLoggedInUser(state, user) {
            state.logeedInUser = user
        },
        setSelectedContact(state, contact) {
            state.selectedContact = contact
        },
        setSelectedChat(state, chat) {
            state.selectedChat = chat
        },
        addNewContact(state, contact) {
            if (!state.contacts.length) {
                state.logeedInUser = contact
            }
            state.contacts.push(contact)
        },
        updateContact(state, contact) {
            var foundIndex = state.contacts.findIndex(x => x.id == contact.id);
            state.contacts[foundIndex] = contact;
        }
    },
    actions: {},
    modules: {}
})