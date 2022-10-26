<script setup lang="ts">
import SvgMontre from "../../../components/SvgMontre.vue";
defineProps<{
  id: string;
}>();
</script>
<template>
  <SvgMontre :id="id" />
</template>