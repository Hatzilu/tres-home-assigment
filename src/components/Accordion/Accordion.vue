<script setup lang="ts">
const props = defineProps(['open'])
</script>
<template>
  <details
    class="bg-white border border-tresBlue-300 rounded-[4px] open:rounded-bl-none open:rounded-br-none"
    :open="props.open ? 'true' : undefined"
  >
    <slot />
  </details>
</template>
