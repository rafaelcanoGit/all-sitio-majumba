<template>
  <div>
    <hr />
    <section id="actividades">
      <h1><v-icon color="black">mdi-clipboard-list</v-icon> Actividades</h1>
      <v-container>
        <v-row justify="center">
          <v-col v-if="getActividades.length">
            <CarouselCard
              :interval="5000"
              type="card"
              arrow="always"
              height="400px"
              color="redUfps"
            >
              <CarouselCardItem
                v-for="(actividad, i) in getActividades"
                :key="i"
              >
                <v-card elevation="10" color="white" class="ma-5" shaped>
                  <v-img
                    :src="actividad.attributes.imagen"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                  >
                    <v-card-title
                      v-text="actividad.attributes.titulo"
                    ></v-card-title>
                  </v-img>

                  <v-card-actions>
                    <v-card-subtitle>
                      <strong> Fecha: </strong>
                      {{ actividad.attributes.fecha | moment("DD-MM-YYYY") }}
                      <br />
                      <strong> Lugar: </strong>
                      {{ actividad.attributes.lugar }}
                    </v-card-subtitle>
                    <v-spacer />
                    <v-btn icon>
                      <v-icon color="redUfps" @click="goActividad(actividad)"
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
              <h2>No hay actividades</h2>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <br />
    </section>
  </div>
</template>
<script>
import vuex from "vuex";

import { CarouselCard, CarouselCardItem } from "vue-carousel-card";
export default {
  components: {
    CarouselCard,
    CarouselCardItem,
  },
  data() {
    return {};
  },
  methods: {
    ...vuex.mapActions(["commitActividades"]),

    goActividad(actividad) {
      if (actividad.attributes.cuerpo) {
        this.$router.push({
          name: "actividad",
          params: { slug: actividad.attributes.slug },
        });
      } else {
        window.open(actividad.attributes.link);
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getActividades"]),
  },
  created() {
    if (!this.getActividades.length) {
      this.commitActividades();
    }
  },
};
</script>
<style lang="scss" scoped>
@import "~vue-carousel-card/styles/index.css";
#actividades {
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
  background: linear-gradient(#e9ecee, #e9ecee);
  background-size: cover;
  background-attachment: fixed;
}
</style>
