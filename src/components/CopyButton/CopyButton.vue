<script setup lang="ts">
import IconCopy from '../icons/IconCopy.vue'

const props = defineProps<{ content: string }>()

function copyIdToClipboard() {
  window.navigator.clipboard.writeText(props.content)
}
</script>

<template>
  <div class="min-w-[1px] bg-tresNeutral-800 h-[10.5px] mx-[8px]"></div>
  <button aria-label="Copy to clipboard" class="p-0 m-0" @click="copyIdToClipboard">
    <IconCopy width="16" height="16" />
  </button>
</template>
