<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import Accordion from '@/components/Accordion/Accordion.vue'
import AccordionTitle from '@/components/Accordion/AccordionTitle.vue'
import AccordionContent from '@/components/Accordion/AccordionContent.vue'
import IconChevron from '@/components/icons/IconChevron.vue'
import Wallet from '@/components/Wallet/Wallet.vue'
import wallets from '@/assets/data.json'
import type { WalletType } from '@/types/generic.types'
import { ref } from 'vue'

const open = ref(false)

function toggle() {
  open.value = !open.value
}
</script>

<template>
  <div class="flex flex-col bg-tresNeutral-200">
    <header>
      <PageHeader>Accounts</PageHeader>
    </header>
    <main class="flex gap-[16px] flex-col py-[16px] px-[24px]">
      <section class="flex gap-[10px]">
        <p>Name/Identifier</p>
        <p>Asset</p>
        <p>Network</p>
      </section>
      <section class="flex justify-between">
        <button @click="toggle" class="flex items-center gap-[11.5px] w-fit">
          <IconChevron :data-active="open" class="data-[active=true]:rotate-90" />
          <p class="text-tresNeutral-800 text-[14px]" v-if="open == true">Collapse all</p>
          <p class="text-tresNeutral-800 text-[14px]" v-else>Expand all</p>
        </button>
        <p class="text-tresNeutral-800 text-[12px] font-normal leading-[16.8px]">
          {{ wallets.length }} wallets
        </p>
      </section>
      <ul class="list-none">
        <li class="my-[8px] max-w-full bg-white" v-for="wallet in wallets as WalletType[]">
          <Wallet :key="wallet.id" :data="wallet" :open="open" />
        </li>
      </ul>
    </main>
    <footer class="px-[24px] py-1 bottom-0 sticky h-[57px] bg-tresNeutral-200">
      <form class="flex justify-between">
        <div>
          view
          <select>
            <option>10</option>
          </select>
          per page
        </div>
        <div>showing 3 out of 3 results</div>
      </form>
    </footer>
  </div>
</template>
