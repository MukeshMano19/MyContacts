<template>
  <div class="chat card" :style="{'border': contacts.length > 1 ? '1px solid #563d7c' : 'none'}">
    <div class="flex-container" v-if="!selectedChat.id">
      <div>
        <img src="../assets/chat.jpg" width="300" />
        <div>{{contacts.length == 1 ? 'Add one more contact to start chating!':'Select contact to start chating!'}}</div>
                <div class="add-contact-btn mt-3" v-if="contacts.length == 1">
            <button
              class="btn add-new-btn my-2 my-sm-0"
              type="submit"
              data-toggle="modal"
              data-target="#contactForm"
            >Add New Contact</button>
          </div>
        <div class="close-nav-bar-btn mt-3">
          <button
            style="border: 1px solid #ff4e5a"
            class="btn my-2 my-sm-0"
            type="submit"
            @click="$emit('closeNavBar')"
          >Close</button>
        </div>
      </div>
    </div>
    <div class="card-body" v-else>
      <div class="message-body">
        <div class="cName">{{selectedChat.name}}</div>
        <div style="font-size:10px">{{selectedChat.phone}}</div>
        <div style="height:0.5px;background: #322348;width:100%" class="mt-1 mb-4"></div>
        <div id="chats" class="conversions-body">
          <div  class="conversions" v-for="i in currentConversations" :key="i.timestamp">
            <div class="from" v-if="loggedInUser.id == i.userId">
              <div>
                <span class="message">{{i.message}}</span>
                <div class="time">{{getDateFormat(i.timestamp)}}</div>
              </div>
            </div>
            <div class="to" v-else>
              <div>
                <span class="message">{{i.message}}</span>
                <div class="time">{{getDateFormat(i.timestamp)}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-field input-group mb-3">
        <input
          v-model="message"
          type="text"
          class="form-control"
          placeholder="Send message"
          aria-describedby="basic-addon2"
          style="border: 1px solid #322348"
          @keyup.enter="send(message)"
        />
        <div class="input-group-append">
          <button
            class="btn"
            type="button"
            style="background: #322348;color:white"
            @click="send(message)"
          >
            Send
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
      <div class="close-nav-bar-btn input-group mb-3">
        <button
          class="btn btn-block"
          type="button"
          style="background: #322348;color:white"
          @click="$emit('closeNavBar')"
        >Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    ...mapMutations(["sendMessage"]),
    send(message) {
      if (!message) return;

      let msg = {
        timestamp: Date.now(),
        message: message,
        userId: this.loggedInUser.id
      };
      this.sendMessage(msg);
      this.message = "";
    },
    getDateFormat(ts) {
      var ts_ms = ts;
      var date_ob = new Date(ts_ms);
      var hours = ("0" + date_ob.getHours()).slice(-2);
      var minutes = ("0" + date_ob.getMinutes()).slice(-2);

      return hours + ":" + minutes;
    }
  },
  computed: {
    ...mapState(["selectedChat", "contacts", "messagesHub", "loggedInUser"]),
    ...mapGetters(["currentConversations"])
  }
};
</script>

<style>
.chat.card {
  height: 100%;
  min-height: 580px;
  border-radius: 0px;
  margin-left: 15px;
}

.flex-container {
  display: flex;
  height: 100%;
  min-height: 580px;
  justify-content: center;
  align-items: center;
}

.flex-container > div {
  text-align: center;
}

.card-body {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.card-body .message-body {
  flex: 100%;
}

.message-body .cName{
  font-weight:600;
  text-transform:uppercase;
  color: "#322348"
}

.conversions-body {
  height: 400px;
  overflow-y: auto;
}

.conversions {
  display: flex;
  flex-wrap: wrap;
}
.conversions .time {
  font-size: 9px;
  margin-top: 10px;
}
.conversions .to {
  flex: 100%;
  text-align: left;
  font-size: 14px;
  margin-top: 15px;
}

.conversions .from {
  flex: 100%;
  text-align: right;
  font-size: 14px;
  margin-top: 15px;
  margin-right: 15px;
}
.conversions .to .message {
  background: #f1f0eb;
  padding: 10px;
  border-radius: 35px;
  border-bottom-left-radius: 0px;
}
.conversions .from .message {
  background: #322348;
  color: white;
  padding: 10px;
  border-radius: 35px;
  border-bottom-right-radius: 0px;
}

.close-nav-bar-btn {
  display: none;
}

@media only screen and (max-width: 768px) {
  .close-nav-bar-btn {
    display: unset;
  }
}
</style>