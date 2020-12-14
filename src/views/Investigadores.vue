<template>
  <div>
    <hr />
    <section id="investigadores">
      <h1>
        <v-icon color="black">mdi-account-multiple</v-icon> Investigadores
      </h1>
      <br />
      <v-row>
        <v-col cols="0" md="6"> </v-col>
        <v-col cols="12" md="6" >
          <v-text-field
     
            style="width:60%;float:right"
            outlined
            dense
            hint="Nombre, Cargo"
            persistent-hint
            prepend-icon="mdi-account-search"
            label="Buscar"
            v-model="searchText"
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(investigador, index) in filteredInvestigadores.slice(
            (this.pagination.page - 1) * this.pagination.perPage,
            this.pagination.page * this.pagination.perPage
          )"
          :key="index"
        >
          <v-card
            elevation="10"
            color="#AA1916"
            style="padding:1rem"
            dark
          >
            <v-row>
              <v-col cols="3" style="padding:0"
                ><v-avatar size="50">
                  <img
                    :src="require('../../public/images/fotos/logoufps.png')"
                    alt="logoufps"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="6" style="padding:0">
                <v-avatar size="90">
                  <img
                    :src="investigador.attributes.imagen "
                    :alt="investigador.attributes.nombres"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="3" style="padding:0"> </v-col>
            </v-row>

            <h3>{{ investigador.attributes.nombres }} {{ investigador.attributes.apellidos }}</h3>

            <v-card-subtitle
              >{{ investigador.attributes.cargo }}<br />
              {{ investigador.attributes.nivel_estudio }}</v-card-subtitle
            >
            <v-card-text style="color:#005cb2;font-weight:bold">
              Telf: 5763891 Ext: 321</v-card-text
            >
            <v-btn
              @click="goInvestigador(investigador.id)"
              dark
              class="primary"
              color="white"
              >Ver</v-btn
            >
          </v-card>
        </v-col>
        <v-pagination
          v-model="pagination.page"
          :length="
            Math.ceil(
              this.filteredInvestigadores.length / this.pagination.perPage
            )
          "
        ></v-pagination>
        <v-card
          v-show="!filteredInvestigadores.length"
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
  mounted() {},
  data() {
    return {
      searchText: "",
      pagination: {
        page: 1,
        perPage: 4,
      },
      investigadores: [
        {
          id: 1,
          nombre: "Ramiro",
          apellido: "Cáceres",
          cargo: "Investigador",
          nivel_estudio: "Profesional",
          email: "ramiro@gamil.com",
          foto: "investigador1.png",
        },
        {
          id: 2,
          nombre: "Rafael",
          apellido: "Cano",
          cargo: "Director",
          nivel_estudio: "Profesional",
          email: "rafaelcano432@gmail.com",
          foto: "investigador3.jpg",
        },
        {
          id: 3,
          nombre: "Esteban",
          apellido: "Cáceres",
          cargo: "Investigador",
          nivel_estudio: "Profesional",
          email: "ramiro@gamil.com",
          foto: "investigador1.png",
        },
        {
          id: 4,
          nombre: "Miguel",
          apellido: "Cáceres",
          cargo: "Analista",
          nivel_estudio: "Profesional",
          email: "ramiro@gamil.com",
          foto: "investigador2.png",
        },
        {
          id: 5,
          nombre: "Manuel",
          apellido: "Cáceres",
          cargo: "Investigador",
          nivel_estudio: "Profesional",
          email: "ramiro@gamil.com",
          foto: "investigador1.png",
        },
        {
          id: 6,
          nombre: "Luis",
          apellido: "Cáceres",
          cargo: "Analista",
          nivel_estudio: "Profesional",
          email: "ramiro@gamil.com",
          foto: "investigador2.png",
        },
      ],
    };
  },
  methods: {
    ...vuex.mapActions(["commitInvestigadores"]),
    
    goInvestigador(id) {
      this.$router.push({ name: "investigador", params: { id } });
    },
     perPage() {
      let screenWidth = screen.width;
      if (screenWidth > 1260) {
        this.pagination.perPage = 4;
        return;
      }
      if (screenWidth < 1260 && screenWidth > 960) {
        this.pagination.perPage = 3; 
        return;
      }
      if (screenWidth < 960 ) {
        this.pagination.perPage = 2;
        return;
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getInvestigadores"]),

    filteredInvestigadores() {
      return this.getInvestigadores.filter((investigador) => {
        let filterBy =
          investigador.attributes.nombres +
          " " +
          investigador.attributes.apellidos +
          " " +
          investigador.attributes.cargo;
        
        if (filterBy.toLowerCase().match(this.searchText.toLowerCase())) {
          this.pagination.page = 1;
          return filterBy.toLowerCase().match(this.searchText.toLowerCase());
        }
      });
    },
  },
  created() {
    this.commitInvestigadores();
    this.perPage();
  },
};
</script>

<style lang="scss" scoped>
#investigadores {
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(../../public/images/fotos/lab.jpg);
  background-size: cover;
  background-attachment: fixed;
}

</style>
