<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <ul id="stations">
      <li v-for="(station, key) in stations" :key="key">
        {{ station.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from '@/firebase/config'

const stationsRef = firebase.firestore().collection('stations')

export default {
  name: 'home',
  data: function () {
    return {
      stations: []
    }
  },
  created: function () {
    stationsRef.get().then((querySnapShot) => {
      querySnapShot.forEach((doc) => {
        this.stations.push({
          name: doc.data().name
        })
      })
    })
  }
}
</script>
