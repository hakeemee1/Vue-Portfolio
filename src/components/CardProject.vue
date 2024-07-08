<template>
  <v-container>
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="6" md="4">
        <v-card class="mx-auto mt-5" max-width="344">
          <v-img :src="card.imgSrc" height="200px"></v-img>

          <v-card-title>
            {{ card.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ card.subtitle }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text>
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="card.show = !card.show">
              <v-icon>{{ card.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="card.show">
              <v-divider></v-divider>

              <v-card-text>
                {{ card.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          imgSrc: "https://images.klipfolio.com/website/public/5a275fee-d42b-4f31-91f6-8148d4d729af/executive%20dashboard.png",
          title: "DashBoard Admin",
          subtitle: "React js Next js Tailwind css ShardCN Zustand",
          description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing.",
          show: false
        },
        {
          imgSrc: "https://th.airportels.asia/wp-content/uploads/sites/2/2019/12/E-commerce-online-shopping.jpg",
          title: "E-commerce",
          subtitle: "React js Next js  ShardCN Zustand Ant design",
          description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing.",
          show: false
        },
        {
          imgSrc: "https://cdn.techjockey.com/blog/wp-content/uploads/2023/07/31162756/What-is-SaaS-LMS-How-to-Choose-Best-LMS-for-Organisation.jpg",
          title: "LMS System",
          subtitle: "React js Next js Tailwind css",
          description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing.",
          show: false
        },
        
      ]
    };
  }
};
</script>