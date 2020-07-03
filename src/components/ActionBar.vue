<template>
  <div class="action-bar my-3">
    <div class="search-field input-group flex-nowrap">
      <div class="input-group-prepend">
        <span class="input-group-text" id="addon-wrapping">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <input
        v-model="searchText"
        type="text"
        class="form-control"
        placeholder="Search..."
        aria-label="Search..."
        aria-describedby="addon-wrapping"
        @input="doSearch(searchText)"
        clearable
      />
    </div>
    <div class="add-contact-btn">
      <button class="add-btn btn my-2 my-sm-0" type="submit" data-toggle="modal" data-target="#contactForm">
        <i class="fas fa-plus" style="font-size:14px"></i>
        Add Contact</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchText: ""
    }
  },
  methods:{
    doSearch(v){
      this.$emit("setSearch",v)
    }
  }
}
</script>

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
  flex: 12%;
  max-width: 12%;
  margin-left: 10px;

}

.action-bar .add-contact-btn .add-btn {
  background: #563d7c;
  color: white;
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
    margin-top: 10px;
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
    flex: 15%;
    max-width: 15%;
  }
}
</style>