<template>
  <section id="section-1">
    <div id="div-identidad">
      <v-row>
        <v-col lg="8" md="8" sm="8">
          <v-img
            width="50%"
            id="logoUfps"
            :src="require('../../public/images/fotos/' + logoUfps)"
          >
          </v-img>
        </v-col>
        <v-col lg="4" md="4" sm="4">
          <v-img
            max-width="30%"
            id="escudoColombia"
            :src="require('../../public/images/fotos/' + EscudoColombia)"
          >
          </v-img>
        </v-col>
      </v-row>
    </div>

    <v-row v-if="getNoticias.length">
      <v-col cols="12" md="8">
        <!-- index lleva seguimiento del carousel, ya que internamente aumenta solo -->
        <v-carousel
          v-model="index"
          id="carousel"
          height="55vh"
          cycle
          interval="5000"
          continuous
          progress
          progress-color="red"
          delimiter-icon="mdi mdi-checkbox-blank-circle-outline"
          show-arrows-on-hover
          :touch="{
            left: () => index++,
            right: () => index--,
          }"
        >
          <v-carousel-item
            id="item"
            v-for="(noticia, i) in getNoticias"
            :key="i"
            reverse-transition="scale-transition"
            transition="scale-transition"
            ripple
            :src="noticia.attributes.imagen"
          >
          </v-carousel-item> </v-carousel
      ></v-col>
      <v-col cols="12" md="4">
        <h3>
          <v-icon size="20" color="black">mdi-newspaper-variant</v-icon>
          Noticias
        </h3>
        <div
          id="noticia-titulo"
          v-for="(noticia, i) in getNoticias"
          :key="i"
          :class="[
            index === i ? 'noticia-titulo-hover' : 'noticia-titulo', // `condition ? value if true : value if false`
          ]"
          @click="GoIndex(i)"
        >
          <v-row class="ml-1">
            <v-col cols="10" xl="10" lg="9" md="9" sm="9">
              <p class="white--text text-left" v-line-clamp="2">
                {{ noticia.attributes.titulo }}
              </p>
            </v-col>
            <v-col cols="2" xl="2" lg="3" md="3" sm="3">
              <v-btn
                id="btn-ver-noticia"
                color="#ffff"
                @click="GoNoticia(noticia)"
                >Ver más
              </v-btn></v-col
            >
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <v-card
          height="30vh"
          elevation="10"
          color="rgb(188,0,23)"
          width="80%"
          style="padding: 3rem; margin: auto auto"
        >
          <h2>No hay noticias</h2>
        </v-card>
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
      index: 0,
      logoUfps: "Logo-ufps.png",
      EscudoColombia: "escudo_colombia.png",
      noticias: [],
    };
  },
  methods: {
    ...vuex.mapActions(["commitNoticias"]),
    GoNoticia(noticia) {
      if (noticia.attributes.cuerpo) {
        this.$router.push({
          name: "noticia",
          params: { slug: noticia.attributes.slug },
        });
      } else {
        window.open(noticia.attributes.link);
      }
    },
    GoIndex(value) {
      this.index = value;
    },
  },
  computed: {
    ...vuex.mapGetters(["getNoticias"]),
  },
  created() {
    if (!this.getNoticias.length) {
      this.commitNoticias();
    }
  },
};
</script>

<style lang="scss" scoped>
#section-1 {
  width: 100%;
  background: linear-gradient(#e9ecee, #e9ecee);
  background-size: cover;
  background-attachment: fixed;
}

#div-identidad {
  width: 100%;
  background-size: cover;
  background-attachment: fixed;
  text-align: -webkit-center;
}

#carousel {
  margin: 1.5rem auto;
  width: 95%;
}
.noticia-titulo {
  /* Caract iniciales del div titulo noticia */
  height: 4rem;
  width: 98%;
  margin: 0.3rem;
  background-color: #aa1916;
}
.noticia-titulo-hover,
#noticia-titulo:hover {
  /* Caract en hover del div titulo noticia */ /* Caract en MouseHover del div titulo noticia */
  font-weight: bold;
  height: 4.5rem;
  width: 100%;
  margin-left: -2rem;
  background-color: #aa1916a8;
}

#noticia-titulo {
  /*Caract diseño div titulo noticia */
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  z-index: 100;
}

#btn-ver-noticia {
  margin: 0.5rem;
  width: 100%;
  font-size: 0.6rem;
  float: right;
}

@media screen and (max-width: 1260px) {
  /* On screens that are 960px or less*/
  #logoUfps {
    width: 80%;
  }
  #escudoColombia {
    width: 30%;
  }

  #carousel {
    margin: auto;
  }
  .noticia-titulo {
    width: 88%;
    margin-left: 11%;
  }
  .noticia-titulo-hover {
    height: 5rem;
    width: 90%;
    margin-left: 1rem;
  }
  #noticia-titulo:hover {
    height: 5rem;
    width: 90%;
    margin-left: 1rem;
  }
}
@media screen and (max-width: 960px) {
  #logoUfps {
    width: 70%;
  }
  #escudoColombia {
    width: 35%;
  }
}
@media screen and (max-width: 812px) {
  #logoUfps {
    width: 80%;
  }
  #escudoColombia {
    width: 35%;
  }
}
@media screen and (max-width: 676px) {
  #logoUfps {
    width: 90%;
  }
  #escudoColombia {
    width: 20%;
  }
}
@media screen and (max-width: 560px) {
  #logoUfps {
    width: 100%;
  }
  #escudoColombia {
    width: 50%;
  }
}
@media screen and (max-width: 450px) {
  #logoUfps {
    width: 100%;
  }
  #escudoColombia {
    width: 50%;
  }
}
</style>
