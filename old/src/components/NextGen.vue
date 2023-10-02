<template>
  <div :id="containerId"></div>
</template>
<script setup>
// @ts-check
import { createApp, defineAsyncComponent, onMounted } from "vue";
import { nanoid } from "nanoid";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});
const randomId = nanoid();
const containerId = `container-${randomId}`;

onMounted(() => {
  const SubAppComponent = defineAsyncComponent(() => import(props.path));
  const SubApp = createApp(SubAppComponent);
  SubApp.mount(`#${containerId}`);
});
</script>
