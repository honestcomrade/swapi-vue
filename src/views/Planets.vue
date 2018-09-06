<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul id="example-1">
      <li v-for="planet in results" :key="planet.name">
        {{ planet.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DataFetch } from '@/services/fetch-service.ts';
const getter = new DataFetch();
export default Vue.extend ({
  data() {
    return {
      loading: true,
      results: null,
    };
  },
  created() {
    getter.getData('planets').then((response) => {
      this.loading = false;
      this.results = response.results;
      console.log(response);
    }).catch((err) => {
      console.error(err);
    });
  },
});
</script>
<style lang="scss">
  .home {
    ul {
      list-style-type: none;
      list-style: none;
      padding: 0;
      li {
        cursor: default;
      }
    }
  }
</style>
