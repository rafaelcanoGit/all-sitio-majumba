<template>
  <div>
    <hr />

    <section>
      <h1>
        {{ this.cepa.grupo_microbiano }}:
        {{ this.cepa.codigo }}
      </h1>
      <br />
      <v-card>
        <v-tabs
          v-model="tab"
          background-color="#AA1916"
          centered
          dark
          icons-and-text
        >
          <v-tabs-slider color="#2196f3"></v-tabs-slider>
          <v-tab
            v-for="caractTab in cepasTab"
            :key="caractTab"
            :href="`#${caractTab}`"
          >
            {{ caractTab }}
            <!--          <v-icon v-if="cepa === 'Bacterias'"> mdi-bacteria</v-icon>-->
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="caractTab in cepasTab"
            :key="caractTab"
            :value="caractTab"
          >
            <v-row>
              <v-col cols="0" md="2"></v-col>
              <v-col cols="12" md="8">
                <h1>{{ tab }}</h1>
                 

               <!-- <section v-if="tab === 'Características Macroscópicas'">
                  <div>
                   {{ this.caract_macro[0].attributes }}
                  </div>
                </section> -->
              </v-col>
              <v-col cols="0" md="2"></v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </section>
  </div>
</template>

<script>
import vuex from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      cepa: [],
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
        "Método de Conservación",
      ],
      cepasTabHongos: [
        "Características Macroscópicas",
        "Características Microscópicas",
        "Características Bioquímicas",
        "Identificación Molecular",
        "Método de Conservación",
      ],
      cepasTabActinomicetos: [
        "Características Macroscópicas",
        "Características Microscópicas",
        "Características Bioquímicas",
        "Otras Características",
      ],
      cepasTabLevaduras: [
        "Características Macroscópicas",
        "Características Microscópicas",
        "Características Bioquímicas",
        "Identificación Molecular",
        "Método de Conservación",
      ],
    };
  },
  methods: {
    ...vuex.mapActions(["commitCepa"]),
    llenarCepa() {
      axios
        .get(
          this.$store.state.dominio + "/" + this.$route.params.grupo_microbiano,
          { params: { slug: this.$route.params.slug } }
        )
        .then((res) => {
          this.commitCepa(res.data.data.attributes);
          console.log("Soy la cepa de abajo");
          console.log(res.data.data.attributes.cepa.attributes);
          this.cepa = res.data.data.attributes.cepa.attributes;

          if (this.cepa.grupo_microbiano === "Bacteria") {
            this.cepasTab = this.cepasTabBacterias;
            this.caract_macro = res.data.data.attributes.caract_macro.data;
            this.caract_micro =
              res.data.data.attributes.caract_micro.attributes;
            this.caract_bioqui =
              res.data.data.attributes.caract_bioqui.attributes;
            this.caract_fisio =
              res.data.data.attributes.caract_fisio.attributes;
            this.identi_molecular =
              res.data.data.attributes.identi_molecu.attributes;
            this.metodo_conser =
              res.data.data.attributes.metodo_conser.data.attributes;
            console.log("Soy caract macro de abajo");
            console.log(this.caract_macro);
            console.log("Soy caract micro de abajo");
            console.log(this.caract_micro);
          } else if (this.cepa.grupo_microbiano === "Hongo") {
            this.cepasTab = this.cepasTabHongos;
            this.caract_macro = res.data.data.attributes.caract_macro.data;
            this.caract_micro =
              res.data.data.attributes.caract_micro.attributes;
            this.caract_bioqui =
              res.data.data.attributes.caract_bioqui.attributes;
            this.identi_molecular =
              res.data.data.attributes.identi_molecu.attributes;
            this.metodo_conser =
              res.data.data.attributes.metodo_conser.data.attributes;
          } else if (this.cepa.grupo_microbiano === "Actinomiceto") {
            this.cepasTab = this.cepasTabActinomicetos;
            this.caract_macro = res.data.data.attributes.caract_macro.data;
            this.caract_micro =
              res.data.data.attributes.caract_micro.attributes;
            this.caract_bioqui =
              res.data.data.attributes.caract_bioqui.attributes;
            this.otras_caract =
              res.data.data.attributes.otras_caract.attributes;
          } else if (this.cepa.grupo_microbiano === "Levadura") {
            this.cepasTab = this.cepasTabLevaduras;
            this.caract_macro = res.data.data.attributes.caract_macro.data;
            this.caract_micro =
              res.data.data.attributes.caract_micro.attributes;
            this.caract_bioqui =
              res.data.data.attributes.caract_bioqui.attributes;
            this.identi_molecular =
              res.data.data.attributes.identi_molecu.attributes;
            this.metodo_conser =
              res.data.data.attributes.metodo_conser.data.attributes;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    ...vuex.mapGetters(["getCepa"]),
  },
  created() {
    this.llenarCepa();
  },
};
</script>
<style lang="scss" scoped></style>
