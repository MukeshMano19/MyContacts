<template>
  <div class="contact-list">
    <div v-for="i in 8" :key="i">
      <div
        class="card-body"
        :style="{'background': selectedContact.id == i ? '#ff97a0' : '',
      'color': selectedContact.id == i ? 'black' : ''
      }"
      >
        <div class="profile-img">
          <img src="../assets/user.svg" width="70" />
        </div>
        <div class="info">
          <div class="c-name">Mukesh Manoharan</div>
          <div class="other-info">
            <div>
              <i class="fas fa-mobile-alt"></i>
              8870490623
            </div>
            <div>
              <i class="fas fa-envelope"></i> mukesh@ardgika.com
            </div>
            <div>
              <i class="fas fa-building"></i> company name
            </div>
            <div>
              <i class="fas fa-address-book"></i> AMC Enclave, No. 6, Third Cross Street, Tamil Nadu 600034
            </div>
          </div>
          <div class="card-action" v-if="selectedContact.id != i">
            <div class="edit">
              <button
                type="button"
                class="btn btn-sm"
                data-toggle="modal" data-target="#contactForm"
              >Edit</button>
            </div>
            <div class="start-chat">
              <button type="submit" class="btn btn-sm">
                Start Chat
                <i class="fas fa-comments"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedContact: { id: 1 }
    };
  },
  methods: {
    callFun() {
      alert("hello");
    }
  }
};
</script>

<style>
.contact-list {
  background: #ff4e5a;
  max-height: 550px;
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
  align-self: center;
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
</style>