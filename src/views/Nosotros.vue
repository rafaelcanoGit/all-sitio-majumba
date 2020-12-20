<template>
  <div>
    <hr />
    <section id="nosotros">
      <h1><v-icon color="black">mdi-account-group</v-icon> Quienes Somos</h1>
      <br />
      <v-row>
        <v-col cols="12">
          <h3>
            <v-icon v-if="getNosotros === 'Misión'" color="black"
              >mdi mdi-calendar-multiple-check</v-icon
            >
            <v-icon v-if="getNosotros === 'Visión'" color="black"
              >mdi mdi-eye</v-icon
            >
            <v-icon v-if="getNosotros === 'Objetivos'" color="black"
              >mdi mdi-playlist-check</v-icon
            >
            {{ getNosotros }}
          </h3>
          <br />
          <v-card
            raised
            elevation="2"
            outlined
            shaped
            style="margin: auto auto; padding: 1rem"
          >
            <v-card-text class="text-justify" v-show="getNosotros === 'Misión'">
              <div v-html="getMision" class="ck-content"></div>
            </v-card-text>
            <v-card-text class="text-justify" v-show="getNosotros === 'Visión'">
              <div v-html="getVision" class="ck-content"></div>
            </v-card-text>
            <v-card-text
              class="text-justify"
              v-show="getNosotros === 'Objetivos'"
            >
              <div v-html="getObjetivos" class="ck-content"></div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import vuex from "vuex";
import "@/assets/css/ckeditor5.css";
require("@/assets/css/ckeditor5.css");

export default {
  data() {
    return {};
  },
  methods: {
    ...vuex.mapActions(["commitMision", "commitVision", "commitObjetivos"]),
  },
  computed: {
    ...vuex.mapGetters([
      "getNosotros",
      "getMision",
      "getVision",
      "getObjetivos",
    ]),
  },
  created() {
    //  if (this.getMision == null) {
    this.commitMision();
    //  }
    // if (this.getVision == null) {
    this.commitVision();
    // }
    // if (this.getObjetivos == null) {
    this.commitObjetivos();
    // }
  },
};
</script>

<style lang="scss" scoped>
//@import '@/assets/css/ckeditor5.css';

#nosotros {
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
  width: 100%;
  background: linear-gradient(#e9ecee, #e9ecee);
  background-size: cover;
  background-attachment: fixed;
  p {
    color: white;
  }
}

@media screen and (max-width: 1960px) {
  /* On screens that are 960px or less*/
  .v-card {
    max-width: 60%;
  }
}
@media screen and (max-width: 960px) {
  /* On screens that are 960px or less*/
  .v-card {
    max-width: 70%;
  }
}
@media screen and (max-width: 812px) {
  /* On screens that are 960px or less*/
  .v-card {
    max-width: 80%;
  }
}
@media screen and (max-width: 676px) {
  /* On screens that are 960px or less*/
  .v-card {
    max-width: 100%;
  }
}
</style>
