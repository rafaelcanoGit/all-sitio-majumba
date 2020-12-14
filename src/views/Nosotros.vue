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
            color="#AA1916"
            raised
            elevation="12"
            dark
            style="margin: auto auto; padding: 1rem"
          >
            <v-card-text class="text-justify" v-show="getNosotros === 'Misión'">
              <div v-html="getMision"></div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem iure, repudiandae nemo perspiciatis qui, et molestias magni repellat obcaecati dicta enim nesciunt consequatur ratione vero mollitia aliquid soluta laudantium sunt nam. Modi odio cupiditate fuga, accusamus est, nobis ut id porro perferendis sit iure voluptate, assumenda minima praesentium. Commodi, ratione?
            </v-card-text>
            <v-card-text class="text-justify" v-show="getNosotros === 'Visión'">
              <div v-html="getVision"></div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione optio sint voluptas consequuntur doloremque minima delectus soluta, quisquam ipsum numquam labore quis laudantium excepturi magnam voluptate molestias? Consequuntur, reprehenderit. Deserunt corrupti tenetur voluptatem consectetur exercitationem blanditiis quidem eos mollitia qui fuga labore, debitis deleniti praesentium possimus voluptate, cupiditate nemo doloribus!
            </v-card-text>
            <v-card-text
              class="text-justify"
              v-show="getNosotros === 'Objetivos'"
            >
              <div v-html="getObjetivos"></div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sunt, pariatur rem perspiciatis id quos vel suscipit libero explicabo minus dolorem provident aspernatur quas quia quod placeat, culpa sapiente esse architecto reprehenderit at. Cumque sapiente voluptatem voluptatibus suscipit, cum nisi! Laborum nemo debitis iure? Optio amet eos ut hic mollitia.
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
    this.commitMision(), this.commitVision(), this.commitObjetivos();
  },
};
</script>

<style lang="scss" scoped>
//@import '@/assets/css/ckeditor5.css';

#nosotros {
  padding: 4rem 2rem 1rem 2rem; //top right bottom left
  width: 100%;

  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(../../public/images/fotos/lab.jpg);
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
