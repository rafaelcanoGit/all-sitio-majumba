<template>
  <section>
    <v-row>
      <v-col md="3"
        ><v-avatar size="80">
          <img
            :src="require('../../public/images/fotos/logoufps.png')"
            alt="logoufps"
          />
        </v-avatar>
      </v-col>
      <v-col md="6">
        <h1>{{ actividad.id }} {{ actividad.title }}</h1>
      </v-col>
      <v-col md="3"> </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col md="2" style="border:3px solid orange"></v-col>
        <v-col md="8" style="border:3px solid yellow">
          <v-img
            style="margin:auto auto"
            height="30vh"
            width="90%"
            :src="require('../../public/images/fotos/' + actividad.name)"
          >
          </v-img>
        </v-col>
        <v-col md="2" style="border:3px solid orange"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>{{ actividad.body }}</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import vuex from "vuex";
export default {
  data() {
    return {
      actividad: null,
    };
  },
  methods: {
    llenarActividad() {
      this.actividad = this.getActividadId(this.$route.params.id);
    },
  },
  computed: {
    ...vuex.mapGetters(["getActividadId"]),
  },
  created() {
    this.llenarActividad();
  },
};
</script>

<style lang="scss" scoped></style>
