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
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  },
};
</script>


<style>
</style>