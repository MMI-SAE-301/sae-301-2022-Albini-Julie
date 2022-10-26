<script setup lang="ts">
import formMontre from "../../../components/FormMontre.vue";
defineProps<{
  id: string;
}>();
</script>
<template>
  <formMontre :id="id" />
</template>