<template>
  <div class="contact-list">
    <div v-for="i in contacts" :key="i.id">
      <div
        class="card-body"
        :style="{'background': selectedChat.id == i.id ? '#ff97a0' : '',
      'color': selectedChat.id == i.id ? '' : ''
      }"
      >
        <div class="profile-img">
          <img src="../assets/user.svg" width="70" />
        </div>
        <div class="info">
          <div class="c-name">{{i.name}}</div>
          <div class="other-info">
            <div>
              <i class="fas fa-mobile-alt"></i>
              {{i.phone}}
            </div>
            <div>
              <i class="fas fa-envelope"></i>
              {{i.email}}
            </div>
            <div>
              <i class="fas fa-building"></i>
              {{i.company}}
            </div>
            <div>
              <i class="fas fa-address-book"></i>
              {{i.address}}
            </div>
          </div>
          <div class="card-action mt-3">
            <div class="edit">
              <button
                type="button"
                class="btn btn-sm btn-outline-light btn-block"
                data-toggle="modal"
                data-target="#contactForm"
                @click="setSelectedContact(i)"
              >Edit</button>
            </div>
            <div class="start-chat ml-1">
              <button type="submit" class="btn btn-sm btn-outline-light btn-clock" @click="startChat(i)">
                Start Chat
                <i class="fas fa-comments"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style="width:100%;height:1px;background:white"></div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  props: {
    contacts: {
      type: Array
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["selectedChat"]),
    ...mapGetters(["checkUserConversation"])
  },
  methods: {
    async startChat(user) {
      var isAlreadyMessaged = await this.checkUserConversation(user.id);
      if (!isAlreadyMessaged) {
        this.createNewConversation(user);
      }
      this.setSelectedChat(user);
      this.$emit("openDrawer")
    },
    ...mapMutations([
      "setSelectedContact",
      "setSelectedChat",
      "createNewConversation"
    ])
  }
};
</script>

<style>
.contact-list {
  background: #ff4e5a;
  max-height: 600px;
  overflow-y: auto;
}
.contact-list .card {
  border-radius: 0px;
}
.contact-list .card-body {
  display: flex;
  color: white;
  cursor: pointer;
}

.contact-list .card-body .profile-img {
  flex: 25%;
  max-width: 25%;
}
.contact-list .card-body .info {
  flex: 70%;
  max-width: 70%;
}

.contact-list .card-body .card-action {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-top: 5px;
}

.card-action button {
  color: white;
}

.card-action .edit {
  flex: 20%;
  max-width: 20%;
}
.card-action .start-chat {
  flex: 40%;
  max-width: 40%;
}

.info .c-name {
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
}
.info .other-info {
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
}

.other-info i {
  font-size: 9px;
}

@media only screen and (max-width: 768px) {
  .contact-list .card-body .profile-img {
  flex: 30%;
  max-width: 30%;
}
.contact-list .card-body .info {
  flex: 70%;
  max-width: 70%;
}
.card-action .edit {
  flex: 50%;
  max-width: 50%;
}
.card-action .start-chat {
  flex: 50%;
  max-width: 50%;
}
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .card-action .start-chat {
    flex: 50%;
    max-width: 50%;
  }
}
</style>