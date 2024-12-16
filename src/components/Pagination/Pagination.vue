<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  pageIndex: number
  total: number
  countPerPage: number
  onPageChanged: (newPage: number) => void
}>()

const totalPages = computed(() => Math.ceil(props.total / props.countPerPage))
</script>

<template>
  <fieldset class="flex gap-[4px]">
    <button
      v-for="(n, _idx) in totalPages"
      type="button"
      :key="`pagination-button-${_idx}`"
      @click="onPageChanged(_idx)"
      :data-selected="pageIndex == _idx || undefined"
      class="data-[selected]:font-bold mx-[4px]"
    >
      {{ _idx + 1 }}
    </button>
  </fieldset>
</template>
