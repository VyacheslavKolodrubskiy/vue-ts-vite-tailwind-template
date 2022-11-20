<template>
  <img
    :alt="name"
    :src="image"
  >
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string
  extension: string
}>(), {
  extension: 'png'
})

const image = computed(() => {
  return new URL(`../assets/images/${props.name}.${props.extension}`, import.meta.url).href
})
</script>