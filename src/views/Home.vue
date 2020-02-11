<template>
  <div class="home">
    <h1>道の駅一覧</h1>
    <button class="btn btn-primary">test</button>
    <ul id="stations">
      <station-card v-for="(station, key) in stations" :key="key" :station="station"/>
    </ul>
  </div>
</template>

<script>
// import firebase from '@/firebase/config'
import StationCard from '@/components/StationCard.vue'

// const stationsRef = firebase.firestore().collection('stations')

// 一時的に直接読み込んでいる

const stations = require('@/firebase/data/old_stations.json')

export default {
  name: 'home',
  data: function () {
    return {
      stations: stations
    }
  },
  components: {
    StationCard
  },
  created: function () {
    // stationsRef.get().then((querySnapShot) => {
    //   querySnapShot.forEach((doc) => {
    //     this.stations.push({
    //       name: doc.data().name,
    //       id: doc.data().stationId
    //     })
    //   })
    // })
  }
}
</script>

<style>
  #stations {
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 1180px;
    width: 100%;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    margin: 2em auto;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    list-style: none;
  }
  #stations::after {
    content: "";
    display: block;
    width: calc(100% / 3);
  }
</style>
