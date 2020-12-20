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
                  <th>Detalle Óptico:</th>
                  <td class="grey--text">
                    {{ getCaractMacro.data[index].attributes.detalle_optico }}
                  </td>
                </tr>
                <tr>
                  <th>Elevación:</th>
                  <td class="grey--text">
                    {{ getCaractMacro.data[index].attributes.elevacion }}
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
                  <th>Tamaño:</th>
                  <td class="grey--text">
                    {{
                      primeraMayus(getCaractMacro.data[index].attributes.tamano)
                    }}
                  </td>
                </tr>
                <template
                  v-if="getCaractMacro.data[index].attributes.otras_caract"
                >
                  <tr>
                    <th colspan="2">
                      Otras Características: <br />
                      <p class="grey--text">
                        {{ getCaractMacro.data[index].attributes.otras_caract }}
                      </p>
                    </th>
                  </tr>
                </template>
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
                  <th>Ordenamiento:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractMicro.attributes.ordenamiento) }}
                  </td>
                </tr>
                <tr>
                  <th>Tinción de Gram:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractMicro.attributes.tincion_gram) }}
                  </td>
                </tr>
                <tr>
                  <th>Tinción de Esporas:</th>
                  <td class="grey--text">
                    {{
                      primeraMayus(getCaractMicro.attributes.tincion_esporas)
                    }}
                  </td>
                </tr>
                <tr>
                  <th>Ubicación de la Espora:</th>
                  <template v-if="getCaractMicro.attributes.ubicacion_esporas">
                    <td class="grey--text">
                      {{
                        primeraMayus(
                          getCaractMicro.attributes.ubicacion_esporas
                        )
                      }}
                    </td>
                  </template>
                  <template v-else>
                    <td class="grey--text">NO APLICA</td>
                  </template>
                </tr>
                <tr>
                  <th>Tinción de Cápsula:</th>
                  <td class="grey--text">
                    {{
                      primeraMayus(getCaractMicro.attributes.tincion_capsula)
                    }}
                  </td>
                </tr>
                <template v-if="getCaractMicro.attributes.otras_caract">
                  <tr>
                    <td colspan="2">
                      Otras Características:
                      <br />
                      <p
                        class="grey--text"
                        v-text="getCaractMicro.attributes.otras_caract"
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
                  <th>Oxidasa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.oxidasa) }}
                  </td>
                  <th>Catalasa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.catalasa) }}
                  </td>
                </tr>
                <tr>
                  <th>Citrato:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.citrato) }}
                  </td>
                  <th>TSI:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.tsi) }}
                  </td>
                </tr>
                <tr>
                  <th>Glucosa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.glucosa) }}
                  </td>
                  <th>Lactosa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.lactosa) }}
                  </td>
                </tr>
                <tr>
                  <th>Manitol:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.manitol) }}
                  </td>
                  <th>Xilosa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.xilosa) }}
                  </td>
                </tr>
                <tr>
                  <th>Arabinosa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.arabinosa) }}
                  </td>
                  <th>Sacarosa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.sacarosa) }}
                  </td>
                </tr>
                <tr>
                  <th>LIA:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.lia) }}
                  </td>
                  <th>SIM:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.sim) }}
                  </td>
                </tr>
                <tr>
                  <th>RM:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.rm) }}
                  </td>
                  <th>VP:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.vp) }}
                  </td>
                </tr>
                <tr>
                  <th>Nitrato:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.nitrato) }}
                  </td>
                  <th>Caldo Úrea:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.caldo_urea) }}
                  </td>
                </tr>
                <tr>
                  <th>OF:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.of) }}
                  </td>
                  <th>Almidón:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.almidon) }}
                  </td>
                </tr>
                <tr>
                  <th>Lecitinasa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.lecitinasa) }}
                  </td>
                  <th>Lipasa:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractBioqui.attributes.lipasa) }}
                  </td>
                </tr>
                <template v-if="getCaractBioqui.attributes.otros_azucares">
                  <tr>
                    <td colspan="4">
                      Otros Azúcares:
                      <br />
                      <b class="grey--text">
                        {{
                          primeraMayus(
                            getCaractBioqui.attributes.otros_azucares
                          )
                        }}
                      </b>
                    </td>
                  </tr>
                </template>
                <template v-if="getCaractBioqui.attributes.otras_enzimas">
                  <tr>
                    <td colspan="4">
                      Otros Enzimas: <br />
                      <p class="grey--text">
                        {{
                          primeraMayus(getCaractBioqui.attributes.otras_enzimas)
                        }}
                      </p>
                    </td>
                  </tr>
                </template>
                <tr>
                  <td colspan="4">
                    Hidrolisís de la Caseína:
                    <br />
                    <p class="grey--text">
                      {{
                        primeraMayus(
                          getCaractBioqui.attributes.hidrolisis_caseina
                        )
                      }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colspan="4">
                    Hidrolisís de la Gelatina: <br />
                    <p class="grey--text">
                      {{
                        primeraMayus(
                          getCaractBioqui.attributes.hidrolisis_gelatina
                        )
                      }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colspan="4">
                    Crecimiento en Nacl: <br />
                    <p class="grey--text">
                      {{
                        primeraMayus(
                          getCaractBioqui.attributes.crecimiento_nacl
                        )
                      }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colspan="4">
                    Hidrolisís de la Úrea: <br />
                    <p class="grey--text">
                      {{
                        primeraMayus(getCaractBioqui.attributes.hidrolisis_urea)
                      }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colspan="4">
                    Crecimiento en Diferentes Temperaturas: <br />
                    <p class="grey--text">
                      {{
                        primeraMayus(
                          getCaractBioqui.attributes
                            .crecimiento_diferentes_temperaturas
                        )
                      }}
                    </p>
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
  <div v-else-if="caract == 'Características Fisiológicas'">
    <v-container v-if="getCaractFisio">
      <v-row justify="center">
        <v-col md="5" lg="4" xl="3" sm="7" cols="12">
          <v-card elevation="10" color="white" shaped>
            <template v-if="getImagenesFisio.length">
              <v-carousel height="300">
                <v-carousel-item
                  v-for="(item, i) in getImagenesFisio"
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
                  <th>Acido Indolacético:</th>
                  <td class="grey--text">
                    {{
                      primeraMayus(getCaractFisio.attributes.acido_indolacetico)
                    }}
                  </td>
                </tr>
                <tr>
                  <th>Fósforo:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractFisio.attributes.fosforo) }}
                  </td>
                </tr>
                <tr>
                  <th>Sideróforos:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractFisio.attributes.sideroforos) }}
                  </td>
                </tr>
                <tr>
                  <th>Nitrógeno:</th>
                  <td class="grey--text">
                    {{ primeraMayus(getCaractFisio.attributes.nitrogeno) }}
                  </td>
                </tr>
                <template v-if="getCaractFisio.attributes.otras_caract">
                  <tr>
                    <td colspan="2">
                      Otras Características: <br />
                      <p class="grey--text">
                        {{ getCaractFisio.attributes.otras_caract }}
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
                          {{ getIdentiMolecu.attributes.secuen_forward }}
                        </td>
                        <td class="grey--text">
                          {{ getIdentiMolecu.attributes.produc_forward }}
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
                          {{ getIdentiMolecu.attributes.secuen_reversed }}
                        </td>
                        <td class="grey--text">
                          {{ getIdentiMolecu.attributes.produc_reversed }}
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
                          Informe de <br />
                          Secuenciación:
                        </th>
                        <td colspan="4" class="grey--text">
                          {{ getIdentiMolecu.attributes.obser_secuenciacion }}
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
              :src="getIdentiMolecu.attributes.imagen_secuencia"
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
  name: "bacteria",
  props: ["cepa", "caract"],
  data() {
    return {
      imagenes: {
        micro: [],
        bioqui: [],
        fisio: [],
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
        case "fisio":
          this.imagenes.fisio.push(url);
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
    getCaractFisio() {
      return this.cepa.attributes.caract_fisio;
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
    getImagenesFisio() {
      return this.imagenes.fisio;
    },
  },
  mounted() {
    if (this.getCaractMicro) {
      this.imagenes.micro = [];
      this.llenarArregloImagenes(this.getCaractMicro.attributes, "micro");
    }
    if (this.getCaractFisio) {
      this.imagenes.fisio = [];
      this.llenarArregloImagenes(this.getCaractFisio.attributes, "fisio");
    }
    if (this.getCaractBioqui) {
      this.imagenes.bioqui = [];
      this.llenarArregloImagenes(this.getCaractBioqui.attributes, "bioqui");
    }
    this.validarMetodosConser();
  },
};
</script> 