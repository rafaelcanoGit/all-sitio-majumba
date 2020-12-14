<template>
  <section>
    <v-row>
      <v-col cols="4" style="padding:0 0 0 5rem;border:3px solid yellow">
        <v-img
          style="border:3px solid blue"
          height="15vh"
          width="80%"
          :src="require('../../public/images/fotos/LOGO_COMPROMETIDOS.png')"
        >
        </v-img>
      </v-col>
      <v-col cols="4" style="border:3px solid red">
        <h1 style="margin-top:1rem;">
          <v-icon color="black">mdi-account-box</v-icon> Investigador
        </h1>
      </v-col>
      <v-col cols="4"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-card
          shaped
          style="margin:auto auto;padding:0.5rem 2rem"
          elevation="10"
          color="#AA1916"

          width="80%"
        >
          <v-row>
            <v-avatar size="50" >
              <img
                :src="require('../../public/images/fotos/logoufps.png')"
                alt="logoufps"
              />
            </v-avatar>
            <v-avatar size="280" style="margin:auto auto">
              <img
                height="40vh"
                width="60%"
                :src="investigador.attributes.imagen"
              />
            </v-avatar>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-row v-for="(atributo, index) in atributosInvestigador" :key="index">
          <v-col cols="4">
            <label
              style="margin:auto auto;font-weight:bold"
              :for="atributos[index]"
              >{{ atributos[index]}}:</label
            >
          </v-col>
          <v-col cols="8" style="padding:0;">
            <v-text-field
              style="width:100%;margin: auto 0;" 
              :hint="atributos[index]"
              persistent-hint
              dense
              outlined
              readonly
              :value="atributo"
            >
            </v-text-field
          ></v-col>
        </v-row>
      </v-col>
      <v-col cols="4" style=" padding:1rem;">
        <v-img
          style="margin:auto auto"
          height="50vh"
          width="90%"
          :src="require('../../public/images/fotos/Science.gif')"
        >
        </v-img>
      </v-col>
    </v-row>
    <br>
  </section>
</template>
<script>
import vuex from "vuex";
export default {
  mounted() {},
  data() {
    return {
      investigador: null,
      atributos: ["Nombres", "Apellidos", "Email", "Nivel de Estudio", "Cargo"],
    };
  },
  methods: {
    llenarInvestigador() {
      this.investigador = this.getInvestigadorId(this.$route.params.id);
    },
  },
  computed: { 
    ...vuex.mapGetters(["getInvestigadorId"]),

    atributosInvestigador() {
      return Object.entries(this.investigador.attributes)
        .slice(0,5)
        .map((entry) => entry[1]); //Retorna Array de una parte del Objeto
    },
  },
  created() {
    this.llenarInvestigador();
    console.log(this.atributosInvestigador);
    console.log(this.$router.currentRoute.fullPath);
  },
};
</script>
<style lang="scss" scoped>



</style>
