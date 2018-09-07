<template>
  <div class="data-set-wrapper">
    <transition name="fade" mode="out-in">
      <div v-if="loading" key="loading" class="loader-image"></div>
      <ul v-else key="loaded">
        <li v-for="planet in results" :key="planet.name">
          {{ planet.name }}
        </li>
      </ul>
    </transition>  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DataFetch } from '@/services/fetch-service.ts';
import { setTimeout } from 'timers';
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
      this.results = response.results;
      setTimeout(() => {
        this.loading = false;
      }, 2500);
    }).catch((err) => {
      console.error(err);
    });
  },
});
</script>
<style lang="scss">
  .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter-active {
    transition: opacity .2s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .data-set-wrapper {
    height: calc(100% - 83px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    .loader-image {
      border-radius: 1px;
      box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
      height: 400px;
      width: 350px;
      background-image: url(../assets/tumblr_ncongzaETr1s2wio8o1_500.gif);
      background-position: center;
      background-size: cover;
    }
    ul {
      list-style-type: none;
      list-style: none;
      padding: 0;
      li {
        cursor: default;
        font-size: 19px;
        padding: 4px;
      }
    }
  }
</style>
