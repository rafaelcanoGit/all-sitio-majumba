<template>
  <div>
    <hr />

    <section id="proyectos">
      <h1><v-icon color="black">mdi-text-box-multiple</v-icon> Proyectos</h1>
      <br />
      <v-row>
        <v-col cols="0"  md="6"> </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            style="width:60%;float:right"
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
          md="6"
          lg="4"
          v-for="(proyecto, index) in filteredProyectos.slice(
            (this.pagination.page - 1) * this.pagination.perPage,
            this.pagination.page * this.pagination.perPage
          )"
          :key="index"
        >
          <v-card
            elevation="10"
            color="#AA1916"
            style="padding:0 .5rem;"
            dark
          >
            <v-row  >
              <v-col cols="12"  sm="8" lg="6" >
                <v-card-title
                  class="headline"
                  v-text="proyecto.attributes.nombre_documento"
                ></v-card-title>

                <v-card-subtitle
                  style="word-break: normal;"
                  v-text="proyecto.attributes.descripcion"
                >
                </v-card-subtitle>
              </v-col>
              <v-col cols="12" sm="4" lg="6" >
                <v-avatar class="ma-1" size="120" tile>
                  <img
                    :src="proyecto.attributes.imagen"
                  >
                </v-avatar>
                <v-btn class="primary">Descargar</v-btn>
              </v-col>
           </v-row>
          </v-card>
        </v-col>
        <v-pagination
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
          style="padding:3rem;margin:auto auto;"
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
      proyectos: [
        {
          id: 1,
          titulo: "Macroscopología en hongos.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide1.jpg",
        },
        {
          id: 2,
          titulo: "Microorizas y su búsqueda.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide2.jpg",
        },
        {
          id: 3,
          titulo: "Hongos y sus carácteristicas.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide3.jpg",
        },
        {
          id: 4,
          titulo: "Levaduras y sus ventajas.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide4.jpg",
        },
        {
          id: 5,
          titulo: "Bacterias y sus patologias.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide5.jpg",
        },
        {
          id: 6,
          titulo: "Actinomicetos Silvestres .",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide2.jpg",
        },
        {
          id: 7,
          titulo: "Hongos y sus carácteristicas.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide3.jpg",
        },
        {
          id: 8,
          titulo: "Actinomicetos Silvestres .",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide1.jpg",
        },
        {
          id: 9,
          titulo: "Macroscopología en hongos consectetur .",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide4.jpg",
        },
        {
          id: 10,
          titulo: "Bacterias y sus patologias.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide5.jpg",
        },
        {
          id: 11,
          titulo: "Levaduras y sus ventajas.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide2.jpg",
        },
        {
          id: 12,
          titulo: "Microorizas y su búsqueda.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide3.jpg",
        },
        {
          id: 13,
          titulo: "Macroscopología en hongos consectetur .",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide4.jpg",
        },
        {
          id: 14,
          titulo: "Microorizas y su búsqueda.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide2.jpg",
        },
        {
          id: 15,
          titulo: "Hongos y sus carácteristicas.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide3.jpg",
        },
        {
          id: 16,
          titulo: "Levaduras y sus ventajas.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide1.jpg",
        },
        {
          id: 17,
          titulo: "Osos y sus ventajas.",
          descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit, magnam earum consequatur, obcaecati aspernatur molestias recusandae laudantium.",
          foto: "slide5.jpg",
        },
      ],
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
      if (screenWidth < 960 ) {
        this.pagination.perPage = 3;
        return;
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getProyectos"]),
    filteredProyectos() {
      return this.getProyectos.filter((proyecto) => {
        let filterBy = proyecto.attributes.nombre_documento+" "+proyecto.attributes.nombre_autor;
        if (filterBy.toLowerCase().match(this.searchText.toLowerCase())) {
          this.pagination.page = 1;
          return filterBy.toLowerCase().match(this.searchText.toLowerCase());
        }
      });
    },
  },
  created() {
    this.commitProyectos();
    this.perPage();
  },
};
</script>
<style lang="scss" scoped>
#proyectos {
  
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
   background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(../../public/images/fotos/lab.jpg);
  background-size: cover;
  background-attachment: fixed;
}
.headline {
  word-break: normal;
}
</style>
