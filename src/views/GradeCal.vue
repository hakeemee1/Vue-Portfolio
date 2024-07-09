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
      <v-col cols="12" sm="4" md="2">
        <v-btn
          :disabled="!valid"
          class="mx-auto"
          @click="validate"
        >
          Calculate
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  methods: {
    validate() {
      if(this.score >= 80 && this.score <= 100) {
        alert(`${this.firstname} ${this.lastname} => Grade: A, Score: ${this.score}`);
      }
      else if(this.score >= 70 && this.score <= 79) {
        alert(`${this.firstname} ${this.lastname} => Grade: B, Score: ${this.score}`);
      }
      else if(this.score >= 60 && this.score <= 69) {
        alert(`${this.firstname} ${this.lastname} => Grade: C, Score: ${this.score}`);
      }
      else if(this.score >= 50 && this.score <= 59) {
        alert(`${this.firstname} ${this.lastname} => Grade: D, Score: ${this.score}`);
      }
      else {
        alert(`${this.firstname} ${this.lastname} => Grade: F, Score: ${this.score}`);
      }
    }
  },
  data: () => ({
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