<template>
  <div
    class="modal fade"
    id="contactForm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="vuemodal"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title cusColor" id="exampleModalLabel">
            <b>New Contact</b>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="contact_form" class="needs-validation" novalidate>
            <div class="form-group row">
              <label for="validationTooltip01" class="col-sm-3 col-form-label">Full Name</label>
              <div class="col-sm-9">
                <input
                  v-model="contact.name"
                  type="text"
                  class="form-control"
                  id="validationTooltip01"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="validationTooltip02" class="col-sm-3 col-form-label">Email</label>
              <div class="col-sm-9">
                <input
                  v-model="contact.email"
                  type="email"
                  class="form-control"
                  id="validationTooltip02"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="validationTooltip03" class="col-sm-3 col-form-label">Phone</label>
              <div class="col-sm-9">
                <input
                  v-model="contact.phone"
                  type="number"
                  class="form-control"
                  id="validationTooltip03"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="validationTooltip04" class="col-sm-3 col-form-label">Company</label>
              <div class="col-sm-9">
                <input
                  v-model="contact.company"
                  type="text"
                  class="form-control"
                  id="validationTooltip04"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Address</label>
              <div class="col-sm-9">
                <textarea
                  v-model="contact.address"
                  class="form-control"
                  placeholder="Optional"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                id="close-btn"
                class="btn btn-outline-dark"
                data-dismiss="modal"
                @click="close()"
              >Close</button>

              <button
                type="submit"
                class="btn"
                style="border: 1px solid #ff4e5a;color:#ff4e5a"
                @click="save(contact)"
              >Save Contact</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      contact: {}
    };
  },
  computed: {
    ...mapState(["selectedContact"]),
    ...mapGetters(["getId"])
  },
  methods: {
    ...mapMutations(["addNewContact", "updateContact", "setSelectedContact"]),
    save(data) {
      if (!document.getElementById("contact_form").reportValidity()) {
        return;
      }

      if (data.id) {
        this.updateContact(data);
      } else {
        data.id = this.getId;
        this.addNewContact(data);
      }

      document.getElementById("close-btn").click();
      this.close()
    },
    close() {
     this.setSelectedContact({});
     this.contact = {};
    }
  },
  watch: {
    selectedContact(v) {      
      this.contact = v;
    }
  }
};

</script>
