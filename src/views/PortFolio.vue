<template>
  <div>
    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <div class="flex">
          <div>
            <h1 class="text-h1 font-weight-thin mb-4">Software Engineer</h1>
            <h2 class="subheading text-h3">Hakimi Keerai</h2>
            <v-card class="mx-0 mt-8" color="#ffff" max-width="400">
              <v-card-title>
                <v-icon large left> mdi-twitter </v-icon>
                <span class="text-h6 font-weight-light">Twitter</span>
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold">
                “There’s a lot more to programming than just coding”
              </v-card-text>
            </v-card>
          </div>

          <v-img
            class="img-no-bg"
            src="https://www.pngall.com/wp-content/uploads/14/Elon-Musk-PNG-Images.png"
          ></v-img>
        </div>
      </div>
    </v-parallax>
    <div>
      <CardProject />
      <TimeLine />
    </div>
  </div>
</template>

<script>
const CardProject = () => import("../components/CardProject.vue");
const TimeLine = () => import("../components/TimeLine.vue");
export default {
  components: {
    CardProject,
    TimeLine,
  },
};
</script>

<style scoped>
.btn {
  margin-top: 5%;
  width: 20px;
}

.flex {
  display: flex;
  justify-content: space-between;
  margin-top: 7%;
}
.img-no-bg {
  background-color: transparent !important;
  mix-blend-mode: multiply;
}
</style>
