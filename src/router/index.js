import Vue from "vue";
import VueRouter from "vue-router";

import Noticias from "../views/Noticias.vue";
import Nosotros from "../views/Nosotros.vue";
import Investigadores from "../views/Investigadores.vue"
import Novedades from "../views/Novedades.vue"
import Proyectos from "../views/Proyectos.vue"
import Publicaciones from "../views/Publicaciones.vue"
import Actividades from "../views/Actividades.vue"
import Equipamentos from "../views/Equipamentos.vue"
import Banco from "../views/Banco.vue"
import Footer from "../views/Footer.vue"

import Noticia from "../components/Noticia.vue";
import Novedad from "../components/Novedad.vue";
import Actividad from "../components/Actividad.vue";
import Cepa from "../components/Cepa.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      noticias: Noticias,
      nosotros: Nosotros,
      investigadores: Investigadores,
      proyectos: Proyectos,
      banco: Banco,
      publicaciones: Publicaciones,
      equipamentos: Equipamentos,
      actividades: Actividades,
      novedades: Novedades,
      footer: Footer
    }

  },
  {
    path: "/noticia/:slug",
    name: "noticia",
    component: Noticia
  },
  {
    path: "/novedad/:slug",
    name: "novedad",
    component: Novedad
  },
  {
    path: "/actividad/:slug",
    name: "actividad",
    component: Actividad
  },
  {
    path: "/cepa/:grupo_microbiano/:slug",
    name: "cepa",
    component: Cepa
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  /*  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    }
    if (to.hash) {
       // return VueScrollTo.scrollTo(to.hash, 1200, options)
        return  { selector: to.hash, offset: { x: 0, y: 100 } };

       return new Promise((resolve, reject) => {
           setTimeout(() => {
              resolve({
                selector: to.hash, offset: { x: 0, y: 100 }
              });
            }, 200);
          });
    }
}*/
});

export default router;
