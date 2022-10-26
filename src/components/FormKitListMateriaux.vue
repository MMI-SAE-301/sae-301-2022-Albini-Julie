<script setup lang="ts">
import { materiaux } from "@/types";
defineProps<{
  name?: string;
  label?: string;
}>();
</script>
<template>
  <FormKit
    :name="name"
    :label="label"
    value="#FFFFFF"
    type="radio"
    :options="materiaux"
    :sections-schema="{
      inner: {$el: null}, decorator: {$el: null},
      }"
    input-class="peer sr-only"
    options-class="flex gap-1">
    <template #label="context">
    <div class="h-10 w-10 rounded-full border-2 border-white peer-checked:border-violet_foncé" :style="{backgroundImage: `url(${context.option.value})`}"/>
  <span class="sr-only">{{context.option.label}}</span>
  <span class="text-[25px]">{{context.option.label}}</span>
    
</template>

    </FormKit>
</template>