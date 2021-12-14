<template>
  <container-auth>
    <b-card title="Registro">
      <template #header></template>
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
          <b-form-group label="Confirmar senha" description="Confirme a sua senha" type="password">
            <b-form-input v-model="passwordConfirmation" type="password">
            </b-form-input>
          </b-form-group>
        </b-form>
      </div>
      <template #footer>
        <div>
          <b-button-group size="md" col>
            <b-button variant="success" @click="handleButtonRegisterUser">
              Registrar
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
import { mapActions } from 'vuex'
export default {
  components: {
    "container-auth": ContainerAuth,
  },
  data() {
    return {
      user_name: '',
      password: '',
      passwordConfirmation: '',
    };
  },
  computed: {},
  methods: {
    ...mapActions(['']),
    handleButtonRegisterUser() {
      if (this.password === this.passwordConfirmation) {
          
      }
    },
  },
};
</script>

<style>
</style>