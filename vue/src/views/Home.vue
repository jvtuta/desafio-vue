<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col sm="10" lg="6">
        <b-card>
          <template #header>
            <b-form>
              <b-input-group size="md" prepend="Url">
                <b-form-input type="text" v-model="url"></b-form-input>
                <template #append>
                  <b-button variant="outline-success" @click="addUrl(url)">+</b-button>
                </template>
              </b-input-group>
            </b-form>
          </template>
          <urls-component />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Urls from '@/components/Urls.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    'urls-component': Urls
  },
  data() {
    return {
      url: ''
    }
  },
  methods: {
    ...mapActions(['addUrl'])
  }
}
</script>
