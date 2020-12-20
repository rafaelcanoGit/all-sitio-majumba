<template>
  <v-container>
    <v-row align-content="center">
      <v-col xl="12" sm="12" md="12" cols="12">
        <img src="/iconos/404.svg" width="700px" height="450px" />
      </v-col>
    </v-row>
    <v-row align-content="center">
      <v-col xl="12" sm="12" md="12" cols="12">
        <div class="message">{{ mensaje }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ["mensaje"],
};
</script>
<style lang="css">
.message {
  font-size: 40px;
  text-align: center;
}
</style>