<template>
  <div v-if="name !== ''" id="container">
    <div id="user">
      <div id="image">
        <img src="https://dummyimage.com/100x100/7a7a7a/000000.jpg" alt="">
      </div>
      <div id="name">
        <h2>
          名前
        </h2>
        <div class="text">
          {{ name }}
        </div>
      </div>
      <div id="bikes">
        <h2>
          愛車
        </h2>
        <ul>
          <li v-for="(bikeName, key) in bikes" :key="key" class="text">
            {{ bikeName }}
          </li>
        </ul>
      </div>
      <div id="user-stations">
        <h2>行った道の駅</h2>
        <ul>
          <li v-for="(station, key) in stations" :key="key" class="text">
            {{ station }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>404</h1>
  </div>
</template>

<script>
import firebase from '@/firebase/config'

export default {
  name: 'User',
  data: function () {
    return {
      name: '尾田',
      bikes: [
        'NINJA 400',
        'GSX 1000R'
      ],
      stations: [
        '道の駅A',
        '道の駅B',
        '道の駅C'
      ]
    }
  },
  created: function () {
    const uid = this.$route.params.id
    firebase.firestore().collection('users').doc(uid).get().then(doc => {
      this.name = doc.data().name
    })
  }
}
</script>

<style lang="scss">
  #container {
    padding: 10px;
  }

  h2 {
    border-bottom: black solid 3px;
    margin: 10px auto;
    padding: 5px;
    text-align: left;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 1180px;
    width: 100%;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    li {
      margin: 5px;
      border: solid 1px;
      width: calc(90% / 2);
    }
  }

  .text {
    font-size: 1.5rem;
  }
</style>
