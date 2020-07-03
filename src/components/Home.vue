<template>
  <div class="container">
    <nav class="navbar">
      <span class="app-name navbar-brand mb-0 h1">
        <i class="fas fa-address-book" style="font-size:16px;"></i>
        MyContacts
      </span>

      <form class="form-inline" v-if="contacts.length">
        <i class="fas fa-user" style="font-size:16px;color:#ff4e5a"></i>
        <div class="btn-group">
          <button class="btn btn-disabled">{{loggedInUser.id ? loggedInUser.name : ''}}</button>
          <button
            type="button"
            class="btn btn-light dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
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
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <chat class="chat"></chat>
    </div>
    <div class="empty-handle" v-if="!contacts.length">
        <div class="flex-container">
          <div>
          <img src="../assets/chat.jpg" width="300" />
          <div>Add new contacts to explore!</div>
          <div class="add-contact-btn mt-3">
            <button
              style="border: 1px solid #ff4e5a"
              class="btn my-2 my-sm-0"
              type="submit"
              data-toggle="modal"
              data-target="#contactForm"
            >Add contact</button>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content" v-if="contacts.length">
      <contact-list class="list" @openDrawer="openNav()" :contacts="filteredContacts" v-if="contacts.length > 1"></contact-list>
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
      document.getElementById("nav-drawer").style.width = "330px";
    },
    closeNav() {
      document.getElementById("nav-drawer").style.width = "0";
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
.container {
  background: white;
  min-height: calc(100vh-0px) !important;
}
.app-name {
  font-weight: 600;
  color: #ff4e5a !important;
  letter-spacing: 1px;
}

.main-content {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

.main-content .list {
  flex: 40%;
  max-width: 40%;
}
.main-content .chat {
  flex: 60%;
  max-width: 60%;
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
  padding-top: 40px;
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

  .sidenav{
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

