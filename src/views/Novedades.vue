<template>
  <div>
    <hr />

    <section id="novedades">
      <h1>
        <v-icon color="black">mdi-newspaper-variant-multiple</v-icon> Novedades
      </h1>
      <br />
      <v-row>
        <v-col cols="0" lg="1"> </v-col>
        <v-col cols="12" lg="10" style="background:#AA1916">
          <carousel-3d
            :autoplay="true"
            :autoplayTimeout="3000"
            :loop="true"
            :controls-visible="true"
            :controls-prev-html="'&#10092;'"
            :controls-next-html="'&#10093;'"
            :space="220"
            :height="270"
            :width="700"
            :border="4"
            :perspective="70"
            :clickable="false"
            :count="getNovedades.length"
          >
            <slide
              class="slide"
              v-for="(novedad, index) in getNovedades"
              :index="index"
              :key="index"
            >
              <figure @click="goNovedad(novedad)">
                <img
                  :src="novedad.attributes.imagen"
                />
                <figcaption>
                  {{ novedad.attributes.titulo }}
                </figcaption>
              </figure>
            </slide>
          </carousel-3d>
        </v-col>
        <v-col cols="0" lg="1"> </v-col> </v-row
      ><br />
    </section>
  </div>
</template>

<script>
import vuex from "vuex";
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {};
  },
  methods: {
    ...vuex.mapActions(["commitNovedades"]),

    goNovedad(novedad) {
      if (novedad.tipo == "cuerpo") {
        let id = novedad.id;
        this.$router.push({ name: "novedad", params: { id } });
      } else {
        window.open(novedad.link, "_blank");
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getNovedades"]),
  },
  created() {
    this.commitNovedades();
},
};
</script>
<style lang="scss" scoped>
#novedades {
  
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(../../public/images/fotos/lab.jpg);
  background-size: cover;
  background-attachment: fixed;
}

.carousel-3d-container {
  figure {
    // preview.css es el que contiene las clases
    margin: 0;
  }
  figcaption {
    position: absolute;
    height: 30%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    bottom: 0;
    bottom: 0;
    padding: 1rem;
    font-size: 1rem;
    min-width: 100%;
    box-sizing: border-box;
  }
  .next,
  .prev {
    //Por alguna razón no cambia, pero es la directva
    color: #fff;
  }
}
.slide {
  cursor: pointer;
  border: solid #2196f3;
}
</style>
