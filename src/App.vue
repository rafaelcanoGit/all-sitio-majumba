<template>
  <div id="app">
    <vue-navigation-bar
      :class="{ shrink: Escroleando }"
      :options="navbarOptions"
      @vnb-item-clicked="vnbItemClicked"
    />
    <v-app> 
      <router-view /> 
      <!-- muestra los demás componentes, con path:'/' -->
      <router-view name="noticias" />
      <!--  name para indicar componente -->
      <router-view name="nosotros" />
      <router-view name="investigadores" />
      <router-view name="proyectos" />
      <router-view name="banco" />
      <router-view name="publicaciones" />
      <router-view name="equipamentos" />
      <router-view name="actividades" />
      <router-view name="novedades" />
      <Footer></Footer>
    </v-app>
  </div>
</template>
<script>
import VueNavigationBar from "vue-navigation-bar";
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import { scrollTo } from "vue-scrollto";
//import VueScrollTo from "vue-scrollto";
import vuex from "vuex";

export default {
  components: {
    VueNavigationBar,
  },
  data() {
    return {
      options: {
        // container: '#container',
        easing: "ease-in-out",
        offset: -55,
        force: true,
        cancelable: true,
        /*  onStart: function (element) {
        // scrolling started
    },
    onDone: function (element) {
        // scrolling is done
    },
    onCancel: function () {
        // scrolling has been interrupted
    }, */
        x: false,
        y: true,
      },

      Escroleando: false,
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: false,
        mobileBreakpoint: 990,
        brandImagePath: "/",
        brandImage: require("../public/images/fotos/majumba2.png"),
        brandImageAltText: "brand-image",
        collapseButtonImageOpen: null,
        collapseButtonImageClose: null,
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        menuOptionsRight: [
          {
            isLinkAction: true, //When true, the path option of the menuOption will not fire - instead, you'll be able to register for the @vnb-item-clicked event which will spit you out the text value of your menuOption. That way, you can do an action you may want to trigger.
            type: "link",
            text: "Inicio",
            path: "",
          },
          {
            isLinkAction: true,
            type: "link",
            text: "Quienes Somos",
            path: "",
            subMenuOptions: [
              {
                isLinkAction: true,
                type: "link",
                text: "Misión",
                path: "",
                iconLeft: '<i class="mdi mdi-calendar-multiple-check"></i>',
              },
              {
                type: "hr",
              },
              {
                isLinkAction: true,
                type: "link",
                text: "Visión",
                path: "",
                iconLeft: '<i class="mdi mdi-eye"></i>',
              },
              {
                type: "hr",
              },
              {
                isLinkAction: true,
                type: "link",
                text: "Objetivos",
                path: "",
                iconLeft: '<i class="mdi mdi-playlist-check"></i>',
              },
            ],
          },
          {
            isLinkAction: true,
            type: "link",
            text: "Investigadores",
            path: "",
          },
          {
            isLinkAction: true,
            type: "link",
            text: "Proyectos",
            path: "",
            iconRight: '<i class="fas fa-tags"></i>',
          },
          {
            isLinkAction: true,
            type: "link",
            text: "Banco de Cepas",
            path: "",
            iconRight: '<i class="fas fa-tags"></i>',
          },
          {
            isLinkAction: true,
            type: "link",
            text: "Publicaciones",
            path: "",
          },
          {
            isLinkAction: true,
            type: "link",
            text: "Equipamentos",
            path: "",
          },
        ],
      },
    };
  },
  methods: {
    ...vuex.mapActions(["commitNosotros"]),

    vnbItemClicked(text) {
      if (this.$router.currentRoute.fullPath != "/") {
        this.$router.push("/");
      }
      if (text === "Inicio") {
        scrollTo({ x: 0, y: 0 }, 1000, this.options);
        return;
      }
      if (text === "Misión" || text === "Visión" || text === "Objetivos") {
        this.commitNosotros(text);
        text = "nosotros";
      }
      if (text === "Banco de Cepas") {
        text = "banco";
      }
      text = text.toLowerCase();
      setTimeout(() => {
        scrollTo("#" + text, 1000, this.options);
      }, 500);
    },

    resizeOnScroll() {
      if ((this.Escroleando = window.scrollY >= 20)) {
        //history.scrollRestoration = "manual";
        //    this.navbarOptions.collapseButtonImageOpen = require("../../../public/images/fotos/hamburguer-icon.png");
      } else {
      this.navbarOptions.collapseButtonImageOpen = null;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.resizeOnScroll);
  },
  destroyed() {
    window.addEventListener("scroll", this.resizeOnScroll);
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Franklin Gothic Medium", sans-serif;
  text-align: center;
}
.shrink {
  background: rgba(240, 239, 239, 1);
  height: 4.5rem;
  width: 100%;
  padding: 0.5rem;
  /*Sticky*/
  position: -webkit-sticky;
  position: fixed;
  z-index: 100; //Z-index permite el posicionamiento delante o detrás
  transition: 0.7s; /* Adds a transition effect when the padding is decreased */

  .vnb__menu-options__option__link {
    color: black;
  }

  .vnb__brand-image-wrapper__link__image {
    /*Imagen logo marca*/
    max-height: 4rem;
  }
}

/* [name] { // elementos con el atributo 'name' pd:no toma los router view
  border:3px solid green;
  height: 85vh;
  width: 100%;

  /*  background: url(../../../public/images/fotos/nature.jpg); 
  background-size: cover;
  background-attachment: fixed;
} */
</style>
