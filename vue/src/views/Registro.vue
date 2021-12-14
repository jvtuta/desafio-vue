<template>
  <container-auth>
    <b-card title="Registro">
      <div>
        <b-form>
          <b-form-group
            label="Usuario"
            description="Preencha com seu nome de usuario"
          >
            <b-form-input v-model="user_name"></b-form-input>
          </b-form-group>
          <b-form-group label="Senha" description="Digite sua senha">
            <b-form-input v-model="password" type="password"> </b-form-input>
          </b-form-group>
          <b-form-group
            label="Confirmar senha"
            description="Confirme a sua senha"
            type="password"
          >
            <b-form-input v-model="passwordConfirmation" type="password">
            </b-form-input>
          </b-form-group>
        </b-form>
      </div>
      <template #footer>
        <div>
          <b-button-group size="md" col>
            <b-button variant="success" @click="handleButtonRegisterUser">
              <span v-if="!loading">Registrar</span>
              <span v-else>
                <b-spinner variant="white" small label="Spinning"></b-spinner>
              </span>
            </b-button>
            <b-button variant="primary" @click="$router.push('/login')">
              Login
            </b-button>
          </b-button-group>
        </div>
      </template>
    </b-card>
  </container-auth>
</template>

<script>
import ContainerAuth from "@/components/base/ContainerAuth.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    "container-auth": ContainerAuth,
  },
  data() {
    return {
      user_name: "",
      password: "",
      passwordConfirmation: "",
    };
  },
  computed: {
    ...mapGetters(["loading"]),
  },
  methods: {
    ...mapActions(["registerUser"]),
    handleButtonRegisterUser() {
      if (this.password === this.passwordConfirmation) {
        this.registerUser({
          user_name: this.user_name,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style>
</style>