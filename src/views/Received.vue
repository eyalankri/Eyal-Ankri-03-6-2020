<template>
  <div class="Reveived">
    <v-container>
      <v-row>      
        <Products />
      </v-row>
    </v-container>
  </div>
</template>


<script>
import Products from "@/components/Products";

export default {
  components: { Products },
  beforeCreate(){
    this.$store.dispatch("changeShowSelectedProducts", true);
  }
};
</script>