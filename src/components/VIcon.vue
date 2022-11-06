<template>
  <svg
    class="h-6 w-6"
    aria-hidden="true"
  >
    <use
      :href="symbolId"
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
    prefix?: string
    color?: string
  }>(),
  {
    prefix: "icon",
    color: "#000000",
  }
)

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
