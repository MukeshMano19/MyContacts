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
          <div class="card-action">
            <div class="edit">
              <button
                type="button"
                class="btn btn-sm"
                data-toggle="modal"
                data-target="#contactForm"
                @click="setSelectedContact(i)"
              >Edit</button>
            </div>
            <div class="start-chat">
              <button type="submit" class="btn btn-sm" @click="setSelectedChat(i)">
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
import { mapMutations, mapState } from "vuex";
export default {
  props: {
    contacts: {
      type: Array
    }
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['selectedChat'])
  },
  methods: {
    ...mapMutations(["setSelectedContact", "setSelectedChat"])
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
}
.info .other-info {
  font-size: 12px;
}

.other-info i {
  font-size: 9px;
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .card-action .start-chat {
    flex: 50%;
    max-width: 50%;
  }
}
</style>