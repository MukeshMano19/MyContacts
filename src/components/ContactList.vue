<template>
  <div class="contact-list">
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" style="max-width:40px;width:40px"></th>
            <th scope="col">Details</th>
            <th class="action-clmn">Chat</th>
            <th class="action-clmn">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in contacts" :key="i.id" :class="selectedChat.id == i.id ? 'info-bg' : ''">
            <th>
              <img src="../assets/user.svg" width="30" />
            </th>
            <td class="info" @click="startChat(i);setContactView(true)">
              <div class="c-name">{{i.name}}</div>
              <div class="other-info">
                <div>
                  <div>
                  <i class="fas fa-mobile-alt"></i>
                  {{i.phone}}
                  </div>
                  <div>
                    <i class="fas fa-envelope"></i>
                    {{i.email}}
                  </div>
                </div>
                <div>
                  <i class="fas fa-building"></i>
                  {{i.address}}
                </div>
              </div>
            </td>
            <td class="action-clmn">
              <i class="fas fa-comments" @click="startChat(i);setContactView(false)"></i>
            </td>
            <td class="action-clmn">
              <div class="fbox">
                <div style="flex:50%">
              <i
                class="fas fa-user-edit"
                data-toggle="modal"
                data-target="#contactForm"
                @click="setSelectedContact(i)"
              ></i>
              </div>
              <div style="flex:50%">
              <i class="fas fa-trash-alt" @click="deleteContact(i)"></i>
              </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  props: {
    contacts: {
      type: Array
    }
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
      this.$emit("openDrawer");
    },
    ...mapMutations([
      "setSelectedContact",
      "setSelectedChat",
      "createNewConversation",
      "deleteContact",
      "setContactView"
    ])
  }
};
</script>

<style>
.contact-list {
  max-height: 600px;
  overflow-y: auto;
}

.action-clmn {
  text-align: center;
}
.action-clmn .fbox {
  display: flex;
  flex-direction: row wrap;
}
.action-clmn i {
  cursor: pointer;
}

.info {
  cursor: pointer;
}
.info-bg {
  background: #f1f0eb;
}

.info .c-name {
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
}
.info .other-info {
  font-size: 12px;
  font-weight: 400;
  padding: 5px;
  display: flex;
  align-content: flex-start;
}

.other-info i {
  font-size: 9px;
}

@media only screen and (max-width: 768px) {
  .action-clmn .fbox {
  flex-direction: column ;
}

}

@media only screen and (min-width: 992px) and (max-width: 1200px) {

}
</style>