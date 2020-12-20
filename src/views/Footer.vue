<template>
  <footer id="footer">
    <br />
    <v-container>
      <v-row justify="center" align="center">
        <v-col md="5" cols="12" sm="6" lg="5">
          <v-img
            style="width: 30vh; margin: auto auto"
            :src="require('../../public/images/fotos/logoufpsvertical.png')"
          >
          </v-img>
        </v-col>
        <v-col md="5" cols="12" sm="6" lg="5">
          <v-img
            style="width: 40vh; margin: auto auto"
            :src="require('../../public/images/fotos/majumba2.png')"
          ></v-img>
        </v-col>
        <v-col md="2" cols="12" sm="6" class="white--text text-left" lg="2"
          ><div class="headline">
            <h3 class="mb-5">Contacto</h3>
          </div>
          Avenida Gran Colombia No. 12E-96 Barrio Colsag, San José de Cúcuta -
          Colombia Teléfono (057)(7) 5776655
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <h3 class="white--text">
            2020 © All Rights Reserved. Desarrollado por: Rafael Cano - Dumar
            Basto
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  background-color: #272727;
}
.headline {
  display: block;
  margin: 10px 0 25px 0;
  border-bottom: 1px dotted #aa1916;
}
</style>
