import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = process.env.BASE_URL;


export default new Vuex.Store({
  state: {
    dominio: "http://majumbaufps.tk/api",
    variable: "id",
    nosotros: "Misión",
    mision: {},
    vision: {},
    objetivos: {},
    noticias: [],
    investigadores: [],
    proyectos: [],
    publicaciones: [],
    novedades: [],
    actividades: [],
    equipamentos: [],
    cepa: {},
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
    getCepa(state) {
      return state.cepa
    },
 /*   getCepaId: (state) => (id) => {
      return state.cepas.find(
        (cepa) => cepa.id === id
      )
    }, */
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
    getNoticiaId: (state) => (id) => {
      return state.noticias.find( // el find devuelve el objeto, el filter filtra y devuelve array
        (noticia) => noticia.id === id
      )
    },
    getNovedades(state) {
      return state.novedades
    },
    getNovedadId: (state) => (id) => {
      return state.novedades.find(
        (novedad) => novedad.id === id
      )
    },
    getActividades(state) {
      return state.actividades
    },
    getActividadId: (state) => (id) => {
      return state.actividades.find(
        (actividad) => actividad.id === id
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
    getProyectoId: (state) => (id) => {
      return state.proyectos.find(
        (proyecto) => proyecto.id === id
      )
    },
    getPublicaciones(state) {
      return state.publicaciones
    },
    getPublicacionId: (state) => (id) => {
      return state.publicaciones.find(
        (publicacion) => publicacion.id === id
      )
    },
    getEquipamentos(state) {
      return state.equipamentos
    },
    getEquipamentoId: (state) => (id) => {
      return state.equipamentos.find(
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
    setEquipamentos(state, data) {
      state.equipamentos = data
    }


  },
  actions: {
    commitNosotros({ commit }, data) {
      commit('setNosotros', data)
    },
    commitCepa({ commit }, data) {
      commit('setCepa', data)
    },
    commitBacterias({commit}){
      axios.
      get(this.state.dominio + '/bacterias', { params: { sort: this.state.variable } })
      .then(res => {
        console.log(res.data.data);
        commit("setBacterias", res.data.data);
      }).catch(error => {
        console.log(error)
      });

    },
    commitActinomicetos({commit}){
      axios.
      get(this.state.dominio + '/actinomicetos', { params: { sort: this.state.variable } })
      .then(res => {
        console.log(res.data.data);
        commit("setActinomicetos", res.data.data);
      }).catch(error => {
        console.log(error)
      });

    },
    commitHongos({commit}){
      axios.
      get(this.state.dominio + '/hongos', { params: { sort: this.state.variable } })
      .then(res => {
        console.log(res.data.data);
        commit("setHongos", res.data.data);
      }).catch(error => {
        console.log(error)
      });

    },
    commitLevaduras({commit}){
      axios.
      get(this.state.dominio + '/levaduras', { params: { sort: this.state.variable } })
      .then(res => {
        console.log(res.data.data);
        commit("setLevaduras", res.data.data);
      }).catch(error => {
        console.log(error)
      });
    },
    commitMision({commit}){
      axios.
      get(this.state.dominio + '/mision')
      .then(res => {
        console.log(res.data.data);
        commit("setMision", res.data.data.attributes.cuerpo);
      }).catch(error => {
        console.log(error)
      });

    },
    commitVision({commit}){
      axios.
      get(this.state.dominio + '/vision')
      .then(res => {
        console.log(res.data.data);
        commit("setVision", res.data.data.attributes.cuerpo);
      }).catch(error => {
        console.log(error)
      });

    },
    commitObjetivos({commit}){
      axios.
      get(this.state.dominio + '/objetivos')
      .then(res => {
        console.log(res.data.data);
        commit("setObjetivos", res.data.data.attributes.cuerpo);
      }).catch(error => {
        console.log(error)
      });

    },

    commitNoticias({ commit }) {
      axios.
        get(this.state.dominio + '/noticias', { params: { sort: this.state.variable } })
        .then(res => {
          commit("setNoticias", res.data.data);
        }).catch(error => {
          console.log(error)
        });

    },

    commitInvestigadores({ commit }) {
      axios.
      get(this.state.dominio + '/investigadores', { params: { sort: this.state.variable } })
      .then(res => {
       
        commit("setInvestigadores", res.data.data);
      }).catch(error => {
        console.log(error)
      });
      
    },

    commitNovedades({ commit }) {
      axios.
      get(this.state.dominio + '/novedades', { params: { sort: this.state.variable } })
      .then(res => {
       
        commit("setNovedades", res.data.data);
      }).catch(error => {
        console.log(error)
      });
    },

    commitProyectos({ commit }) {
      axios.
      get(this.state.dominio + '/proyectos', { params: { sort: this.state.variable } })
      .then(res => {
     
        commit("setProyectos", res.data.data);
      }).catch(error => {
        console.log(error)
      });

    },

    commitPublicaciones({ commit }) {
      axios.
      get(this.state.dominio + '/publicaciones', { params: { sort: this.state.variable } })
      .then(res => {

        commit("setPublicaciones", res.data.data);
      }).catch(error => {
        console.log(error)
      });
    },

    commitActividades({ commit }) {
      axios.
      get(this.state.dominio + '/actividades', { params: { sort: this.state.variable } })
      .then(res => {
    
        commit("setActividades", res.data.data);
      }).catch(error => {
        console.log(error)
      });
    },

    commitEquipamentos({ commit }) {
      axios.
      get(this.state.dominio + '/equipamientos', { params: { sort: this.state.variable } })
      .then(res => {
  
        commit("setEquipamentos", res.data.data);
      }).catch(error => {
        console.log(error)
      });
    }

  },
  modules: {}
});
