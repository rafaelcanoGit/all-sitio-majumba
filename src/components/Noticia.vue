<template>
  <v-container v-if="noticia != null" class="mb-5">
    <v-row align-content="center">
      <v-col md="12" sm="12" cols="12" style="border-bottom: 3px solid #aa1916">
        <v-row>
          <v-col md="10" class="text-md-left pl-10 pt-5">
            <h1 class="mt-5" style="font-size: 36px">Noticia</h1></v-col
          >
          <v-col md="2">
            <v-avatar size="80">
              <img
                :src="require('../../public/images/fotos/logoufps.png')"
                alt="logoufps"
              />
            </v-avatar>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="ma-5">
      <v-col md="9" sm="12" cols="12" class="text-left">
        <h2>{{ noticia.attributes.titulo }}</h2>
      </v-col>
      <v-col md="3" sm="12" cols="12">
        <p class="font-italic">
          Publicado
          {{ noticia.attributes.fecha_creacion | moment("calendar") }}
        </p>
      </v-col>
    </v-row>
    <v-container>
      <div
        class="ck-content text-justify"
        v-html="noticia.attributes.cuerpo"
      ></div>
    </v-container>
  </v-container>
  <v-container v-else-if="error == true">
    <error-404 :mensaje="'No existe esta noticia'" />
  </v-container>
  <v-progress-circular
    class="progress"
    :size="80"
    :width="8"
    color="#aa1916"
    indeterminate
    v-else
  />
</template>
<script>
import vuex from "vuex";
export default {
  data() {
    return {
      error: false,
    };
  },
  mounted() {},
  methods: {
    ...vuex.mapActions(["commitNoticias"]),
  },
  computed: {
    ...vuex.mapGetters(["getNoticias", "getNoticiaSlug"]),
    noticia() {
      return this.getNoticiaSlug(this.$route.params.slug);
    },
  },
  created() {
    if (!this.getNoticias.length) {
      this.commitNoticias();
    }
  },
  watch: {
    getNoticias() {
      if (this.noticia == null) {
        this.error = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.progress {
  margin: 15% 10% 20% 10%;
  align-self: center;
}
</style>
