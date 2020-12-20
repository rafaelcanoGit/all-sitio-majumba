<template>
  <div>
    <hr />
    <section id="proyectos">
      <h1><v-icon color="black">mdi-text-box-multiple</v-icon> Proyectos</h1>
      <br />
      <v-row>
        <v-col cols="0" md="6"> </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            color="redUfps"
            style="width: 60%; float: right"
            outlined
            dense
            hint="Titulo"
            persistent-hint
            prepend-icon="mdi-text-box-search"
            label="Buscar"
            v-model="searchText"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(proyecto, index) in filteredProyectos.slice(
            (this.pagination.page - 1) * this.pagination.perPage,
            this.pagination.page * this.pagination.perPage
          )"
          :key="index"
        >
          <v-card elevation="10" color="white" class="ma-5" shaped>
            <v-img
              :src="proyecto.attributes.imagen"
              :alt="proyecto.attributes.nombre_documento"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title
                v-text="proyecto.attributes.nombre_documento"
              ></v-card-title>
            </v-img>
            <v-card-text class="text-left font-weight-medium">
              <strong class="black--text"> Autor: </strong>
              {{ proyecto.attributes.nombre_autor }}<br />
              <strong class="black--text"> Descripción: </strong>
              <p v-line-clamp="5" v-text="proyecto.attributes.descripcion" />
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="abrirModal(proyecto.id)" icon>
                <v-icon color="redUfps">mdi-eye-plus</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon
                  color="redUfps"
                  @click="abrirDocumento(proyecto.attributes.descargar)"
                  >mdi-file-pdf-outline</v-icon
                >
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-pagination
          color="redUfps"
          v-model="pagination.page"
          :length="
            Math.ceil(this.filteredProyectos.length / pagination.perPage)
          "
        ></v-pagination>
        <v-card
          v-show="!filteredProyectos.length"
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
      :tipo="'proyecto'"
      :id="idModal"
      :dialog="dialog"
      @cerrarDialogo="dialog = false"
    />
  </div>
</template>

<script>
import vuex from "vuex";
import Dialogo from "../components/Dialogo.vue";
export default {
  components: { Dialogo },
  data() {
    return {
      idModal: 0,
      dialog: false,
      searchText: "",
      pagination: {
        page: 1,
        perPage: 6,
      },
    };
  },
  methods: {
    ...vuex.mapActions(["commitProyectos", "commitPublicaciones"]),
    perPage() {
      let screenWidth = screen.width;
      if (screenWidth > 1260) {
        this.pagination.perPage = 6;
        return;
      }
      if (screenWidth < 1260 && screenWidth > 960) {
        this.pagination.perPage = 4;
        return;
      }
      if (screenWidth < 960) {
        this.pagination.perPage = 3;
        return;
      }
    },
    abrirModal(id) {
      this.idModal = id;
      this.dialog = true;
    },
    abrirDocumento(url) {
      window.open(url);
    },
  },
  computed: {
    ...vuex.mapGetters(["getProyectos"]),
    filteredProyectos() {
      return this.getProyectos.filter((proyecto) => {
        let filterBy =
          proyecto.attributes.nombre_documento +
          " " +
          proyecto.attributes.nombre_autor;
        if (filterBy.toLowerCase().match(this.searchText.toLowerCase())) {
          this.pagination.page = 1;
          return filterBy.toLowerCase().match(this.searchText.toLowerCase());
        }
      });
    },
  },
  created() {
    if (!this.getProyectos.length) {
      this.commitProyectos();
    }
    this.perPage();
  },
};
</script>
<style lang="scss" scoped>
#proyectos {
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
  background: linear-gradient(#e9ecee, #e9ecee);
  background-size: cover;
  background-attachment: fixed;
}
.headline {
  word-break: normal;
}
</style>
