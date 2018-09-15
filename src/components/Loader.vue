<template>
  <div class="loader-image"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Loader extends Vue {
  created() {
    console.log('created');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loader-image {
  border-radius: 1px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  height: 400px;
  width: 350px;
  background-image: url(../assets/tumblr_ncongzaETr1s2wio8o1_500.gif);
  background-position: center;
  background-size: cover;
}
</style>
