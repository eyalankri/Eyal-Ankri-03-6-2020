<template>
  <v-app>
    <Navbar />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from "axios";
export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  }),
  mounted() {
    this.getRatesFromApi();
    this.getRates();
  },
  /* eslint-disable */

  methods: {
    getRates() {
      window.setInterval(() => {
        this.getRatesFromApi()
      }, 10000);
    },
    getRatesFromApi(){
      axios
          .get("https://api.exchangeratesapi.io/latest?symbols=USD,ILS")
          .then(res => {
            let usd = parseFloat(res.data.rates.USD);
            let ils = parseFloat(res.data.rates.ILS);
            let rate = ils / usd;
            this.$store.dispatch("setRates", rate);        
          })

          .catch(error => {
            //  this.$router.push({
            //  name: "Login"
            //  });
          });
    }
  }
};
</script>
