<template>
  <section id="noticia">
    <v-row class="ma-5">
      <v-col cols="2" >
        <v-avatar size="80">
          <img
            :src="require('../../public/images/fotos/logoufps.png')"
            alt="logoufps"
          />
        </v-avatar>
      </v-col>
      <v-col cols="8" >
        <h3>{{ noticia.id }}</h3>
        <h1>{{ noticia.title }}</h1>
      </v-col>
      <v-col cols="2" ></v-col>

      <v-col md="2" > </v-col>

      <v-col md="8" >
        <v-img
          height="30vh"
          width="90%"
          style="margin:auto auto"
          :src="require('../../public/images/fotos/' + noticia.name)"
        >
        </v-img>
      </v-col>
      <v-col md="2" ></v-col>

      <v-col md="4" > </v-col>
      <v-col md="4" > </v-col>
      <v-col cols="4" >
        <label for="creado">Creado en: 06/06/2020 </label>
      </v-col>

      <v-col cols="12" >
        <v-container>
          <p>{{ noticia.body }}</p>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import vuex from "vuex";
export default {
  mounted() {},
  data() {
    return {
      noticia: null,
    };
  },
  methods: {
    llenarNoticia() {
      this.noticia = this.getNoticiaId(this.$route.params.id);
    },
  },
  computed: {
    ...vuex.mapGetters(["getNoticiaId"]),
  },
  created() {
    this.llenarNoticia();
  },
};
</script>

<style lang="scss" scoped>
#noticia {
  width: 100%;
  
}
</style>
