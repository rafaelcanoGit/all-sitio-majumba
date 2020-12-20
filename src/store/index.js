import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = process.env.BASE_URL;


export default new Vuex.Store({
  state: {
    dominio: "http://bancodecepas.tgrado.ingsistemasufps.co",
    dominioApi: "http://bancodecepas.tgrado.ingsistemasufps.co/api",
    variable: "id",
    nosotros: "Misión",
    mision: null,
    vision: null,
    objetivos: null,
    noticias: [],
    investigadores: [],
    proyectos: [],
    publicaciones: [],
    novedades: [],
    actividades: [],
    equipamientos: [],
    infoCepa: {
      info: null,
      error: null
    },
    bacterias: [],
    hongos: [],
    actinomicetos: [],
    levaduras: []
  },
  getters: {
    getNosotros(state) {
      return state.nosotros
    },
    getMision(state) {
      return state.mision
    },
    getVision(state) {
      return state.vision
    },
    getObjetivos(state) {
      return state.objetivos
    },
    getCepaId: (state) => (id) => {
      return state.cepas.find(
        (cepa) => cepa.id === id
      )
    },
    getBacterias(state) {
      return state.bacterias
    },
    getActinomicetos(state) {
      return state.actinomicetos
    },
    getHongos(state) {
      return state.hongos
    },
    getLevaduras(state) {
      return state.levaduras
    },
    getNoticias(state) {
      return state.noticias
    },
    getNoticiaSlug: (state, getters) => (slug) => {
      return getters.getNoticias.find(
        (noticia) => noticia.attributes.slug === slug
      )
    },
    getNovedades(state) {
      return state.novedades
    },
    getNovedadSlug: (state, getters) => (slug) => {
      return getters.getNovedades.find(
        (novedad) => novedad.attributes.slug === slug
      )
    },
    getActividades(state) {
      return state.actividades
    },
    getActividadSlug: (state, getters) => (slug) => {
      return getters.getActividades.find(
        (actividad) => actividad.attributes.slug === slug
      )
    },
    getInvestigadores(state) {
      return state.investigadores
    },
    getInvestigadorId: (state) => (id) => {
      return state.investigadores.find(
        (investigador) => investigador.id === id
      )
    },
    getProyectos(state) {
      return state.proyectos
    },
    getProyectoId: (state, getters) => (id) => {
      return getters.getProyectos.find(
        (proyecto) => proyecto.id === id
      )
    },
    getPublicaciones(state) {
      return state.publicaciones
    },
    getPublicacionId: (state, getters) => (id) => {
      return getters.getPublicaciones.find(
        (publicacion) => publicacion.id === id
      )
    },
    getEquipamientos(state) {
      return state.equipamientos
    },
    getEquipamientoId: (state, getters) => (id) => {
      return getters.getEquipamientos.find(
        (equipamento) => equipamento.id === id
      )
    }
  },
  mutations: {
    setNosotros(state, data) {
      state.nosotros = data
    },
    setMision(state, data) {
      state.mision = data
    },
    setVision(state, data) {
      state.vision = data
    },
    setObjetivos(state, data) {
      state.objetivos = data
    },
    setCepa(state, data) {
      state.cepa = data
    },
    setBacterias(state, data) {
      state.bacterias = data
    },
    setHongos(state, data) {
      state.hongos = data
    },
    setActinomicetos(state, data) {
      state.actinomicetos = data
    },
    setLevaduras(state, data) {
      state.levaduras = data
    },
    setNoticias(state, data) {
      state.noticias = data
    },
    setInvestigadores(state, data) {
      state.investigadores = data
    },
    setNovedades(state, data) {
      state.novedades = data
    },
    setProyectos(state, data) {
      state.proyectos = data
    },
    setPublicaciones(state, data) {
      state.publicaciones = data
    },
    setActividades(state, data) {
      state.actividades = data
    },
    setEquipamientos(state, data) {
      state.equipamientos = data
    },
    setInfoCepa(state, data) {
      state.infoCepa.info = data.data;
      state.infoCepa.error = data.error;
    }
  },
  actions: {
    commitNosotros({ commit }, data) {
      commit('setNosotros', data)
    },
    commitBacterias({ commit }) {
      axios.
        get(this.state.dominioApi + '/bacterias', { params: { sort: this.state.variable } })
        .then(res => {
          commit("setBacterias", res.data.data);
        }).catch(error => {
          console.log(error)
        });
    },
    commitActinomicetos({ commit }) {
      axios.
        get(this.state.dominioApi + '/actinomicetos', { params: { sort: this.state.variable } })
        .then(res => {
          commit("setActinomicetos", res.data.data);
        }).catch(error => {
          console.log(error)
        });
    },
    commitHongos({ commit }) {
      axios.
        get(this.state.dominioApi + '/hongos', { params: { sort: this.state.variable } })
        .then(res => {
          commit("setHongos", res.data.data);
        }).catch(error => {
          console.log(error)
        });
    },
    commitLevaduras({ commit }) {
      axios.
        get(this.state.dominioApi + '/levaduras', { params: { sort: this.state.variable } })
        .then(res => {
          commit("setLevaduras", res.data.data);
        }).catch(error => {
          console.log(error)
        });
    },
    commitCaractBacterias({ commit }, data) {
      axios.
        get(this.state.dominioApi + '/bacteria', { params: { slug: data } })
        .then(res => {
          commit("setInfoCepa", { data: res.data.data, error: null });
        }).catch(error => {
          commit("setInfoCepa", { data: null, error: error.response.data.error });
        });
    },
    commitCaractActinomicetos({ commit }, data) {
      axios.
        get(this.state.dominioApi + '/actinomiceto', { params: { slug: data } })
        .then(res => {
          commit("setInfoCepa", { data: res.data.data, error: null });
        }).catch(error => {
          commit("setInfoCepa", { data: null, error: error.response.data.error });
        });

    },
    commitCaractHongos({ commit }, data) {
      axios.
        get(this.state.dominioApi + '/hongo', { params: { slug: data } })
        .then(res => {
          commit("setInfoCepa", { data: res.data.data, error: null });
        }).catch(error => {
          commit("setInfoCepa", { data: null, error: error.response.data.error });
        });
    },
    commitCaractLevaduras({ commit }, data) {
      axios.
        get(this.state.dominioApi + '/levadura', { params: { slug: data } })
        .then(res => {
          commit("setInfoCepa", { data: res.data.data, error: null });
        }).catch(error => {
          commit("setInfoCepa", { data: null, error: error.response.data.error });
        });
    },
    commitMision({ commit }) {
      axios.
        get(this.state.dominioApi + '/mision')
        .then(res => {
          commit("setMision", res.data.data.attributes.cuerpo);
        }).catch(error => {
          console.log(error)
        });
    },
    commitVision({ commit }) {
      axios.
        get(this.state.dominioApi + '/vision')
        .then(res => {
          commit("setVision", res.data.data.attributes.cuerpo);
        }).catch(error => {
          console.log(error)
        });
    },
    commitObjetivos({ commit }) {
      axios.
        get(this.state.dominioApi + '/objetivos')
        .then(res => {
          commit("setObjetivos", res.data.data.attributes.cuerpo);
        }).catch(error => {
          console.log(error)
        });
    },
    commitNoticias({ commit }) {
      axios.
        get(this.state.dominioApi + '/noticias', { params: { sort: this.state.variable } })
        .then(res => {
          commit("setNoticias", res.data.data);
        }).catch(error => {
          console.log(error)
        });
    },
    commitInvestigadores({ commit }) {
      axios.
        get(this.state.dominioApi + '/investigadores', { params: { sort: this.state.variable } })
        .then(res => {
          commit("setInvestigadores", res.data.data);
        }).catch(error => {
          console.log(error)
        });
    },
    commitNovedades({ commit }) {
      axios.
        get(this.state.dominioApi + '/novedades', { params: { sort: this.state.variable } })
        .then(res => {
          commit("setNovedades", res.data.data);
        }).catch(error => {
          console.log(error)
        });
    },
    commitProyectos({ commit }) {
      axios.
        get(this.state.dominioApi + '/proyectos', { params: { sort: this.state.variable } })
        .then(res => {
          commit("setProyectos", res.data.data);
        }).catch(error => {
          console.log(error)
        });
    },
    commitPublicaciones({ commit }) {
      axios.
        get(this.state.dominioApi + '/publicaciones', { params: { sort: this.state.variable } })
        .then(res => {
          commit("setPublicaciones", res.data.data);
        }).catch(error => {
          console.log(error)
        });
    },
    commitActividades({ commit }) {
      axios.
        get(this.state.dominioApi + '/actividades', { params: { sort: this.state.variable } })
        .then(res => {
          commit("setActividades", res.data.data);
        }).catch(error => {
          console.log(error)
        });
    },
    commitEquipamientos({ commit }) {
      axios.
        get(this.state.dominioApi + '/equipamientos', { params: { sort: this.state.variable } })
        .then(res => {
          commit("setEquipamientos", res.data.data);
        }).catch(error => {
          console.log(error)
        });
    },
  },
  modules: {}
});
