<template>
  <div id="banco">
    <hr />
    <section id="section-1">
      <h1>Banco de Cepas</h1>
      <br />
      <v-card>
        <v-tabs
          v-model="tab"
          background-color="#AA1916"
          centered
          dark
          icons-and-text
        >
          <v-tabs-slider
            color="#2196f3
          "
          ></v-tabs-slider>
          <v-tab
            v-for="cepa in cepasTab"
            :key="cepa"
            :href="`#${cepa}`"
            @click="filteredCepas(cepa)"
          >
            {{ cepa }}
            <v-icon v-if="cepa === 'Todas'">mdi-ballot-outline</v-icon>
            <v-icon v-if="cepa === 'Bacterias'">mdi-bacteria</v-icon>
            <v-icon v-if="cepa === 'Hongos'">mdi-mushroom</v-icon>
            <v-icon v-if="cepa === 'Actinomicetos'">mdi-virus-outline</v-icon>
            <v-icon v-if="cepa === 'Levaduras'">mdi-cookie</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="cepa in cepasTab" :key="cepa" :value="cepa">
            <v-card>
              <v-card-title>
                <h1>{{ tab }}</h1>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :page.sync="page"
                @page-count="pageCount = $event"
                hide-default-footer
                :headers="headers"
                :items="cepas"
                :search="search"
                :items-per-page="itemsPerPage"
                no-data-text="No hay datos aún"
                no-results-text="No existen coincidencias"
              >
                <template v-slot:[`item.actions`]="{ item }">
                  <v-icon color="#2196f3" @click="verItem(item)">
                    mdi-eye
                  </v-icon>
                </template>
              </v-data-table>
              <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-text-field
          style="float: right; width: 20%"
          :value="itemsPerPage"
          label="Items por página"
          type="number"
          min="-1"
          max="10"
          @input="itemsPerPage = parseInt($event, 10)"
        ></v-text-field>
      </v-card>
    </section>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  mounted() {},
  data() {
    return {
      cepasTab: ["Bacterias", "Hongos", "Actinomicetos", "Levaduras"],
      page: 1,
      pageCount: 0,
      itemsPerPage: 5,
      tab: null,
      search: "",
      headers: [
        {
          text: "Código",
          value: "codigo",
        },
        {
          text: "Grupo Microbiano",
          value: "grupo_microbiano",
        },
        {
          text: "Género",
          value: "genero",
        },
        {
          text: "Especie",
          value: "especie",
        },
        {
          text: "Estado",
          value: "estado",
        },
        {
          text: "Origen",
          value: "origen",
        },
        {
          text: "Otras Características",
          value: "otras_caracteristicas",
        },
        { text: "Acción", value: "actions", sortable: false },
      ],
      cepas: [],
      bacterias: [],
      hongos: [],
      actinomicetos: [],
      levaduras: [],
    };
  },
  methods: {
    ...vuex.mapActions([
      "commitBacterias",
      "commitHongos",
      "commitActinomicetos",
      "commitLevaduras",
    ]),

    filteredCepas(cepa) {
      if (cepa === "Bacterias") {
        // this.search= cepa.slice(-cepa.lenght,-1);
        //this.search = cepa.slice(0, -1); //Tbm Sirve
        this.cepas = this.bacterias;
      } else if (cepa === "Hongos") {
        this.cepas = this.hongos;
      } else if (cepa === "Actinomicetos") {
        this.cepas = this.actinomicetos;
      } else if (cepa === "Levaduras") {
        this.cepas = this.levaduras;
      }
    },
    llenarCepas() {
      this.getBacterias.forEach((element) => {
        this.bacterias.push(element.attributes);
      });
      this.getHongos.forEach((element) => {
        this.hongos.push(element.attributes);
      });
      this.getActinomicetos.forEach((element) => {
        this.actinomicetos.push(element.attributes);
      });
      this.getLevaduras.forEach((element) => {
        this.levaduras.push(element.attributes);
      });
      this.cepas = this.bacterias;
    },
    verItem(item) {
      let grupo = item.grupo_microbiano.toLowerCase();
      if (grupo === "Hongo Filamentoso") {
        grupo = "hongo";
      }
      this.$router.push({
        name: "cepa",
        params: { grupo_microbiano: grupo, slug: item.slug },
      });
      console.log(item);
    },
  },
  computed: {
    ...vuex.mapGetters([
      "getCepas",
      "getBacterias",
      "getHongos",
      "getActinomicetos",
      "getLevaduras",
    ]),
  },
  created() {
    this.commitBacterias();
    this.commitHongos();
    this.commitActinomicetos();
    this.commitLevaduras();
    this.llenarCepas();
  },
};
</script>

<style lang="scss" scoped>
#banco {
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(../../public/images/fotos/lab.jpg);
  background-size: cover;
  background-attachment: fixed;
}
#section-1 {
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
}
</style>
