<template>
  <div class="contact-info">
    <div>
      <img src="../assets/user.svg" width="100" />
    </div>

    <form class="mt-4">
      <div class="form-group row">
        <label for="colFormLabelSm" class="header col-sm-6">Name</label>
        <div class="col-sm-6 value">{{contact.name}}</div>
      </div>
      <div class="form-group row">
        <label for="colFormLabelSm" class="header col-sm-6">Phone</label>
        <div class="col-sm-6 value">{{contact.phone}}</div>
      </div>
      <div class="form-group row">
        <label for="colFormLabelSm" class="header col-sm-6">Email</label>
        <div class="col-sm-6 value">{{contact.email}}</div>
      </div>
      <div class="form-group row">
        <label for="colFormLabelSm" class="header col-sm-6">Company</label>
        <div class="col-sm-6 value">{{contact.company}}</div>
      </div>
      <div class="form-group row">
        <label for="colFormLabelSm" class="header col-sm-6">Address</label>
        <div class="col-sm-6 value">{{contact.address}}</div>
      </div>
    </form>
    <div class="mt-5">
      <button
        style="background: #322348;color:white"
        class="btn my-2 my-sm-0"
        type="butten"
        @click="setContactView(false)"
      >Start Chatting</button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    contact: {
      type: Object
    }
  },
  methods: {
    ...mapMutations(["setContactView"]),
  }
};
</script>
<style>
.contact-info {
  width: 100%;
}
.contact-info .header {
  text-align: right;
  font-size: 14px;
  font-weight: 600;
}
.contact-info .value {
  text-align: left;
  padding-right: 30px;
  font-size: 14px;
}
</style>