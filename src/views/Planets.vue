<template>
  <div class="data-set-wrapper">
    <transition appear name="fade" mode="out-in" @after-enter="showList = true">
      <Loader v-if="loading" key="loading" class="loader-image"></Loader>
      <ul v-else key="loaded">
        <transition-group name="slide">
          <li class="planet" v-for="planet in results" :key="planet.name" v-if="showList">
            {{ planet.name }}
          </li>
        </transition-group>
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

    methods: {
      async getPlanets() {
        const { data } = await getter.getData('planets');
        return data;
      }
    },
    components: {
      Loader
    },
    data() {
      return {
        loading: true,
        results: null,
        showList: false,
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
  .slide {
    transition: all 0.5s;

  }
  .slide-enter, .slide-leave-to
  /* .slide-leave-active for <2.1.8 */ {
    opacity: 0;
    transform: scale(0);
  }
  .slide-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .slide-leave-active {
    /*position: absolute;*/
  }

  .slide-move {
    opacity: 1;
    transition: all 0.5s;
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
