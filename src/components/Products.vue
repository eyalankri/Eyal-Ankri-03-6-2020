<template>
  <div class="products">
    <v-btn class depressed small text @click="(currencyUsd = !currencyUsd)">
      change to:
      <span v-if="currencyUsd">ILS</span>
      <span v-if="!currencyUsd">USD</span>
    </v-btn>

    <v-container>
      <v-row v-if="!showSelectedProducts">
        <div v-for="prod in products" :key="prod.id" style="display:contents">
          <v-col v-if="!prod.selected" cols="12" md="6" lg="3" style="width:344px">
            <v-card class="mx-auto" justify-center style="width:344px">
              <v-card-subtitle class="overline">
                <span class="text-lowercase">From:</span>
                {{prod.store}}
              </v-card-subtitle>
              <v-img :src="prod.src" max-height="200" contain />
              <v-card-title>{{prod.name}}</v-card-title>
              <v-card-subtitle class="overline">
                <span class="red--text">
                  price:
                  <span v-if="currencyUsd">{{prod.currencyUsd}}{{prod.priceUsd}}</span>
                  <span v-if="!currencyUsd">{{prod.currencyIls}}{{prod.priceIls}}</span>
                </span>
                <br />
                Est. Delivery: {{prod.estDelieryDate}}
              </v-card-subtitle>
              <v-card-actions>
                <v-btn text @click="selectProduct(prod.id)">remove</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </div>
      </v-row>

      <v-row v-if="showSelectedProducts">
        <div v-for="prod in products" :key="prod.id" style="display:contents">
          <v-col v-if="prod.selected" cols="12" md="6" lg="3">
            <v-card class="mx-auto" justify-center max-width="344">
              <v-card-subtitle class="overline">
                <span class="text-lowercase">From:</span>
                {{prod.store}}
              </v-card-subtitle>
              <v-img :src="prod.src" max-height="200" contain />
              <v-card-title>{{prod.name}}</v-card-title>
              <v-card-subtitle class="overline">
                <span class="red--text">
                  price:
                  <span v-if="currencyUsd">{{prod.currencyUsd}}{{prod.priceUsd}}</span>
                  <span v-if="!currencyUsd">{{prod.currencyIls}}{{prod.priceIls}}</span>
                </span>
                <br />
                Est. Delivery: {{prod.estDelieryDate}}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import moment from "moment";

export default {
  data: () => ({
    products: null,
    showSelectedProducts: false,
    currencyUsd: true
  }),
  methods: {
    selectProduct(id) {
      this.$store.dispatch("selectProduct", id);
       this.$emit("aggrigateData")
    }
  },
  mounted() {
    this.products = this.$store.state.products;

    this.products.forEach(item => {
      item.estDelieryDate = moment()
        .add(item.estDelieryDays, "days")
        .format("DD/MM/YYYY");
    });

    this.products = this.products.sort(
      (a, b) => new Date(a.estDelieryDays) - new Date(b.estDelieryDays)
    );

    this.showSelectedProducts = this.$store.state.showSelectedProducts;
  }
};
</script>
<style>
.products {
  width: 100%;
}
</style>