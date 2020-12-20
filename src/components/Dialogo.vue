<template>
  <v-dialog v-model="dialog" width="600px" @click:outside="closeDialog">
    <template v-if="tipo == 'proyecto' || tipo == 'publicacion'">
      <v-card color="white" shaped v-if="datos">
        <v-img
          :src="datos.attributes.imagen"
          :alt="datos.attributes.nombre_documento"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="300px"
        >
          <v-card-title
            v-text="datos.attributes.nombre_documento"
          ></v-card-title>
        </v-img>
        <v-card-text class="text-left font-weight-medium mt-5">
          <strong class="black--text"> Autor: </strong>
          {{ datos.attributes.nombre_autor }}<br />
          <strong class="black--text"> Descripción: </strong>
          <p v-text="datos.attributes.descripcion" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="redUfps darken-1" text @click="closeDialog">
            Atrás
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
    <template v-else-if="tipo == 'equipamiento'">
      <v-card color="white" shaped v-if="datos">
        <v-img
          :src="datos.attributes.imagen"
          :alt="datos.attributes.nombre"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="300px"
        >
          <v-card-title v-text="datos.attributes.nombre"></v-card-title>
        </v-img>
        <v-card-text class="text-left font-weight-medium mt-5">
          <strong class="black--text"> Función: </strong>
          {{ datos.attributes.funcion }}<br />
          <strong class="black--text"> Características: </strong>
          <p v-text="datos.attributes.caracteristicas" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="redUfps darken-1" text @click="closeDialog">
            Atrás
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
import vuex from "vuex";
export default {
  props: ["id", "tipo", "dialog"],
  mounted() {},
  computed: {
    ...vuex.mapGetters([
      "getProyectoId",
      "getPublicacionId",
      "getEquipamientoId",
    ]),
    datos() {
      switch (this.tipo) {
        case "proyecto":
          return this.getProyectoId(this.id);
        case "publicacion":
          return this.getPublicacionId(this.id);
        case "equipamiento":
          return this.getEquipamientoId(this.id);
        default:
          return null;
      }
    },
  },
  methods: {
    closeDialog() {
      this.$emit("cerrarDialogo");
    },
  },
};
</script> 
