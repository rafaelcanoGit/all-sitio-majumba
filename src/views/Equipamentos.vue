<template>
  <div>
    <hr />
    <section id="equipamentos">
      <h1><v-icon color="black">mdi-bag-checked</v-icon> Equipamientos</h1>
      <br />
      <v-row>
        <v-col cols="0" md="6"> </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            color="redUfps"
            style="width: 60%; float: right"
            outlined
            dense
            hint="Nombre, Función"
            persistent-hint
            prepend-icon="mdi-text-box-search"
            label="Buscar"
            v-model="searchText"
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(equipamento, index) in filteredEquipamentos.slice(
            (this.pagination.page - 1) * this.pagination.perPage,
            this.pagination.page * this.pagination.perPage
          )"
          :key="index"
        >
          <v-card elevation="10" color="white" class="ma-5" shaped>
            <v-img
              :src="equipamento.attributes.imagen"
              :alt="equipamento.attributes.nombre"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title
                v-text="equipamento.attributes.nombre"
              ></v-card-title>
            </v-img>
            <v-card-text class="text-left font-weight-medium">
              <strong class="black--text"> Funcion: </strong>
              {{ equipamento.attributes.funcion }}
              <br />
              <strong class="black--text"> Características: </strong>
              <p
                v-line-clamp="5"
                v-text="equipamento.attributes.caracteristicas"
              />
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="abrirModal(equipamento.id)" icon>
                <v-icon color="redUfps">mdi-eye-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-pagination
          color="#AA1916"
          v-model="pagination.page"
          :length="
            Math.ceil(this.filteredEquipamentos.length / pagination.perPage)
          "
        ></v-pagination>
        <v-card
          v-show="!filteredEquipamentos.length"
          height="30vh"
          elevation="10"
          color="rgb(188,0,23)"
          width="80%"
          style="padding: 3rem; margin: auto auto"
        >
          <h2>No existen coincidencias</h2>
        </v-card>
      </v-row>
    </section>
    <dialogo
      :tipo="'equipamiento'"
      :id="idModal"
      :dialog="dialog"
      @cerrarDialogo="dialog = false"
    />
  </div>
</template>
<script>
import vuex from "vuex";
export default {
  data() {
    return {
      searchText: "",
      pagination: {
        page: 1,
        perPage: 6,
      },
      idModal: 0,
      dialog: false,
    };
  },
  methods: {
    ...vuex.mapActions(["commitEquipamientos"]),
    perPage() {
      let screenWidth = screen.width;
      if (screenWidth > 960) {
        this.pagination.perPage = 6;
        return;
      }
      if (screenWidth < 960 && screenWidth > 600) {
        this.pagination.perPage = 4;
        return;
      }
      if (screenWidth < 600) {
        this.pagination.perPage = 2;
        return;
      }
    },
    abrirModal(id) {
      this.idModal = id;
      this.dialog = true;
    },
  },
  computed: {
    ...vuex.mapGetters(["getEquipamientos"]),

    filteredEquipamentos() {
      return this.getEquipamientos.filter((equipamento) => {
        let filterBy =
          equipamento.attributes.nombre + " " + equipamento.attributes.funcion;

        if (filterBy.toLowerCase().match(this.searchText.toLowerCase())) {
          this.pagination.page = 1;
          return filterBy.toLowerCase().match(this.searchText.toLowerCase());
        }
      });
    },
  },
  created() {
    if (!this.getEquipamientos.length) {
      this.commitEquipamientos();
    }
    this.perPage();
  },
};
</script>
<style lang="scss" scoped>
#equipamentos {
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
  background: linear-gradient(#e9ecee, #e9ecee);
  background-size: cover;
  background-attachment: fixed;
}
</style>
