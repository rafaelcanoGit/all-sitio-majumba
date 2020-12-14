<template>
  <section id="section-1">
    <div id="div-identidad">
      <v-row>
        <v-col cols="8" md="6">
          <v-img
            id="logoUfps"
            :src="require('../../public/images/fotos/' + logoUfps)"
          >
          </v-img>
        </v-col>
        <v-col cols="4" md="6">
          <v-img
            id="escudoColombia"
            :src="require('../../public/images/fotos/' + EscudoColombia)"
          >
          </v-img>
        </v-col>
      </v-row>
    </div>

    <v-row>
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
          </v-carousel-item> 
        </v-carousel
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
          <v-row>
            <v-col cols="10">
              <p>{{ noticia.attributes.titulo }}</p>
            </v-col>
            <v-col cols="2">
              <v-btn
                id="btn-ver-noticia"
                class="primary"
                @click="GoNoticia(noticia)"
                >Ver más
              </v-btn></v-col
            >
          </v-row>
        </div>
      </v-col>
    </v-row>
    <!--  <router-link :to="{ name: 'Home' }">Home</router-link>

      <router-view name="home" />
        Para las rutas, el componente se muestra acá -->
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
      noticias: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam modi velit totam voluptatibus, quidem officiis veritatis! Expedita, blanditiis exercitationem cupiditate provident asperiores unde laudantium aliquid. Rerum molestiae facilis harum nam debitis asperiores, at aperiam ea optio praesentium eligendi minima iure architecto exercitationem perferendis placeat maxime, expedita voluptatum sint vel. Facere perspiciatis necessitatibus odit tenetur nulla accusantium porro dignissimos sunt est eveniet soluta quasi provident omnis dolores veniam fugit officia vero at molestiae veritatis, amet natus libero? Neque earum pariatur reiciendis, quo quos ad et ab dolorum nostrum, eaque expedita ex doloremque maxime excepturi hic quasi ullam, at atque doloribus laborum.",
          name: "slide1.jpg",
          tipo: "cuerpo",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          name: "slide2.jpg",
          tipo: "link",
          link: "https://ww2.ufps.edu.co/",
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam modi velit totam voluptatibus, quidem officiis veritatis! Expedita, blanditiis exercitationem cupiditate provident asperiores unde laudantium aliquid. Rerum molestiae facilis harum nam debitis asperiores, at aperiam ea optio praesentium eligendi minima iure architecto exercitationem perferendis placeat maxime, expedita voluptatum sint vel. Facere perspiciatis necessitatibus odit tenetur nulla accusantium porro dignissimos sunt est eveniet soluta quasi provident omnis dolores veniam fugit officia vero at molestiae veritatis, amet natus libero? Neque earum pariatur reiciendis, quo quos ad et ab dolorum nostrum, eaque expedita ex doloremque maxime excepturi hic quasi ullam, at atque doloribus laborum.",
          name: "slide3.jpg",
          tipo: "cuerpo",
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          name: "slide4.jpg",
          tipo: "link",
          link: "https://ww2.ufps.edu.co/",
        },
        {
          id: 5,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam modi velit totam voluptatibus, quidem officiis veritatis! Expedita, blanditiis exercitationem cupiditate provident asperiores unde laudantium aliquid. Rerum molestiae facilis harum nam debitis asperiores, at aperiam ea optio praesentium eligendi minima iure architecto exercitationem perferendis placeat maxime, expedita voluptatum sint vel. Facere perspiciatis necessitatibus odit tenetur nulla accusantium porro dignissimos sunt est eveniet soluta quasi provident omnis dolores veniam fugit officia vero at molestiae veritatis, amet natus libero? Neque earum pariatur reiciendis, quo quos ad et ab dolorum nostrum, eaque expedita ex doloremque maxime excepturi hic quasi ullam, at atque doloribus laborum.",
          name: "slide5.jpg",
          tipo: "cuerpo",
        },
      ],
    };
  },
  methods: {
    ...vuex.mapActions([
      "commitNoticias",
      "commitNovedades",
      "commitActividades",
    ]),

    GoNoticia(noticia) {
      if (noticia.tipo == "cuerpo") {
        let id = noticia.id;
        this.$router.push({ name: "noticia", params: { id } });
      } else {
        window.open(noticia.link, "_blank");
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
    this.commitNoticias(); 
  },
};
</script>

<style lang="scss" scoped>
#section-1 {
  width: 100%;

  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(../../public/images/fotos/lab.jpg);
  background-size: cover;
  background-attachment: fixed;
}

#div-identidad {
  height: 7rem;
  width: 100%;
  background-size: cover;
  background-attachment: fixed;

  #logoUfps {
    margin: 0 auto; /* Superior-inferior , derecha-izquierda */
    height: 6rem;
    width: 60%;
  }

  #escudoColombia {
    margin: 0 auto;
    height: 5.5rem;
    width: 13%;
  }
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
  background-color: #2196f3;
}
.noticia-titulo-hover,
#noticia-titulo:hover {
  /* Caract en hover del div titulo noticia */ /* Caract en MouseHover del div titulo noticia */
  font-weight: bold;
  height: 4.5rem;
  width: 100%;
  margin-left: -2rem;
  background-color: #bbdefb;
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
  #div-identidad {
    height: 6rem;

    #logoUfps {
      height: 5rem;
      width: 70%;
    }
    #escudoColombia {
      height: 5rem;
      width: 20%;
    }
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
  /* On screens that are 960px or less*/
  #div-identidad {
    height: 6rem;
    #logoUfps {
      height: 5rem;
      width: 70%;
    }
    #escudoColombia {
      height: 5rem;
      width: 35%;
    }
  }
}
@media screen and (max-width: 812px) {
  /* On screens that are 960px or less*/
  #div-identidad {
    height: 6rem;

    #logoUfps {
      height: 4.5rem;
      width: 80%;
    }
    #escudoColombia {
      height: 4.5rem;
      width: 35%;
    }
  }
}
@media screen and (max-width: 676px) {
  /* On screens that are 600px or less*/
  #div-identidad {
    height: 6rem;

    #logoUfps {
      height: 4.5rem;
      width: 90%;
    }
    #escudoColombia {
      height: 4.5rem;
      width: 40%;
    }
  }
}
@media screen and (max-width: 560px) {
  /* On screens that are 600px or less */
  #div-identidad {
    height: 6rem;

    #logoUfps {
      height: 4.5rem;
      width: 100%;
    }
    #escudoColombia {
      height: 4.5rem;
      width: 50%;
    }
  }
}
@media screen and (max-width: 450px) {
  /* On screens that are 600px or less */
  #div-identidad {
    height: 6rem;

    #logoUfps {
      height: 4rem;
      width: 100%;
    }
    #escudoColombia {
      height: 4rem;
      width: 50%;
    }
  }
}
</style>
