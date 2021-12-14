<template>
  <container-auth>
    <b-card title="Login">
      <div>
        <b-form>
          <b-form-group
            label="Usuário"
            description="Preencha com seu nome de usuário"
          >
            <b-form-input v-model="user_name"> </b-form-input>
          </b-form-group>
          <b-form-group label="Senha" description="Preencha com sua senha">
            <b-form-input v-model="password" type="password"> </b-form-input>
          </b-form-group>
        </b-form>
      </div>

      <template #footer>
        <div>
          <b-button-group size="md" col>
            <b-button
              variant="success"
              @click="handleButtonAuth()"
            >
              <span v-if="!loading">Login</span>
              <span v-else>
                <b-spinner variant="white" small label="Spinning"></b-spinner>
              </span>
            </b-button>
            <b-button variant="primary" @click="handleButtonRegistro"
              >Registrar</b-button
            >
          </b-button-group>
        </div>
      </template>
    </b-card>
  </container-auth>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ContainerAuth from "@/components/base/ContainerAuth.vue";

export default {
  components: {
    "container-auth": ContainerAuth,
  },
  data() {
    return {
      user_name: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["loading", "isAuth"]),
  },
  watch: {
    isAuth(authState) {
      if (authState) this.$router.push("/");
    },
  },
  methods: {
    ...mapActions(["controlAuthUser"]),
    handleButtonAuth() {

      this.controlAuthUser({
        user_name: this.user_name, 
        password: this.password
      })
      
    },
    handleButtonRegistro() {
      this.$router.push("/registro");
    },
  },
};
</script>

<style>
</style>