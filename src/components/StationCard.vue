<template>
  <li class="station-card">
    <router-link :to="{ name: 'stations', params: { id: station.id } }">
      {{ station.name }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'StationCard',
  props: {
    station: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .station-card {
    border: solid 1px;
    margin: 10px auto;
    padding: 5px;
    width: 100%;
  }
  @media all and (min-width: 992px) {
    .station-card {
      width: calc(96% / 3);
    }
  }
</style>
