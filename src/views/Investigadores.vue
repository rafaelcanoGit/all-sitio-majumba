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
        <v-col cols="12" md="6">
          <v-text-field
            color="redUfps"
            style="width: 60%; float: right"
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
          <v-card elevation="10" color="white" class="ma-5" shaped>
            <v-img
              :src="investigador.attributes.imagen"
              :alt="investigador.attributes.nombres"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title
                v-text="
                  investigador.attributes.nombres +
                  ' ' +
                  investigador.attributes.apellidos
                "
              ></v-card-title>
            </v-img>

            <v-card-text class="text-left font-weight-medium">
              <strong class="black--text"> Cargo: </strong>
              {{ investigador.attributes.cargo }} <br />
              <strong class="black--text"> Nivel de estudio: </strong>
              {{ investigador.attributes.nivel_estudio }} <br />
              <strong class="black--text"> Email: </strong>
              {{ investigador.attributes.email }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-subtitle class="text-left redUfps--text">
              <p class="font-italic">Telf: 5763891 Ext: 321</p></v-card-subtitle
            >
          </v-card>
        </v-col>
        <v-pagination
          color="#AA1916"
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
  mounted() {},
  data() {
    return {
      searchText: "",
      pagination: {
        page: 1,
        perPage: 4,
      },
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
      if (screenWidth < 960) {
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
    if (!this.getInvestigadores.length) {
      this.commitInvestigadores();
    }
    this.perPage();
  },
};
</script>

<style lang="scss" scoped>
#investigadores {
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
  background: linear-gradient(#e9ecee, #e9ecee);
  background-size: cover;
  background-attachment: fixed;
}
</style>
