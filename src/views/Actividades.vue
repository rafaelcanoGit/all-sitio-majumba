<template>
  <div>
    <hr />
    <section id="actividades">
      <h1><v-icon color="black">mdi-clipboard-list</v-icon> Actividades</h1>
      <br />
      <v-row>
        <v-col>
          <div class="thumb-example">
            <!-- swiper1 -->
            <swiper
              class="swiper gallery-top"
              :options="swiperOptionTop"
              ref="swiperTop"
            >
              <swiper-slide
                v-for="(actividad, index) in getActividades"
                :key="index"
              >
                <v-img
                  @click="goActividad(actividad)"
                  style="height: 12rem; cursor: pointer"
                  :src="actividad.attributes.imagen"
                  :alt="actividad.attributes.titulo"
                >
                </v-img>
                <div id="info">
                  <h3>{{ actividad.attributes.fecha }}</h3>
                </div>
              </swiper-slide>

              <div
                class="swiper-button-next swiper-button-white"
                slot="button-next"
              ></div>
              <div
                class="swiper-button-prev swiper-button-white"
                slot="button-prev"
              ></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper
              class="swiper gallery-thumbs"
              :options="swiperOptionThumbs"
              ref="swiperThumbs"
            >
              <swiper-slide
                v-for="(actividad, index) in getActividades"
                :key="index"
              >
                <v-img style="height: 100%" :src="actividad.attributes.imagen">
                </v-img>
                <!-- <div
                id="img"
                :style='{"background-image": "url(../../public/images/fotos/" + actividad.name + ")" }'
                  >
                </div> -->
              </swiper-slide>
            </swiper>
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
import vuex from "vuex";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-thumbs-gallery",
  title: "Thumbs gallery with Two-way control",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 3, // looped slides should be the same
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        loop: true,
        slidesPerView: 3,
        loopedSlides: 3, // looped slides should be the same
        spaceBetween: 0,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    ...vuex.mapActions(["commitActividades"]),
    goActividad(actividad) {
      if (actividad.tipo == "cuerpo") {
        let id = actividad.id;
        this.$router.push({ name: "actividad", params: { id } });
      } else {
        window.open(actividad.link, "_blank");
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getActividades"]),
  },
  created() {
    this.commitActividades();
  },
};
</script>
<style lang="scss" scoped>
#actividades {
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(../../public/images/fotos/lab.jpg);
  background-size: cover;
  background-attachment: fixed;
}

.thumb-example {
  height: 20rem; //Altura total del swiper
}
.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  &.gallery-top {
    height: 60%; //Altura del primer swiper
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &.gallery-thumbs {
    height: 40%; //Altura del segundo swiper
    box-sizing: border-box;
    padding: 0.5rem 0;
    background-color: black;
  }
  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}

.swiper-button-prev,
.swiper-button-next {
  color: #2196f3;
}

#info {
  position: absolute;
  height: 25%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  padding: 1rem;
  font-size: 1rem;
  min-width: 100%;
  box-sizing: border-box;
}
</style>
