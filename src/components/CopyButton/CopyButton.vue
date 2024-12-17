<script setup lang="ts">
import IconCopy from '../icons/IconCopy.vue'

const props = defineProps<{ content: string }>()

function copyIdToClipboard() {
  window.navigator.clipboard.writeText(props.content)
}
</script>

<template>
  <button aria-label="Copy to clipboard" class="p-0 m-0" @click="copyIdToClipboard">
    <IconCopy width="16" height="16" />
  </button>
</template>
