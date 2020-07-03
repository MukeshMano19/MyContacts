import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedInUser: null,
        contacts: [],
        selectedContact: {},
        selectedChat: {},
        messagesHub: [],
        currentConv: null
    },
    getters: {
        getId: (state) => {
            return state.contacts.length + 1;
        },
        checkUserConversation: (state) => (userId) => {
            if (state.messagesHub && state.messagesHub.length) {
                var logUser = loggedInUserData(state)

                console.log(logUser)

                var found = logUser.conversationWith.find(m => {
                    return m.userId == userId
                })

                if (found) return true
                return false
            }
            return false
        },
        currentConversations: (state) => {
            if (state.currentConv && state.currentConv.length) {
                var result = state.currentConv.sort((a, b) => {
                    let d1 = a.timestamp;
                    let d2 = b.timestamp;
                    if (d1 < d2) return -1;
                    if (d1 > d2) return 1;
                    return 0;
                });
                return result
            }
            return []
        }
    },
    mutations: {
        setLoggedInUser(state, user) {
            console.log("Setting logged")
            state.loggedInUser = user
            state.selectedChat = {}

            var logUser = loggedInUserData(state)

            if (!logUser) {
                let data = {
                    userId: user.id,
                    conversationWith: []
                }
                state.messagesHub.push(data)
            }
        },
        createNewConversation(state, user) {
            var loggedInUser = loggedInUserData(state)
            console.log(loggedInUser)
            let data = {
                userId: user.id,
                messages: []
            }
            loggedInUser.conversationWith.push(data)

            let index = state.messagesHub.indexOf(loggedInUser)

            Vue.set(state.messagesHub[index], 'conversationWith', loggedInUser.conversationWith);
        },

        sendMessage(state, data) {
            var logUser = loggedInUserData(state)
            var found = logUser.conversationWith.find(m => {
                return m.userId == state.selectedChat.id
            })

            found.messages.push(data)
            let midx = logUser.conversationWith.indexOf(found)
            Vue.set(logUser.conversationWith[midx], 'messages', found.messages);
            let uidx = state.messagesHub.indexOf(logUser)
            Vue.set(state.messagesHub[uidx], 'conversationWith', logUser.conversationWith);
            // state.currentConv = fromMessages(state).concat(toMessages(state))
            state.currentConv = [...new Set([...fromMessages(state), ...toMessages(state)])];
        },
        setSelectedContact(state, contact) {
            state.selectedContact = contact
        },
        setSelectedChat(state, chat) {
            state.selectedChat = chat
                // state.currentConv = fromMessages(state).concat(toMessages(state))
            state.currentConv = [...new Set([...fromMessages(state), ...toMessages(state)])];
        },
        addNewContact(state, contact) {
            state.contacts.push(contact)
        },
        updateContact(state, contact) {
            var foundIndex = state.contacts.findIndex(x => x.id == contact.id);
            state.contacts[foundIndex] = contact;
        }
    },
})

const loggedInUserData = (state) => {
    return state.messagesHub.find(m => {
        return m.userId == state.loggedInUser.id
    })
}

const fromMessages = (state) => {
    var fromUsr = loggedInUserData(state)

    var from = fromUsr.conversationWith.find(m => {
        return m.userId == state.selectedChat.id
    })

    return Array.from(from.messages)
}

const toMessages = (state) => {
    var found = state.messagesHub.find(m => {
        return m.userId == state.selectedChat.id
    })
    if (!found) return []

    var to = found.conversationWith.find(m => {
        return m.userId == state.loggedInUser.id
    })

    if (!to) return []

    return Array.from(to.messages)
}