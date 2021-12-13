<template>
  <b-navbar type="dark" variant="success">
    <b-navbar-brand href="#">
      {{ brand }}
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
  props: {
    brand: String,
  },
};
</script>

<style>
</style>