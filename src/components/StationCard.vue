<template>
  <router-link :to="{ name: 'stations', params: { id: station.id } }" class="card">
      {{ station.name }}
  </router-link>
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
</style>
