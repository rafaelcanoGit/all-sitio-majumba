<template>
  <div v-if="caract == 'Características Macroscópicas'">
    <v-container v-if="getCaractMacro">
      <v-row justify="center">
        <v-col
          cols="8"
          md="4"
          sm="6"
          lg="3"
          xl="3"
          v-for="(item, index) in 3"
          :key="index"
        >
          <v-card
            elevation="10"
            color="white"
            shaped
            v-if="getCaractMacro.data[index]"
          >
            <v-img
              :src="getCaractMacro.data[index].attributes.imagen"
              :alt="getCaractMacro.data[index].attributes.medio"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title
                v-text="getCaractMacro.data[index].attributes.medio"
              ></v-card-title>
            </v-img>
            <v-simple-table :fixedHeader="true" class="text-left pa-5">
              <tbody>
                <tr>
                  <th>Color:</th>
                  <td class="grey--text">
                    {{ getCaractMacro.data[index].attributes.color }}
                  </td>
                </tr>
                <tr>
                  <th>Textura:</th>
                  <td class="grey--text">
                    {{ getCaractMacro.data[index].attributes.textura }}
                  </td>
                </tr>
                <tr>
                  <th>Características de reverso:</th>
                  <td class="grey--text">
                    {{
                      getCaractMacro.data[index].attributes
                        .caracteristicas_reverso
                    }}
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card>
          <v-card elevation="10" class="pa-4" color="white" shaped v-else>
            <h3>Medio {{ item }} No registrado</h3>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col class="ma-10">
          <h1>No tiene {{ caract.toLowerCase() }}</h1>
        </v-col>
      </v-row></v-container
    >
  </div>
  <div v-else-if="caract == 'Características Microscópicas'">
    <v-container v-if="getCaractMicro">
      <v-row justify="center">
        <v-col md="5" lg="4" xl="3" sm="7" cols="12">
          <v-card elevation="10" color="white" shaped>
            <template v-if="getImagenesMicro.length">
              <v-carousel height="300">
                <v-carousel-item
                  v-for="(item, i) in getImagenesMicro"
                  :key="i"
                  :src="item"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                ></v-carousel-item>
              </v-carousel>
            </template>
          </v-card>
        </v-col>
        <v-col md="7" lg="6" xl="5" sm="10" cols="12">
          <v-card elevation="10" color="white" shaped>
            <v-simple-table :fixedHeader="true" class="text-left pa-5">
              <tbody>
                <tr>
                  <th>Conidióforo:</th>
                  <td class="grey--text">
                    {{ getCaractMicro.attributes.conidioforo }}
                  </td>
                </tr>
                <tr>
                  <th>Fiálides:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractMicro.attributes.fialides) }}
                  </td>
                </tr>
                <template
                  v-if="getCaractMicro.attributes.fialides == 'Presencia'"
                >
                  <tr>
                    <th>Forma Fiálides:</th>
                    <td class="grey--text">
                      {{ getCaractMicro.attributes.fialides_forma }}
                    </td>
                  </tr>
                  <template
                    v-if="
                      getCaractMicro.attributes.fialides_otra_caracteristica
                    "
                  >
                    <tr>
                      <th>Otras características Fiálides:</th>
                      <td class="grey--text">
                        {{
                          getCaractMicro.attributes.fialides_otra_caracteristica
                        }}
                      </td>
                    </tr>
                  </template>
                </template>
                <tr>
                  <th>Vesícula:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractMicro.attributes.vesicula) }}
                  </td>
                </tr>
                <tr>
                  <th>Espora Asexual:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractMicro.attributes.espora_asexual) }}
                  </td>
                </tr>
                <template
                  v-if="
                    getCaractMicro.attributes.espora_asexual == 'Conidiosporas'
                  "
                >
                  <tr>
                    <th>Tamaño Conidiosporas:</th>
                    <td class="grey--text">
                      {{
                        getCaractMicro.attributes
                          .esporas_asexuales_conidios_tamano
                      }}
                    </td>
                  </tr>
                  <tr>
                    <th>Color Conidiosporas:</th>
                    <td class="grey--text">
                      {{
                        getCaractMicro.attributes
                          .esporas_asexuales_conidios_color
                      }}
                    </td>
                  </tr>
                  <tr>
                    <th>Forma Conidiosporas:</th>
                    <td class="grey--text">
                      {{
                        getCaractMicro.attributes
                          .esporas_asexuales_conidios_forma
                      }}
                    </td>
                  </tr>
                  <template
                    v-if="
                      getCaractMicro.attributes.esporas_asexuales_conidios_otras
                    "
                  >
                    <tr>
                      <th>Otras características Conidiosporas:</th>
                      <td class="grey--text">
                        {{
                          getCaractMicro.attributes
                            .esporas_asexuales_conidios_otras
                        }}
                      </td>
                    </tr>
                  </template>
                </template>
                <tr>
                  <th>Espora Sexual:</th>
                  <td class="grey--text">
                    {{ getCaractMicro.attributes.espora_sexual }}
                  </td>
                </tr>
                <template v-if="getCaractMicro.attributes.otras_estructuras">
                  <tr>
                    <td colspan="2">
                      Otras estructuras:
                      <br />
                      <p
                        class="grey--text"
                        v-text="getCaractMicro.attributes.otras_estructuras"
                      ></p>
                    </td>
                  </tr>
                </template>
              </tbody>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col class="ma-10">
          <h1>No tiene {{ caract.toLowerCase() }}</h1>
        </v-col>
      </v-row></v-container
    >
  </div>
  <div v-else-if="caract == 'Características Bioquímicas'">
    <v-container v-if="getCaractBioqui">
      <v-row justify="center">
        <v-col md="5" lg="4" xl="3" sm="7" cols="12">
          <v-card elevation="10" color="white" shaped>
            <template v-if="getImagenesBioqui.length">
              <v-carousel height="300">
                <v-carousel-item
                  v-for="(item, i) in getImagenesBioqui"
                  :key="i"
                  :src="item"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                ></v-carousel-item>
              </v-carousel>
            </template>
          </v-card>
        </v-col>
        <v-col md="7" lg="6" xl="5" sm="10" cols="12">
          <v-card elevation="10" color="white" shaped>
            <v-simple-table :fixedHeader="true" class="text-left pa-5">
              <tbody>
                <tr>
                  <th>Enzimas:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.enzimas) }}
                  </td>
                  <th>Azúcares:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.azucares) }}
                  </td>
                </tr>
                <template v-if="getCaractBioqui.attributes.otras_caract">
                  <tr>
                    <td colspan="2">
                      Otras Características: <br />
                      <p class="grey--text">
                        {{ getCaractBioqui.attributes.otras_caract }}
                      </p>
                    </td>
                  </tr>
                </template>
              </tbody>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col class="ma-10">
          <h1>No tiene {{ caract.toLowerCase() }}</h1>
        </v-col>
      </v-row></v-container
    >
  </div>
  <div v-else-if="caract == 'Identificación Molecular'">
    <v-container v-if="getIdentiMolecu">
      <v-row justify="center">
        <v-col md="12" lg="12" xl="12" sm="12" cols="12">
          <v-card elevation="10" color="white" shaped>
            <v-container>
              <v-row align="center" justify="center">
                <v-col md="2" lg="2" xl="2" sm="2" cols="2">
                  <h2>PCR</h2>
                </v-col>
                <v-col md="10" lg="10" xl="10" sm="10" cols="10">
                  <v-simple-table :fixedHeader="true" class="text-left pa-5">
                    <thead>
                      <th></th>
                      <th>Nombre</th>
                      <th>Secuencia</th>
                      <th>Producto</th>
                      <th>
                        {{ cepa.attributes.cepa.attributes.grupo_microbiano }}
                      </th>
                    </thead>
                    <tbody>
                      <tr>
                        <th>F</th>
                        <td class="grey--text">
                          {{ getIdentiMolecu.attributes.nombre_forward }}
                        </td>
                        <td class="grey--text">
                          {{ getIdentiMolecu.attributes.secuencia_forward }}
                        </td>
                        <td class="grey--text">
                          {{ getIdentiMolecu.attributes.producto_forward }}
                        </td>
                        <td class="grey--text">
                          {{
                            cepa.attributes.cepa.attributes.genero +
                            " " +
                            cepa.attributes.cepa.attributes.especie
                          }}
                        </td>
                      </tr>
                      <tr>
                        <th>R</th>
                        <td class="grey--text">
                          {{ getIdentiMolecu.attributes.nombre_reversed }}
                        </td>
                        <td class="grey--text">
                          {{ getIdentiMolecu.attributes.secuencia_reversed }}
                        </td>
                        <td class="grey--text">
                          {{ getIdentiMolecu.attributes.producto_reversed }}
                        </td>
                        <td class="grey--text">
                          {{
                            cepa.attributes.cepa.attributes.genero +
                            " " +
                            cepa.attributes.cepa.attributes.especie
                          }}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          Análisis <br />
                          filogenético:
                        </th>
                        <td colspan="4" class="grey--text">
                          {{ getIdentiMolecu.attributes.analisis_filogenetico }}
                        </td>
                      </tr>
                      <tr>
                        <th>Observaciones:</th>
                        <td colspan="4" class="grey--text">
                          {{ getIdentiMolecu.attributes.observaciones }}
                        </td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col></v-row
      >
      <v-row justify="center">
        <v-col md="5" lg="5" xl="5" sm="6" cols="12">
          <v-card elevation="10" color="white" shaped>
            <v-img
              :src="getIdentiMolecu.attributes.imagen_pcr"
              :alt="getIdentiMolecu.attributes.nombre_forward"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="'Imagen Pcr'"></v-card-title> </v-img
          ></v-card> </v-col
        ><v-col md="7" lg="7" xl="7" sm="6" cols="12">
          <v-card elevation="10" color="white" shaped>
            <v-img
              :src="getIdentiMolecu.attributes.imagen_blast"
              :alt="getIdentiMolecu.attributes.nombre_forward"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title
                v-text="'Imagen Secuenciación'"
              ></v-card-title> </v-img
          ></v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col class="ma-10">
          <h1>No tiene {{ caract.toLowerCase() }}</h1>
        </v-col>
      </v-row></v-container
    >
  </div>
  <div v-else>
    <v-container v-if="getMetodoConser.data.length">
      <v-row justify="center" v-for="(item, index) in rows" :key="index">
        <v-col
          md="6"
          lg="6"
          xl="6"
          sm="10"
          cols="10"
          v-if="metodos[index].col1.length"
        >
          <v-container>
            <v-row justify="center" align="center">
              <v-col md="3" lg="3" xl="3" sm="2" cols="2">
                <v-item-group
                  v-model="metodos[index].window1"
                  class="shrink mr-6"
                  mandatory
                  tag="v-flex"
                >
                  <v-item
                    v-for="(medodo, index) in metodos[index].col1"
                    :key="index"
                    v-slot="{ active, toggle }"
                  >
                    <div>
                      <v-btn
                        :input-value="active"
                        icon
                        @click="toggle"
                        color="redUfps"
                      >
                        <v-icon>mdi-record</v-icon>
                      </v-btn>
                    </div>
                  </v-item>
                </v-item-group>
              </v-col>
              <v-col md="9" lg="9" xl="7" sm="8" cols="10">
                <v-window
                  v-model="metodos[index].window1"
                  class="elevation-1"
                  vertical
                >
                  <v-window-item
                    v-for="(medodo, index) in metodos[index].col1"
                    :key="index"
                  >
                    <v-card elevation="10" color="white" shaped flat>
                      <v-img
                        :src="medodo.attributes.imagen"
                        :alt="medodo.attributes.tipo_metodo"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                      </v-img>
                      <v-simple-table
                        :fixedHeader="true"
                        class="text-left pa-5"
                      >
                        <tbody>
                          <tr>
                            <th>Método de Conservación:</th>
                            <td class="grey--text">
                              {{ medodo.attributes.tipo_metodo }}
                            </td>
                          </tr>
                          <tr>
                            <th>Fecha:</th>
                            <td class="grey--text">
                              {{
                                medodo.attributes.fecha
                                  | moment("DD-MM-YY HH-mm")
                              }}
                            </td>
                          </tr>
                          <tr
                            v-if="
                              medodo.attributes.tipo_metodo === 'Medio líquido'
                            "
                          >
                            <th>Número de Pases:</th>
                            <td class="grey--text">
                              {{ medodo.attributes.numero_pases }}
                            </td>
                          </tr>
                          <tr v-else>
                            <th>Número de Réplicas:</th>
                            <td class="grey--text">
                              {{ medodo.attributes.numero_replicas }}
                            </td>
                          </tr>
                          <tr
                            v-if="
                              medodo.attributes.tipo_metodo ===
                                'Medio líquido' ||
                              medodo.attributes.tipo_metodo === 'Medio sólido'
                            "
                          >
                            <th>Medio de Cultivo:</th>
                            <td class="grey--text">
                              {{ medodo.attributes.medio_cultivo }}
                            </td>
                          </tr>
                          <tr v-else>
                            <th>Recuento Microgota:</th>
                            <td class="grey--text">
                              {{ medodo.attributes.recuento_microgota }}
                            </td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                    </v-card>
                  </v-window-item>
                </v-window>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col
          md="6"
          lg="6"
          xl="6"
          sm="10"
          cols="10"
          v-if="metodos[index].col2.length"
        >
          <v-container>
            <v-row justify="center" align="center">
              <v-col md="3" lg="3" xl="3" sm="2" cols="2">
                <v-item-group
                  v-model="metodos[index].window2"
                  class="shrink mr-6"
                  mandatory
                  tag="v-flex"
                >
                  <v-item
                    v-for="(medodo, index) in metodos[index].col2"
                    :key="index"
                    v-slot="{ active, toggle }"
                  >
                    <div>
                      <v-btn
                        :input-value="active"
                        icon
                        @click="toggle"
                        color="redUfps"
                      >
                        <v-icon>mdi-record</v-icon>
                      </v-btn>
                    </div>
                  </v-item>
                </v-item-group>
              </v-col>
              <v-col md="9" lg="9" xl="7" sm="8" cols="10">
                <v-window
                  v-model="metodos[index].window2"
                  class="elevation-1"
                  vertical
                >
                  <v-window-item
                    v-for="(medodo, index) in metodos[index].col2"
                    :key="index"
                  >
                    <v-card elevation="10" color="white" shaped flat>
                      <v-img
                        :src="medodo.attributes.imagen"
                        :alt="medodo.attributes.tipo_metodo"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                      </v-img>
                      <v-simple-table
                        :fixedHeader="true"
                        class="text-left pa-5"
                      >
                        <tbody>
                          <tr>
                            <th>Método de Conservación:</th>
                            <td class="grey--text">
                              {{ medodo.attributes.tipo_metodo }}
                            </td>
                          </tr>
                          <template
                            v-if="medodo.attributes.tipo_metodo === 'Agar'"
                          >
                            <tr>
                              <th>Tipo Agar:</th>
                              <td class="grey--text">
                                {{ medodo.attributes.tipo_agar }}
                              </td>
                            </tr>
                          </template>
                          <tr>
                            <th>Fecha:</th>
                            <td class="grey--text">
                              {{
                                medodo.attributes.fecha
                                  | moment("DD-MM-YY HH-mm")
                              }}
                            </td>
                          </tr>
                          <tr>
                            <th>Número de Réplicas:</th>
                            <td class="grey--text">
                              {{ medodo.attributes.numero_replicas }}
                            </td>
                          </tr>
                          <tr>
                            <th>Recuento Microgota:</th>
                            <td class="grey--text">
                              {{ medodo.attributes.recuento_microgota }}
                            </td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                    </v-card>
                  </v-window-item>
                </v-window>
              </v-col>
            </v-row>
          </v-container></v-col
        >
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col class="ma-10">
          <h1>No tiene {{ caract.toLowerCase() }}</h1>
        </v-col>
      </v-row></v-container
    >
  </div>
