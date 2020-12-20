<template>
  <div>
    <hr />
    <section id="publicaciones">
      <h1>
        <v-icon color="black">mdi-file-document-edit</v-icon> Publicaciones
      </h1>
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
            prepend-icon="mdi-file-search"
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
          style="boder: 3px solid yellow"
          v-for="(publicacion, index) in filteredPublicaciones.slice(
            (this.pagination.page - 1) * this.pagination.perPage,
            this.pagination.page * this.pagination.perPage
          )"
          :key="index"
        >
          <v-card elevation="10" color="white" class="ma-5" shaped>
            <v-img
              :src="publicacion.attributes.imagen"
              :alt="publicacion.attributes.nombre_documento"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title
                v-text="publicacion.attributes.nombre_documento"
              ></v-card-title>
            </v-img>
            <v-card-text class="text-left font-weight-medium">
              <strong class="black--text"> Autor: </strong>
              {{ publicacion.attributes.nombre_autor }}<br />
              <strong class="black--text"> Descripción: </strong>
              <p v-line-clamp="5" v-text="publicacion.attributes.descripcion" />
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="abrirModal(publicacion.id)" icon>
                <v-icon color="redUfps">mdi-eye-plus</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon
                  color="redUfps"
                  @click="abrirDocumento(publicacion.attributes.descargar)"
                  >mdi-file-pdf-outline</v-icon
                >
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-pagination
          color="#AA1916"
          v-model="pagination.page"
          :length="
            Math.ceil(this.filteredPublicaciones.length / pagination.perPage)
          "
        >
        </v-pagination>
        <v-card
          v-show="!filteredPublicaciones.length"
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
      :tipo="'publicacion'"
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
    ...vuex.mapActions(["commitPublicaciones"]),
    perPage() {
      let screenWidth = screen.width;
      if (screenWidth > 1260) {
        this.pagination.perPage = 8;
        return;
      }
      if (screenWidth < 1260 && screenWidth > 960) {
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
    abrirDocumento(url) {
      window.open(url);
    },
  },
  computed: {
    ...vuex.mapGetters(["getPublicaciones"]),
    filteredPublicaciones() {
      return this.getPublicaciones.filter((publicacion) => {
        let filterBy =
          publicacion.attributes.nombre_documento +
          " " +
          publicacion.attributes.nombre_autor;
        if (filterBy.toLowerCase().match(this.searchText.toLowerCase())) {
          this.pagination.page = 1;
          return filterBy.toLowerCase().match(this.searchText.toLowerCase());
        }
      });
    },
  },

  created() {
    if (!this.getPublicaciones.length) {
      this.commitPublicaciones();
    }
    this.perPage();
  },
};
</script>

<style lang="scss" scoped>
#publicaciones {
  padding: 4rem 2rem 1rem 2rem;
  background: linear-gradient(#e9ecee, #e9ecee);
  background-size: cover;
  background-attachment: fixed;
}
</style>
