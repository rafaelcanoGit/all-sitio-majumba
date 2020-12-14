<template>
  <footer id="footer">
    <br />
    <v-row >
      <v-col cols="4" style="padding:0rem">
        <v-row>
          <v-col cols="12">
            <v-img
              style="height:15vh;width:50%;margin: auto auto"
              :src="require('../../public/images/fotos/majumba2.png')"
            ></v-img> </v-col
          ><br />

          <v-col cols="12">
            <v-img
              style="height:20vh;width:28vh;margin: auto auto;"
              :src="require('../../public/images/fotos/logoufpsvertical.png')"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8"> </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3 class="white--text">
          2020 © All Rights Reserved. Desarrollado por: VAVM - División de
          Sistemas
        </h3>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  background-color: #272727;
  
}
</style>
