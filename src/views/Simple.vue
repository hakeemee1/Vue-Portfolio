<template>
  <div>
    <h1>Simple</h1>
    <h1 v-if="show">Simple33</h1>
    <button @click="show = !show">Toggle</button>

    <ul>
      <li v-for="item in items" :key="item.title">
        {{ item.title }}
        <v-btn @click="AlertName(item.color)">Hello</v-btn>
      </li>
    </ul>
    <h1>{{ test }}</h1>
    <v-btn v-if="test < 10" v-model="test" label="test" @click="plus"
      >plus</v-btn
    >
    <v-btn v-else-if="test > 9" v-model="test" label="test" @click="minus">minus</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 0,
      show: true,
      items: [
        { title: "Click Me", color: "red" },
        { title: "Click Me", color: "green" },
        { title: "Click Me", color: "blue" },
        { title: "Click Me 2", color: "yellow" },
      ],
    };
  },
  methods: {
    AlertName(item) {
      alert(item);
    },
    plus() {
      this.test = this.test + 1;
    },
    minus() {
      this.test = this.test - 1;
    },
  },
};
</script>


<style>
</style>