<template>
  <div class="container">
    <nav class="navbar">
      <span class="app-name navbar-brand mb-0 h1">
         <i class="fas fa-address-book" style="font-size:16px;"></i>  
        MyContacts</span>

      <form class="form-inline">
        <i class="fas fa-user" style="font-size:16px;color:#ff4e5a"></i>
        <div class="btn-group">
          <button  class="btn btn-disabled">Mukesh Manoharan</button>
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
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
        <i class="fas fa-comments pl-4 navbar-chat" @click="openNav()"></i>
      </form>
    </nav>
    <action-bar @setSearch="searchText = $event"></action-bar>
    <contact-form></contact-form>

    <div id="nav-drawer" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <chat></chat>
    </div>

    <div class="main-content">
      <contact-list class="list" :contacts="filteredContacts"></contact-list>
      <chat class="chat"></chat>
    </div>
  </div>
</template>

<script>
import ActionBar from "./ActionBar";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Chat from "./Chat";
import {mapState} from "vuex";

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
      searchText: ''
    };
  },
  methods: {
    openNav() {
      document.getElementById("nav-drawer").style.width = "330px";
    },
    closeNav() {
      document.getElementById("nav-drawer").style.width = "0";
    }
  },
  computed: {
    ...mapState(["contacts"]),
    filteredContacts(){
      return this.contacts.filter(c => {
        return c.name.toLowerCase().match(this.searchText.toLowerCase());
      })
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
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
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

