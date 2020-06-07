<template>
  <div class="home">
    <v-tabs>
      <v-tab>
        <v-icon left>view_list</v-icon>Products List
      </v-tab>
      <v-tab>
        <v-icon left>store</v-icon>Shops List
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-container>
            <v-row>
              <Products v-on:aggrigateData="aggrigateData()" />
            </v-row>
          </v-container>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-container> <div v-if="arrAggrigatedData">
            <v-card class="mx-auto" max-width="400" tile></v-card>
           
            <v-list-item v-for="agg in arrAggrigatedData" :key="agg.store">
              <v-list-item-content>
                <v-list-item-title>
                  <span v-if="agg.sum > 0">
                    <b>{{agg.store}}</b>
                    : $ {{agg.sum}}
                  </span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            </div>
            <div v-else>There is no aggrigated data yet...</div>
          </v-container>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>


<script>
import Products from "@/components/Products";
export default {
  components: { Products },
  data: () => ({
    arrAggrigatedData: null
  }),
  methods: {
    aggrigateData() {
      let products = (this.products = this.$store.state.products);
      let stores = [...new Set(products.map(p => p.store))];

      let arr = [];
      stores.forEach(store => {
        let sum = 0;
        for (let i = 0; i < products.length; i++) {
          if (store == products[i].store) {
            if (products[i].selected) {
              sum += products[i].priceUsd;
            }
          }
        }
        let obj = {
          store: store,
          sum: sum
        };
        arr.push(obj);
      });
      this.arrAggrigatedData = arr;
    }
  },
  beforeCreate() {
    this.$store.dispatch("changeShowSelectedProducts", false);
  }
};
</script>