<template>
  <div class="home">
    <h1>道の駅一覧</h1>
    <div class="container">
      <div v-for="(station, key) in stations" :key="key" :station="station" class="row row-cols-2">
        <div class="col mb-1">
          <station-card :key="key" :station="station[0]"/>
        </div>
        <div class="col mb-1">
          <station-card :key="key" :station="station[1]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from '@/firebase/config'
import StationCard from '@/components/StationCard.vue'

// const stationsRef = firebase.firestore().collection('stations')

// 一時的に直接読み込んでいる

const stationsData = require('@/firebase/data/stations.json')

export default {
  name: 'home',
  data: function () {
    return {
      stations: []
    }
  },
  components: {
    StationCard
  },
  created: function () {
    const dataLength = stationsData.length
    let idx = 0
    let n = 2
    let stations = []

    while (idx < dataLength) {
      const result = stationsData.slice(idx, idx + n)
      stations.push(result)

      idx = idx + n
    }

    this.stations = stations
  }
}
</script>

<style>
</style>
