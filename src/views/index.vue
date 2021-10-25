<template>
  <div>{{ count }}</div>
  <!-- <div>{{ weather }}</div> -->
  <template v-for="(item, index) in  weather.weather" :key="index">
    <div>{{ item }}</div>
  </template>

  <div @click="count++">count++</div>

  <template v-for="(item, index) in  count" :key="index">
    <div>{{ item }}</div>
  </template>
  <Thp></Thp>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";
import Thp from "../components/thp.vue"
import { AsyncDataParam, key, State } from "../store";
export default defineComponent({
  components: {
    Thp,
  },
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
<style lang="scss">
</style>
