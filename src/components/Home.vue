<template>
  <div class="container">
    <nav class="navbar">
      <span class="app-name navbar-brand mb-0 h1">
        <i class="fas fa-address-book"></i>
        MyContacts
      </span>

      <form class="form-inline" v-if="contacts.length">
        <i class="fas fa-user" style="font-size:14px;"></i>
        <div class="btn-group">
          <button class="btn topbar-btn">{{loggedInUser.id ? loggedInUser.name : ''}}</button>
          <button
            type="button"
            class="btn topbar-btn  dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
           
          >
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <div v-for="(i,idx) in contacts" :key="i.id" v-show="loggedInUser.id != i.id">
              <span class="dropdown-item users" @click="setLoggedInUser(i)">
                <i class="fas fa-user-circle pr-2"></i>
                {{i.name}}
              </span>
              <div
                class="dropdown-divider"
                v-if="contacts.length > 1 && contacts.length - 1 != idx"
              ></div>
            </div>
          </div>
        </div>
        <i class="fas fa-comments pl-4 navbar-chat" @click="openNav()"></i>
      </form>
    </nav>
    <action-bar @setSearch="searchText = $event" v-if="contacts.length > 1"></action-bar>
    <contact-form></contact-form>

    <div id="nav-drawer" class="sidenav">
      <!-- <a href="javascript:void(0)" class="closebtn" >&times;</a> -->
      <chat class="chat" @closeNavBar="closeNav()"></chat>
    </div>
    <div class="empty-handle" v-if="!contacts.length">
      <div class="flex-container">
        <div>
          <img src="../assets/chat.jpg" width="300" />
          <div>Add new contacts to explore!</div>
          <div class="add-contact-btn mt-3">
            <button
              class="btn add-new-btn my-2 my-sm-0"
              type="submit"
              data-toggle="modal"
              data-target="#contactForm"
            >Add New Contact</button>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content" v-if="contacts.length">
      <contact-list
        class="list"
        @openDrawer="openNav()"
        :contacts="filteredContacts"
        v-if="contacts.length > 1"
      ></contact-list>
      <chat class="chat"></chat>
    </div>
  </div>
</template>

<script>
import ActionBar from "./ActionBar";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Chat from "./Chat";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Home",
  components: {
    ActionBar,
    ContactList,
    ContactForm,
    Chat
  },
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    ...mapMutations(["setLoggedInUser"]),
    openNav() {
      let nav = document.getElementById("nav-drawer");
      if (nav) nav.style.width = "330px";
    },
    closeNav() {
      let nav = document.getElementById("nav-drawer");
      if (nav) nav.style.width = "0px";
    }
  },
  computed: {
    ...mapState(["contacts", "loggedInUser"]),
    filteredContacts() {
      return this.contacts.filter(c => {
        return (
          this.loggedInUser.id != c.id &&
          c.name.toLowerCase().match(this.searchText.toLowerCase())
        );
      });
    }
  }
};
</script>

<style>
.navbar{
  background: #322348;
  color: white;
}

.topbar-btn {
  background: #322348;
  color: white;
  font-size: 14px;
  letter-spacing: 1px;
}

.container {
  background: white;
  min-height: calc(100vh-0px) !important;
}
.app-name {
  font-weight: 600;
  letter-spacing: 1.5px;
}

.main-content {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

.main-content .list {
  flex: 60%;
  max-width: 60%;
}
.main-content .chat {
  flex: 40%;
  max-width: 40%;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background: #f1f0eb;
  overflow-x: hidden;
  transition: 0.5s;
  display: none;
}

.sidenav a {
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.navbar-chat {
  display: none;
}

.users {
  font-size: 14px;
  cursor: pointer;
}

.empty-handle {
  display: flex;
  height: 600px;
  justify-content: center;
  align-items: center;
}

.add-new-btn{
  background:#322348;color:white;
  letter-spacing: 1px;
}

@media only screen and (max-width: 768px) {
  .container {
    width: 100% !important;
    max-width: 100% !important;
  }
  .navbar-chat {
    display: inline;
  }
  .main-content .list {
    flex: 100%;
    max-width: 100%;
  }
  .main-content .chat {
    display: none;
  }

  .sidenav {
    display: unset;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .container {
    width: 100% !important;
    max-width: 100% !important;
  }
  .main-content .list {
    flex: 60%;
    max-width: 60%;
  }
  .main-content .chat {
    flex: 40%;
    max-width: 40%;
  }
}
</style>

