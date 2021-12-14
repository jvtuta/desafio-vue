<template>
  <div>
    <span>Urls cadastradas</span>
    <div class="url-container">
      <template v-if="urls.fk_user === getUser.id">
        <template v-for="url in getUrls">
          <url-component class="url" :key="url.id_url" :url="url">
          </url-component>
        </template>
      </template>
      <template v-else>
        <template v-for="url in getUrls">
          <url-component class="url" :key="url.id_url" :url="url">
          </url-component>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import UrlComponent from "@/components/Url.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    "url-component": UrlComponent,
  },
  computed: {
    ...mapGetters(["getUrls", "getUser"]),
  },
  methods: {
    ...mapActions(["loadUrls"]),
  },
  created() {
    this.loadUrls();
  },
};
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