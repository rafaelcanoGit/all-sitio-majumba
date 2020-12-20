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
                  <th>Forma:</th>
                  <td class="grey--text">
                    {{ getCaractMacro.data[index].attributes.forma }}
                  </td>
                </tr>
                <tr>
                  <th>Borde:</th>
                  <td class="grey--text">
                    {{ getCaractMacro.data[index].attributes.borde }}
                  </td>
                </tr>
                <tr>
                  <th>Pigmento:</th>
                  <td class="grey--text">
                    {{ getCaractMacro.data[index].attributes.pigmento }}
                  </td>
                </tr>
                <tr>
                  <th>Textura:</th>
                  <td class="grey--text">
                    {{ getCaractMacro.data[index].attributes.textura }}
                  </td>
                </tr>
                <tr>
                  <th>Superficie:</th>
                  <td class="grey--text">
                    {{ getCaractMacro.data[index].attributes.superficie }}
                  </td>
                </tr>
                <tr>
                  <th>Color:</th>
                  <td class="grey--text">
                    {{ getCaractMacro.data[index].attributes.color }}
                  </td>
                </tr>
                <tr>
                  <th>Secreción de Geosminas:</th>
                  <td class="grey--text">
                    {{
                      primeraMayus(
                        getCaractMacro.data[index].attributes
                          .secrecion_geosminas
                      )
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
                  <th>Forma:</th>
                  <td class="grey--text">
                    {{ getCaractMicro.attributes.forma }}
                  </td>
                </tr>
                <tr>
                  <th>Micelío:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractMicro.attributes.micelio) }}
                  </td>
                </tr>
                <tr>
                  <th>Tinción de Gram:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractMicro.attributes.tincion) }}
                  </td>
                </tr>
                <tr>
                  <th>Conidióforo:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractMicro.attributes.conidioforo) }}
                  </td>
                </tr>
                <tr>
                  <th>Forma Estructura de Reproducción:</th>
                  <td class="grey--text">
                    {{
                      primeraMayus(
                        getCaractMicro.attributes.forma_estructura_reproduccion
                      )
                    }}
                  </td>
                </tr>
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
  <div v-else-if="caract == 'Identificación Bioquímica'">
    <v-container v-if="getIdentiBioqui">
      <v-row justify="center">
        <v-col md="5" lg="4" xl="3" sm="7" cols="12">
          <v-card elevation="10" color="white" shaped>
            <template v-if="getImagenesIdenti.length">
              <v-carousel height="300">
                <v-carousel-item
                  v-for="(item, i) in getImagenesIdenti"
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
                  <th colspan="2">Oxidasa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getIdentiBioqui.attributes.oxidasa) }}
                  </td>
                  <th>Caseina:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getIdentiBioqui.attributes.caseina) }}
                  </td>
                </tr>
                <tr>
                  <th colspan="2">Nitratos:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getIdentiBioqui.attributes.nitrato) }}
                  </td>
                  <th>Catalasa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getIdentiBioqui.attributes.catalasa) }}
                  </td>
                </tr>
                <tr>
                  <th colspan="2">Hidrolisís de la Úrea:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getIdentiBioqui.attributes.hidro_urea) }}
                  </td>
                  <th>Citrato:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getIdentiBioqui.attributes.citrato) }}
                  </td>
                </tr>
                <tr>
                  <th colspan="2">Hidrolisís de la Gelatina:</th>
                  <td colspan="3" class="grey--text">
                    {{
                      primeraMayus(getIdentiBioqui.attributes.hidro_gelatina)
                    }}
                  </td>
                </tr>
                <tr>
                  <th colspan="2">Sensibilidad a Antibióticos:</th>
                  <td colspan="3" class="grey--text">
                    {{
                      primeraMayus(
                        getIdentiBioqui.attributes.sensi_antibioticos
                      )
                    }}
                  </td>
                </tr>
                <tr>
                  <th rowspan="2">Fermentación</th>
                  <th>Lactosa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getIdentiBioqui.attributes.fer_lactosa) }}
                  </td>
                  <th>Manitol:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getIdentiBioqui.attributes.fer_manitol) }}
                  </td>
                </tr>
                <tr>
                  <th>Inositol:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getIdentiBioqui.attributes.fer_inositol) }}
                  </td>
                  <th>Sacarosa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getIdentiBioqui.attributes.fer_sacarosa) }}
                  </td>
                </tr>
                <template v-if="getIdentiBioqui.attributes.otras_caract">
                  <tr>
                    <td colspan="5">
                      Otras Características: <br />
                      <p class="grey--text">
                        {{ getIdentiBioqui.attributes.otras_caract }}
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
  <div v-else>
    <v-container v-if="getOtrasCaract">
      <v-row justify="center">
        <v-col md="5" lg="4" xl="3" sm="7" cols="12">
          <v-card elevation="10" color="white" shaped>
            <template v-if="getImagenesOtras.length">
              <v-carousel height="300">
                <v-carousel-item
                  v-for="(item, i) in getImagenesOtras"
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
                  <th>Fijación Nitrogeno:</th>
                  <td class="grey--text">
                    {{
                      primeraMayus(getOtrasCaract.attributes.fijacion_nitrogeno)
                    }}
                  </td>
                </tr>
                <tr>
                  <th>FósfProducción AIAoro:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getOtrasCaract.attributes.produccion_aia) }}
                  </td>
                </tr>
                <tr>
                  <th>Giberelinas:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getOtrasCaract.attributes.giberelinas) }}
                  </td>
                </tr>
                <tr>
                  <th>Producción Sideróforos:</th>
                  <td class="grey--text">
                    {{
                      primeraMayus(
                        getOtrasCaract.attributes.produccion_sideroforos
                      )
                    }}
                  </td>
                </tr>

                <tr>
                  <th>Solubilización de Fósforo:</th>
                  <td class="grey--text">
                    {{
                      primeraMayus(getOtrasCaract.attributes.solubili_fosforo)
                    }}
                  </td>
                </tr>
                <tr>
                  <th>Producción PHA:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getOtrasCaract.attributes.produccion_pha) }}
                  </td>
                </tr>
                <tr>
                  <th>Alta Producción De Antibióticos:</th>
                  <td class="grey--text">
                    {{
                      primeraMayus(
                        getOtrasCaract.attributes.alta_produc_antibioticos
                      )
                    }}
                  </td>
                </tr>
                <tr>
                  <th>Actividades Enzimáticas:</th>
                  <td class="grey--text">
                    {{
                      primeraMayus(getOtrasCaract.attributes.activi_enzimaticas)
                    }}
                  </td>
                </tr>
                <tr>
                  <th>Antagonismos:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getOtrasCaract.attributes.antagonismos) }}
                  </td>
                </tr>
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
</template>

<script>
export default {
  name: "actinomiceto",
  props: ["cepa", "caract"],
  data() {
    return {
      imagenes: {
        micro: [],
        identi: [],
        otras: [],
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
        case "identi":
          this.imagenes.identi.push(url);
          break;
        case "otras":
          this.imagenes.otras.push(url);
          break;
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
    getOtrasCaract() {
      return this.cepa.attributes.otras_caract;
    },
    getIdentiBioqui() {
      return this.cepa.attributes.identi_bioqui;
    },
    getImagenesMicro() {
      return this.imagenes.micro;
    },
    getImagenesIdenti() {
      return this.imagenes.identi;
    },
    getImagenesOtras() {
      return this.imagenes.otras;
    },
  },
  mounted() {
    if (this.getCaractMicro) {
      this.imagenes.micro = [];
      this.llenarArregloImagenes(this.getCaractMicro.attributes, "micro");
    }
    if (this.getOtrasCaract) {
      this.imagenes.otras = [];
      this.llenarArregloImagenes(this.getOtrasCaract.attributes, "otras");
    }
    if (this.getIdentiBioqui) {
      this.imagenes.identi = [];
      this.llenarArregloImagenes(this.getIdentiBioqui.attributes, "identi");
    }
  },
};
</script> 