<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <!-- <pre>{{ user }}</pre> -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Product from 'class/Product'

export default defineComponent({
  name: 'PageIndex',
mounted(){
Product.insert({
  data: require('./productos.json')
})
},
  // computed:{
  //   user(){
  //     return Product.all()
  //   }
  // }

})
</script>
