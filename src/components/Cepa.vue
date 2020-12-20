<template>
  <div v-if="infoCepa.info">
    <hr />
    <v-container>
      <v-row justify="center">
        <v-col cols="8" md="6" lg="6" xl="8" sm="8">
          <table class="table tabla-cepa">
            <thead>
              <tr>
                <th colspan="2" class="white--text">Cepa Microbiana</th>
              </tr>
            </thead>
            <tbody class="grey--text">
              <tr>
                <td>
                  <b class="black--text">Código:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.codigo }}
                </td>
                <td>
                  <b class="black--text">Grupo Microbiano:</b>
                  {{
                    infoCepa.info.attributes.cepa.attributes.grupo_microbiano
                  }}
                </td>
              </tr>
              <tr>
                <td>
                  <b class="black--text">Genero:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.genero }}
                </td>
                <td>
                  <b class="black--text">Especie:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.especie }}
                </td>
              </tr>
              <!-- actinomiceto-->
              <tr
                v-if="
                  mostrarOtrosTipos &&
                  $route.params.grupo_microbiano == 'actinomiceto'
                "
              >
                <td>
                  <b class="black--text">Reino:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.reino }}
                </td>
                <td>
                  <b class="black--text">Phylum:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.phylum }}
                </td>
              </tr>
              <tr
                v-if="
                  mostrarOtrosTipos &&
                  $route.params.grupo_microbiano == 'actinomiceto'
                "
              >
                <td>
                  <b class="black--text">Clase:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.clase }}
                </td>
                <td>
                  <b class="black--text">Orden:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.orden }}
                </td>
              </tr>
              <!-- levadura-->
              <tr
                v-if="
                  mostrarOtrosTipos &&
                  $route.params.grupo_microbiano == 'levadura'
                "
              >
                <td>
                  <b class="black--text">Clase:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.clase }}
                </td>
                <td>
                  <b class="black--text">Orden:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.orden }}
                </td>
              </tr>
              <tr
                v-if="
                  mostrarOtrosTipos &&
                  $route.params.grupo_microbiano == 'levadura'
                "
              >
                <td>
                  <b class="black--text">Familia:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.familia }}
                </td>
                <td>
                  <b class="black--text">Division:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.division }}
                </td>
              </tr>
              <!-- hongo-->
              <tr
                v-if="
                  mostrarOtrosTipos && $route.params.grupo_microbiano == 'hongo'
                "
              >
                <td>
                  <b class="black--text">Familia:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.familia }}
                </td>
                <td>
                  <b class="black--text">Phylum:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.phylum }}
                </td>
              </tr>
              <tr
                v-if="
                  mostrarOtrosTipos && $route.params.grupo_microbiano == 'hongo'
                "
              >
                <td>
                  <b class="black--text">Clase:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.clase }}
                </td>
                <td>
                  <b class="black--text">Orden:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.orden }}
                </td>
              </tr>
              <tr>
                <td>
                  <b class="black--text">Estado:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.estado }}
                </td>
                <td>
                  <b class="black--text">Origen:</b>
                  {{ infoCepa.info.attributes.cepa.attributes.origen }}
                </td>
              </tr>
              <tr
                v-if="
                  infoCepa.info.attributes.cepa.attributes.otras_caracteristicas
                "
              >
                <td colspan="2">
                  <b class="black--text">Otras características:</b>
                  {{
                    infoCepa.info.attributes.cepa.attributes
                      .otras_caracteristicas
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </v-col>
      </v-row>
    </v-container>
    <v-card>
      <v-tabs
        v-model="tab"
        background-color="#AA1916"
        centered
        dark
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab
          v-for="caractTab in cepasTab"
          :key="caractTab"
          :href="`#${caractTab}`"
        >
          {{ caractTab }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="caractTab in cepasTab"
          :key="caractTab"
          :value="caractTab"
        >
          <div v-if="$route.params.grupo_microbiano == 'bacteria'">
            <bacteria :cepa="infoCepa.info" :caract="caractTab" />
          </div>

          <div v-else-if="$route.params.grupo_microbiano == 'hongo'">
            <hongo :cepa="infoCepa.info" :caract="caractTab" />
          </div>
          <div v-else-if="$route.params.grupo_microbiano == 'levadura'">
            <levadura :cepa="infoCepa.info" :caract="caractTab" />
          </div>
          <div v-else>
            <actinomiceto :cepa="infoCepa.info" :caract="caractTab" />
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
  <v-container v-else-if="infoCepa.error">
    <error-404 :mensaje="infoCepa.error" />
  </v-container>
  <v-progress-circular
    class="progress"
    :size="80"
    :width="8"
    color="#aa1916"
    indeterminate
    v-else
  />
</template>

<script>
import Bacteria from "./cepas/Bacteria.vue";
import Hongo from "./cepas/Hongo.vue";
import Levadura from "./cepas/Levadura.vue";
import Actinomiceto from "./cepas/Actinomiceto.vue";
import vuex from "vuex";
export default {
  components: { Bacteria, Hongo, Levadura, Actinomiceto },
  data() {
    return {
      mostrarOtrosTipos: false,
      otrosTipos: [],
      tab: null,
      cepasTab: [],
      caract_macro: [],
      caract_micro: [],
      caract_bioqui: [],
      caract_fisio: [],
      identi_molecular: [],
      metodo_conser: [],
      otras_caract: [],
      cepasTabBacterias: [
        "Características Macroscópicas",
        "Características Microscópicas",
        "Características Bioquímicas",
        "Características Fisiológicas",
        "Identificación Molecular",
        "Métodos de Conservación",
      ],
      cepasTabHongos: [
        "Características Macroscópicas",
        "Características Microscópicas",
        "Características Bioquímicas",
        "Identificación Molecular",
        "Métodos de Conservación",
      ],
      cepasTabActinomicetos: [
        "Características Macroscópicas",
        "Características Microscópicas",
        "Identificación Bioquímica",
        "Otras Características",
      ],
      cepasTabLevaduras: [
        "Características Macroscópicas",
        "Características Microscópicas",
        "Características Bioquímicas",
        "Identificación Molecular",
        "Métodos de Conservación",
      ],
    };
  },
  methods: {
    ...vuex.mapActions([
      "commitCaractBacterias",
      "commitCaractHongos",
      "commitCaractLevaduras",
      "commitCaractActinomicetos",
    ]),
    llenarDatos() {
      switch (this.$route.params.grupo_microbiano) {
        case "bacteria":
          this.commitCaractBacterias(this.$route.params.slug);
          this.cepasTab = this.cepasTabBacterias;
          this.mostrarOtrosTipos = false;
          break;
        case "hongo":
          this.commitCaractHongos(this.$route.params.slug);
          this.cepasTab = this.cepasTabHongos;
          this.mostrarOtrosTipos = true;
          break;
        case "actinomiceto":
          this.commitCaractActinomicetos(this.$route.params.slug);
          this.cepasTab = this.cepasTabActinomicetos;
          this.mostrarOtrosTipos = true;
          break;
        case "levadura":
          this.commitCaractLevaduras(this.$route.params.slug);
          this.cepasTab = this.cepasTabLevaduras;
          this.mostrarOtrosTipos = true;
          break;
      }
    },
  },
  computed: {
    ...vuex.mapState(["infoCepa"]),
  },
  created() {
    this.llenarDatos();
  },
};
</script>
<style lang="css" scoped>
.progress {
  margin: 15% 10% 15% 10%;
  align-self: center;
}
.tabla-cepa > thead > tr > th {
  border: 1px solid black;
  text-align: center;
  background-color: #aa1916;
  padding-top: 1px;
  padding-bottom: 1px;
}

.tabla-cepa > tbody > tr > td {
  text-align: left;
  border: 1px solid black;
  padding: 5px;
}

.tabla-header {
  padding: 5px;
}
</style>
