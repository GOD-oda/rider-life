<template>
<!--  <div id="header">-->
<!--    <div id="logo">-->
<!--      <img src="https://placehold.jp/50x50.png" alt="">-->
<!--    </div>-->

<!--    <div id="title">-->
<!--      Rider-life-->
<!--    </div>-->

<!--    <div id="user-image">-->
<!--      <img src="https://placehold.jp/50x50.png" alt="">-->
<!--    </div>-->
<!--  </div>-->
  <div id="header">
    <div id="logo">
      <img src="https://placehold.jp/50x50.png" alt="">
    </div>
    <div id="title">
      Rider-life
    </div>
    <div id="user-image">
      <img src="https://placehold.jp/50x50.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
#header {
  display: flex;
  justify-content: space-between;
  height: 56px;
  align-items: center;

  #logo {
    img {
      vertical-align: middle;
    }
  }
  #user-image {
    img {
      vertical-align: middle;
      border-radius: 50%;
    }
  }
}
</style>
