<template>
  <div class="chat card">
    <div class="flex-container">
      <div>
        <img src='../assets/chat.jpg' width="300" />
        <div>Select contact to start chating!</div>
      </div>
    </div>
    <!-- <div class="card-body">
    </div> -->
  </div>
</template>

<style>
.chat.card {
  height: 550px;
  border: 1px solid #ff4e5a;
  border-radius: 0px;
}

.flex-container {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.flex-container>div {
  text-align: center;
}
</style>