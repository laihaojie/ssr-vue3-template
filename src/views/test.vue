<template>
  <div>fdsfdsfsdf</div>
  <div>{{ count }}</div>
  <!-- <div>{{ weather }}</div> -->
  <template v-for="(item, index) in  weather.weather" :key="index">
    <div>{{ item }}</div>
  </template>

  <div @click="count++">count++</div>

  <template v-for="(item, index) in  count" :key="index">
    <div>{{ item }}</div>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex';
import { AsyncDataParam, key, State } from '../store';
export default defineComponent({
  asyncData({ store }: AsyncDataParam) {
    return store.dispatch("ASYNC_WEATHER");
  },
  setup(props) {

    const count = ref(20)
    const { weather } = useStore<State>(key).state;

    return {
      count,
      weather: weather || {},
    }
  }
});
</script>

<style lang='scss' scoped>
</style>