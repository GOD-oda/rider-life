<template>
  <div id="station">
    <h1>[TODO] 道の駅 {{ station.name }} へ行った人</h1>
    <ul>
      <li>尾田</li>
    </ul>
  </div>
</template>

<script>
const stations = require('@/firebase/data/stations.json')

export default {
  name: 'Station',
  data: function () {
    return {
      station: {}
    }
  },
  created: function () {
    const id = Number(this.$route.params.id)
    for (let i = 0; i < stations.length; i++) {
      let stationId = stations[i]['id']
      if (id === stationId) {
        this.station = {
          name: stations[i]['name']
        }
        break
      }
    }
  }
}
</script>

<style lang="scss">
#station {
  ul {
    list-style: none;
  }
}
</style>
