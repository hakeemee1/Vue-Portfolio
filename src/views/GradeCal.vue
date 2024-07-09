<template>
  <div>
    <h1 class="text-center mt-5">Grade Calculator</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="lastnameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="score"
              :rules="scoreRules" 
              :counter="100"
              label="Score"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-row justify="center">
      <!-- <v-col cols="12" sm="4" md="2">
        <v-btn
          :disabled="!valid"
          class="mx-auto"
          @click="validate"
        >
          Calculate
        </v-btn>
      </v-col> -->
      <v-col cols="auto">
        <v-dialog transition="dialog-top-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :disabled="!valid"
              @click="validate"
              color="primary"
              v-bind="attrs"
              v-on="on"
              >Calculate</v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar :color="color" dark>{{ `Grade: ${firstname} ${lastname}` }}</v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">{{ `Grade: ${grade}` }}</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ModalGrade from "@/components/ModalGrade.vue";
export default {
  comments: {
    ModalGrade,
  },
  methods: {
    validate() {
      if (this.score >= 80 && this.score <= 100) {
        this.grade = "A";
        this.color = "lime darken-4";
      } else if (this.score >= 70 && this.score <= 79) {
        this.grade = "B";
        this.color = "lime darken-1";
      } else if (this.score >= 60 && this.score <= 69) {
        this.grade = "C";
        this.color = "orange darken-1";
      } else if (this.score >= 50 && this.score <= 59) {
        this.grade = "D";
        this.color = "deep-orange darken-4";
      } else {
        this.grade = "F";
        this.color = "black";
      }
    },
  },
  data: () => ({
    color: '',
    grade: '',
    valid: false,
    firstname: "",
    lastname: "",
    score: "",
    scoreRules: [
      (v) => !!v || "Score is required",
      (v) => v <= 100 || "Score must be less than 100",
    ],
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    lastnameRules: [
      (v) => !!v || "Lastname is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
  }),
};
</script>

<style>
</style>