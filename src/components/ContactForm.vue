<template>
  <div
    class="modal fade"
    id="contactForm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title cusColor" id="exampleModalLabel"><b>New Contact</b></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="needs-validation" novalidate>
            <div class="form-group row">
              <label for="validationTooltip01" class="col-sm-3 col-form-label">Full Name</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip01"
                  value="Mark"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="validationTooltip02" class="col-sm-3 col-form-label">Email</label>
              <div class="col-sm-9">
                <input type="email" class="form-control" id="validationTooltip02" value required />
              </div>
            </div>
            <div class="form-group row">
              <label for="validationTooltip03" class="col-sm-3 col-form-label">Phone</label>
              <div class="col-sm-9">
                <input type="email" class="form-control" id="validationTooltip03" value required />
              </div>
            </div>
            <div class="form-group row">
              <label for="validationTooltip04" class="col-sm-3 col-form-label">Company</label>
              <div class="col-sm-9">
                <input type="email" class="form-control" id="validationTooltip04" value required />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Address</label>
              <div class="col-sm-9">
                <textarea class="form-control" placeholder="Optional" rows="3"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Close</button>
              <button type="submit" class="btn " style="border: 1px solid #ff4e5a;color:#ff4e5a">Save Contact</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
</script>
