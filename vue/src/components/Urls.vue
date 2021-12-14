<template>
  <div class="url-container">
      <template v-for="url in getUrls">
        <url-component  class="url" :key="url.id_url" :url="url"/>
      </template>
  </div>
</template>

<script>
import Url from './Url.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    compoents: {
        'url-component' : Url
    },
    computed: {
        ...mapGetters(['getUrls'])
    },
    methods: {
        ...mapActions(['loadUrls'])
    },
    created() {
        this.loadUrls()
    }


}
</script>

<style scoped>

.url-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.url {
    width: 40%;
}

</style>