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
          <v-card elevation="10" color="#AA1916" style="padding: 1rem" dark>
            <v-img :src="publicacion.attributes.imagen" height="12rem"> </v-img>
            <v-card-title style="color: #f5f5f5; word-break: normal">
              {{ publicacion.attributes.nombre_documento }}
            </v-card-title>
            <v-card-subtitle>
              {{ publicacion.attributes.descripcion }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn style="margin: auto auto" class="primary">Descargar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-pagination
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
    this.commitPublicaciones();
    this.perPage();
  },
};
</script>

<style lang="scss" scoped>
#publicaciones {
  padding: 4rem 2rem 1rem 2rem;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(../../public/images/fotos/lab.jpg);
  background-size: cover;
  background-attachment: fixed;
}
</style>
