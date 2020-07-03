<template>
  <div class="chat card">
    <div class="flex-container" v-if="!selectedChat.id">
      <div>
        <img src="../assets/chat.jpg" width="300" />
        <div>Select contact to start chating!</div>
      </div>
    </div>
    <div class="card-body" v-else>
      <div class="message-body">
        <div style="font-weight:600">{{selectedChat.name}}</div>
        <div style="font-size:10px">{{selectedChat.phone}}</div>
        <div style="height:0.5px;background: #ff4e5a;width:100%" class="mt-1 mb-4"></div>
        <div class="conversions-body">
          <div class="conversions" v-for="i in 8" :key="i">
            <div class="to">
              <span class="message">{{selectedChat.phone}}</span>
            </div>
            <div class="from">
              <span class="message">{{selectedChat.phone}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-field input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Send message"
          aria-describedby="basic-addon2"
          style="border: 1px solid #ff4e5a"
        />
        <div class="input-group-append">
          <button class="btn" type="button" style="background: #ff4e5a;color:white">
            Send
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["selectedChat"])
  }
};
</script>

<style>
.chat.card {
  height: 600px;
  border: 1px solid #ff4e5a;
  border-radius: 0px;
}

.flex-container {
  display: flex;
  height: 100%;
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

.conversions-body{
  height: 420px;
  overflow-y: auto;
}

.conversions {
  display: flex;
  flex-wrap: wrap;
}
.conversions .to {
  flex: 100%;
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
}

.conversions .from {
  flex: 100%;
  text-align: right;
  font-size: 14px;
  margin-top: 10px;
  margin-right: 15px;
}
.conversions .to .message {
  background: #f1f0eb;
  padding: 10px;
  border-radius: 35px;
  border-bottom-left-radius: 0px;
}
.conversions .from .message {
  background: #ff4e5a;
  color: white;
  padding: 10px;
  border-radius: 35px;
  border-bottom-right-radius: 0px;
}
</style>