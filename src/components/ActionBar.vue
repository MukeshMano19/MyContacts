<template>
  <div class="action-bar my-3">
    <div class="search-field input-group flex-nowrap">
      <div class="input-group-prepend">
        <span class="input-group-text" id="addon-wrapping">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Search..."
        aria-label="Search..."
        aria-describedby="addon-wrapping"
      />
    </div>
    <div class="add-contact-btn">
      <button style="border: 1px solid #ff4e5a" class="btn my-2 my-sm-0" type="submit" data-toggle="modal" data-target="#contactForm">Add contact</button>
    </div>
  </div>
</template>


<style>
.action-bar {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  width: 100%;
}

.action-bar .search-field {
  flex: 30%;
  max-width: 30%;
}

.action-bar .add-contact-btn {
  flex: 10%;
  max-width: 10%;
  margin-left: 10px;
}

@media only screen and (max-width: 768px) {
  .action-bar {
    flex-flow: column;
    align-items: flex-end;
  }
  .action-bar .search-field {
    flex: 100%;
    max-width: 100%;
  }
  .action-bar .add-contact-btn {
    flex: 40%;
    max-width: 40%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .action-bar {
    flex-flow: row;
  }
  .action-bar .search-field {
    flex: 60%;
    max-width: 60%;
  }
  .action-bar .add-contact-btn {
    flex: 30%;
    max-width: 30%;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .action-bar .search-field {
    flex: 60%;
    max-width: 60%;
  }
  .action-bar .add-contact-btn {
    flex: 12%;
    max-width: 12%;
  }
}
</style>