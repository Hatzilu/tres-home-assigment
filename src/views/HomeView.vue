<script setup lang="ts">
import Accordion from '@/components/Accordion/Accordion.vue'
import AccordionTitle from '@/components/Accordion/AccordionTitle.vue'
import AccordionContent from '@/components/Accordion/AccordionContent.vue'
import IconChevron from '@/components/icons/IconChevron.vue'
import Wallet from '@/components/Wallet/Wallet.vue'
import wallets from '@/assets/data.json'
import type { WalletType } from '@/types/generic.types'
import { computed, ref } from 'vue'
import { WALLETS_PER_PAGE_OPTIONS } from '@/consts/HomeView.consts'
import Pagination from '@/components/Pagination/Pagination.vue'

const open = ref(false)
const countPerPage = ref(10)
const pageIndex = ref(0)

// show the current number of items or the limit if there are more
const currentItems = computed(() =>
  Math.min(countPerPage.value * (pageIndex.value + 1), wallets.length),
)

function handleTogglingAllWallets() {
  open.value = !open.value
}

function handleWalletCountChange(event: Event) {
  if (!event.target) {
    return
  }
  const target = event.target as HTMLSelectElement
  countPerPage.value = Number(target.value)
  // reset the page index to avoid accidentally showing a non-existent page
  pageIndex.value = 0
}

function handlePageChange(newPage: number) {
  pageIndex.value = newPage
}
</script>

<template>
  <div class="flex flex-col bg-tresNeutral-200">
    <header>
      <h1
        v-tooltip="pageIndex"
        class="flex flex-col py-[12px] px-[24px] text-[16px] leading-[24px] font-bold text-tresNeutral-1100 border-b border-tresBlue-300"
      >
        Accounts
      </h1>
    </header>
    <main class="flex gap-[16px] flex-col py-[16px] px-[24px]">
      <section class="flex gap-[10px]">
        <p>Name/Identifier</p>
        <p>Asset</p>
        <p>Network</p>
      </section>

      <section class="flex justify-between">
        <button @click="handleTogglingAllWallets" class="flex items-center gap-[11.5px] w-fit">
          <IconChevron :data-active="open" class="data-[active=true]:rotate-90" />
          <p class="text-tresNeutral-800 text-[14px]" v-if="open == true">Collapse all</p>
          <p class="text-tresNeutral-800 text-[14px]" v-else>Expand all</p>
        </button>
        <p class="text-tresNeutral-800 text-[12px] font-normal leading-[16.8px]">
          {{ wallets.length }} wallets
        </p>
      </section>

      <ul class="list-none">
        <li
          class="my-[8px] max-w-full bg-white"
          v-for="(wallet, i) in wallets.slice(
            countPerPage * pageIndex,
            countPerPage * pageIndex + countPerPage,
          ) as WalletType[]"
        >
          <Wallet :key="wallet.id" :data="wallet" :open="open" />
        </li>
      </ul>
    </main>
    <footer class="px-[24px] py-1 bottom-0 sticky h-[57px] bg-tresNeutral-200">
      <div class="flex justify-between">
        <div class="text-[#8E8F98] text-[14px] leading-[21px] font-normal">
          view
          <select
            class="rounded-[4px] p-[8px] border border-[#D2D3D7] bg-transparent"
            :value="countPerPage"
            @change="handleWalletCountChange"
          >
            <option v-for="option in WALLETS_PER_PAGE_OPTIONS" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
          per page
        </div>
        <div class="flex gap-[5px] items-center">
          <p class="text-[#8E8F98] text-[14px] leading-[21px] font-normal mr-[19px]">
            showing {{ currentItems }} out of {{ wallets.length }} results
          </p>
          <button
            class="disabled:cursor-not-allowed group"
            :disabled="pageIndex - 1 < 0"
            aria-label="Previous page"
            @click="pageIndex--"
          >
            <IconChevron width="16" height="16" class="rotate-180 group-disabled:opacity-50" />
          </button>
          <Pagination
            :pageIndex="pageIndex"
            :total="wallets.length"
            :countPerPage="countPerPage"
            :onPageChanged="handlePageChange"
          />
          <button
            :disabled="pageIndex + 1 >= wallets.length / countPerPage"
            aria-label="Next page"
            @click="pageIndex++"
            class="disabled:cursor-not-allowed"
          >
            <IconChevron width="16" height="16" class="group-disabled:opacity-50" />
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>
