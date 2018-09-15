<template>
  <div class="data-set-wrapper">
    <transition appear name="fade" mode="out-in">
      <Loader v-if="loading" key="loading" class="loader-image"></Loader>
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
  import Loader from '@/components/Loader.vue';
  import { setTimeout } from 'timers';
  const getter = new DataFetch();
  export default Vue.component ('planets', {
    components: {
      Loader
    },
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
