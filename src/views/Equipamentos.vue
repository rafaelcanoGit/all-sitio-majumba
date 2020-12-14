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
          <v-card color="#AA1916" dark>
            <v-row style="padding: 0; margin: 0 0.3rem">
              <v-col md="6" lg="8" style="padding: 0">
                <v-card-title
                  style="word-break: normal"
                  v-text="equipamento.attributes.nombre"
                ></v-card-title>
                <h3 style="word-break: normal">
                  Función: {{ equipamento.attributes.funcion }}
                </h3>
              </v-col>
              <v-col md="6" lg="4" style="padding: 0">
                <v-avatar size="120" class="ma-3" style="margin: auto auto">
                  <v-img :src="equipamento.attributes.imagen"> </v-img>
                </v-avatar>
              </v-col>
            </v-row>
            <v-row>
              <v-col style="padding: 0 1.5rem" md="12">
                <v-textarea
                  color="primary"
                  style="margin: auto auto"
                  outlined
                  label="Características:"
                  readonly
                  filled
                  :value="equipamento.attributes.caracteristicas"
                >
                  <v-icon color="primary">mdi-arrow-right-box</v-icon>
                </v-textarea>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-pagination
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
      equipamentos: [
        {
          id: 1,
          nombre: "Lorem ipsum dolor sit.Lorem ipsum dolor sit",
          funcion: "xxxxx",
          caracteristicas: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",
          ],
          imagen: "slide1.jpg",
        },
        {
          id: 2,
          nombre: "Lorem ipsum dolor sit.",
          funcion: "xxxxx",
          caracteristicas:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis Lorem ipsum dolor sit amet, ",
          imagen: "slide2.jpg",
        },
        {
          id: 3,
          nombre: "Lorem ipsum dolor sit.",
          funcion: "xxxxx",
          caracteristicas:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",
          imagen: "slide3.jpg",
        },
        {
          id: 4,
          nombre: "Lorem ipsum dolor sit.",
          funcion: "xxxxx",
          caracteristicas: "",
          imagen: "slide4.jpg",
        },
        {
          id: 5,
          nombre: "Lorem ipsum dolor sit.",
          funcion: "xxxxx",
          caracteristicas:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",

          imagen: "slide5.jpg",
        },
        {
          id: 6,
          nombre: "There are ipsum dolor sit.",
          funcion: "xxxxx",
          caracteristicas:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",

          imagen: "slide3.jpg",
        },
        {
          id: 7,
          nombre: "Lorem ipsum dolor sit.",
          funcion: "xxxxx",
          caracteristicas:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",

          imagen: "slide1.jpg",
        },
        {
          id: 8,
          nombre: "Lorem ipsum dolor sit.",
          funcion: "xxxxx",
          caracteristicas:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",

          imagen: "slide2.jpg",
        },
        {
          id: 9,
          nombre: "Lorem ipsum dolor sit.",
          funcion: "xxxxx",
          caracteristicas:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",

          imagen: "slide3.jpg",
        },
        {
          id: 10,
          nombre: "Lorem ipsum dolor sit.",
          funcion: "xxxxx",
          caracteristicas:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",

          imagen: "slide4.jpg",
        },
        {
          id: 11,
          nombre: "Lorem ipsum dolor sit.",
          funcion: "xxxxx",
          caracteristicas:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",

          imagen: "slide5.jpg",
        },
        {
          id: 12,
          nombre: "There are ipsum dolor sit.",
          funcion: "xxxxx",
          caracteristicas:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!",

          imagen: "slide3.jpg",
        },
      ],
    };
  },
  methods: {
    ...vuex.mapActions(["commitEquipamentos"]),
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
  },
  computed: {
    ...vuex.mapGetters(["getEquipamentos"]),

    filteredEquipamentos() {
      return this.getEquipamentos.filter((equipamento) => {
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
    this.commitEquipamentos();
    this.perPage();
  },
};
</script>
<style lang="scss" scoped>
#equipamentos {
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(../../public/images/fotos/lab.jpg);
  background-size: cover;
  background-attachment: fixed;
}

@media screen and (max-width: 1960px) {
}
@media screen and (max-width: 1260px) {
}
@media screen and (max-width: 960px) {
}
</style>
