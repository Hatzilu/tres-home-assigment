<script setup lang="ts">
import { computed } from 'vue'

const { pageIndex, countPerPage, onPageChanged, total } = defineProps<{
  pageIndex: number
  total: number
  countPerPage: number
  onPageChanged: (newPage: number) => void
}>()

const totalPages = computed(() => Math.ceil(total / countPerPage))

// Since index starts at 0, and it won't make sense to show page 0 to the user, we want to show each page as (index + 1) to the user
const pageIndexUserFriendly = computed(() => pageIndex + 1)

const shouldShowFirstPage = computed(() => pageIndexUserFriendly.value - 1 > 1)
const shouldShowLastPage = computed(() => pageIndexUserFriendly.value < totalPages.value)

const shouldShowLeftEllipsis = computed(() => pageIndexUserFriendly.value - 1 > 2)
const shouldShowRightEllipsis = computed(() => totalPages.value - pageIndexUserFriendly.value > 2)
</script>

<template>
  <fieldset class="flex gap-[4px]">
    <button
      type="button"
      v-if="shouldShowFirstPage"
      :key="`pagination-button-0`"
      @click="onPageChanged(0)"
      class="data-[selected]:font-bold mx-[4px]"
    >
      1
    </button>
    <p v-if="shouldShowLeftEllipsis">...</p>
    <button
      type="button"
      v-if="pageIndexUserFriendly > 1"
      :key="`pagination-button-${pageIndex - 1}`"
      @click="onPageChanged(pageIndex - 1)"
      class="data-[selected]:font-bold mx-[4px]"
    >
      {{ pageIndexUserFriendly - 1 }}
    </button>
    <button
      type="button"
      :key="`pagination-button-${pageIndex}`"
      @click="onPageChanged(pageIndex)"
      class="font-bold mx-[4px]"
    >
      {{ pageIndexUserFriendly }}
    </button>
    <button
      type="button"
      v-if="pageIndexUserFriendly + 1 < totalPages"
      :key="`pagination-button-${pageIndex + 1}`"
      @click="onPageChanged(pageIndex + 1)"
      class="mx-[4px]"
    >
      {{ pageIndexUserFriendly + 1 }}
    </button>
    <p v-if="shouldShowRightEllipsis">...</p>
    <button
      type="button"
      v-if="shouldShowLastPage"
      :key="`pagination-button-${totalPages}`"
      @click="onPageChanged(totalPages - 1)"
      class="mx-[4px]"
    >
      {{ totalPages }}
    </button>
  </fieldset>
</template>
