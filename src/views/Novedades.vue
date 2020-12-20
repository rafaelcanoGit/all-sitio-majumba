<template>
  <div>
    <hr />
    <section id="novedades">
      <h1>
        <v-icon color="black">mdi-newspaper-variant-multiple</v-icon> Novedades
      </h1>
      <br />
      <v-container>
        <v-row justify="center">
          <v-col v-if="getNovedades.length">
            <CarouselCard :interval="5000" type="card" arrow="always">
              <CarouselCardItem v-for="(novedad, i) in getNovedades" :key="i">
                <v-card elevation="10" color="white" class="ma-5" shaped>
                  <v-img
                    :src="novedad.attributes.imagen"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                  >
                    <v-card-title
                      v-text="novedad.attributes.titulo"
                    ></v-card-title>
                  </v-img>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn icon>
                      <v-icon color="redUfps" @click="goNovedad(novedad)"
                        >mdi-eye-plus</v-icon
                      >
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </CarouselCardItem>
            </CarouselCard>
          </v-col>
          <v-col v-else>
            <v-card
              height="30vh"
              elevation="10"
              color="rgb(188,0,23)"
              width="80%"
              style="padding: 3rem; margin: auto auto"
            >
              <h2>No hay novedades</h2>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <br />
    </section>
  </div>
</template>

<script>
import { CarouselCard, CarouselCardItem } from "vue-carousel-card";
import vuex from "vuex";

export default {
  components: {
    CarouselCard,
    CarouselCardItem,
  },
  data() {
    return {};
  },
  methods: {
    ...vuex.mapActions(["commitNovedades"]),

    goNovedad(novedad) {
      if (novedad.attributes.cuerpo) {
        this.$router.push({
          name: "novedad",
          params: { slug: novedad.attributes.slug },
        });
      } else {
        window.open(novedad.attributes.link);
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getNovedades"]),
  },
  created() {
    if (!this.getNovedades.length) {
      this.commitNovedades();
    }
  },
};
</script>
<style lang="scss" scoped>
@import "~vue-carousel-card/styles/index.css";
#novedades {
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
  background: linear-gradient(#e9ecee, #e9ecee);
  background-size: cover;
  background-attachment: fixed;
}
</style>
