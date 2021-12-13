<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="6">
        <b-card title="Login">
          <template #header></template>
            <div>
                <b-form>
                    <b-form-group
                      label="Usuário"
                      description="Preencha com seu nome de usuário"
                    >

                        <b-form-input
                            v-model="nome_usuario"
                        >

                        </b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Senha"
                      description="Preencha com sua senha"
                    >

                        <b-form-input
                            v-model="password"
                            type="password"
                        >

                        </b-form-input>
                    </b-form-group>
                </b-form>
            </div>
          <b-button-group size="md" col>
            <b-button variant="success" @click="controlAuthUser({nome_usuario, password})">
              <span v-if="!loading">Login</span>
              <span v-else>
                <b-spinner variant="white" small label="Spinning"></b-spinner>
              </span>
            </b-button>
            <b-button variant="primary">Registrar</b-button>
          </b-button-group>
          <template #footer> </template>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

    data() {
        return {
            nome_usuario: '',
            password: ''
        }
    },
    computed:{
      ...mapGetters(['loading'])
    },
    methods: {
      ...mapActions(['controlAuthUser']),
    }

};
</script>

<style>
</style>