</template>

<script>
export default {
  name: "hongo",
  props: ["cepa", "caract"],
  data() {
    return {
      imagenes: {
        micro: [],
        bioqui: [],
      },
      metodos: [],
      rows: 0,
    };
  },
  methods: {
    primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    llenarArregloImagenes(data, tipo) {
      if (data.imagen1) {
        this.pushImagen(data.imagen1, tipo);
      }
      if (data.imagen2) {
        this.pushImagen(data.imagen2, tipo);
      }
      if (data.imagen3) {
        this.pushImagen(data.imagen3, tipo);
      }
    },
    pushImagen(url, tipo) {
      switch (tipo) {
        case "micro":
          this.imagenes.micro.push(url);
          break;
        case "bioqui":
          this.imagenes.bioqui.push(url);
          break;
      }
    },
    validarMetodosConser() {
      this.rows = parseInt(this.getMetodoConser.data.length / 20) + 1;
      for (let index = 0; index < this.rows; index++) {
        let num = index * 20;
        this.metodos.push({
          col1: this.getMetodoConser.data.slice(num, num + 10),
          col2: this.getMetodoConser.data.slice(num + 10, num + 20),
          window1: 0,
          window2: 0,
        });
      }
    },
  },
  computed: {
    getCaractMacro() {
      return this.cepa.attributes.caract_macro;
    },
    getCaractMicro() {
      return this.cepa.attributes.caract_micro;
    },
    getCaractBioqui() {
      return this.cepa.attributes.caract_bioqui;
    },
    getIdentiMolecu() {
      return this.cepa.attributes.identi_molecu;
    },
    getMetodoConser() {
      return this.cepa.attributes.metodo_conser;
    },
    getImagenesMicro() {
      return this.imagenes.micro;
    },
    getImagenesBioqui() {
      return this.imagenes.bioqui;
    },
  },
  mounted() {
    if (this.getCaractMicro) {
      this.imagenes.micro = [];
      this.llenarArregloImagenes(this.getCaractMicro.attributes, "micro");
    }
    if (this.getCaractBioqui) {
      this.imagenes.bioqui = [];
      this.llenarArregloImagenes(this.getCaractBioqui.attributes, "bioqui");
    }
    this.validarMetodosConser();
  },
};
</script> 