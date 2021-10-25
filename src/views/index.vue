<template>
    <Thp></Thp>
    <!-- <Test></Test> -->
    <!-- <h2>首页</h2>
    <router-view></router-view>-->
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Thp from "../components/thp.vue"
import Test from "./test.vue"
export default defineComponent({
    components: {
        Thp,
        Test,
    },
    asyncData() {
        console.log(">>> index [aysncData]");
        return Promise.resolve({ a: 111 });
    },
    setup(props, context) {
        return {};
    },
});
</script>
<style lang="scss">
</style>
