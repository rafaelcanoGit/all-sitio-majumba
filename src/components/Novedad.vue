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
        <h1>{{ novedad.id }} {{ novedad.title }}</h1>
      </v-col>
      <v-col md="3"> </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col md="2"  ></v-col>
        <v-col md="8" >
          <v-img
          style="margin:auto auto"
          height="30vh"
          width="90%"
          :src="require('../../public/images/fotos/'+novedad.name)">
          </v-img>

        </v-col>
        <v-col md="2" style="border:3px solid orange"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>{{ novedad.body }}</p>
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
      novedad: null,
    };
  },
  methods: {
    llenarNovedad() {
      this.novedad = this.getNovedadId(this.$route.params.id);
      console.log(this.novedad)
    },
  },
  computed: {
    ...vuex.mapGetters(["getNovedadId"]),
  },
  created() {
    this.llenarNovedad();
  },
};
</script>

<style lang="scss" scoped></style>
