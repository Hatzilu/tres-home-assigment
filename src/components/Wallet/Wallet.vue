<script setup lang="ts">
import type { WalletType } from '@/types/generic.types'
import Accordion from '../Accordion/Accordion.vue'
import AccordionTitle from '../Accordion/AccordionTitle.vue'
import AccordionContent from '../Accordion/AccordionContent.vue'
import IconUsd from '../icons/IconUsd.vue'
import { numberToCurrencyString as numberToCurrencyString } from '@/utils/currency.utils'
import IconInfo from '../icons/IconInfo.vue'
import { computed } from 'vue'

const props = defineProps<{ data: WalletType; open: boolean }>()

const wallet = props.data
const isOpen = computed(() => props.open)

const addedDate = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: '2-digit',
  day: '2-digit',
}).format(new Date(props.data.createdAt))
</script>

<template>
  <article class="border-collapse">
    <Accordion :open="isOpen" class="max-w-full">
      <AccordionTitle>
        <div class="flex flex-col w-full">
          <header class="flex justify-between w-full p-[16px]">
            <div class="flex gap-[16px] max-w-[70%] items-center">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/b059/f2eb/3aaf93145fd62647cb908c5532e06795?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYsQP9jwJ73mUFklQMJoZRTGD6L4gzfsqJxgNWXiXtowHvSUcSdhfjrMWrzd3CpQfUXXA3igwRD00KzOEuRYwsm5wR6PhBFthOpmlXf3JNTZ8dQvgKEGg0~sOQ1KKaF5E2OZvLsjzxCgsBcczlNE8CGurS71MUcjGJzfQ-~WunpaawOWS2kcKy4XinkM-iR9QCn9NcKe~O2cG1WPxzShF10Cn2YaFs2lWCqpYtbhaQnFfVz5Ph9buEwbpTmwEPc4V5S62~aKpiTtYWT7wJxrVFN9hSOySuDKfNkf7jf9qKd81i06qV9-ZugW0OBfqvEZKL9oL7ZkdK7mpd3fvy4t9A__"
                  alt="Binance logo"
                  width="24"
                  height="24"
                  class="min-w-[24px] min-h-[24px]"
                />
              </div>
              <div class="flex flex-col max-w-full">
                <h2 class="font-bold w-fit">
                  {{ wallet.name }}
                </h2>
                <p
                  class="text-[14px] w-fit whitespace-nowrap text-tresNeutral-700 max-w-full overflow-hidden text-ellipsis"
                >
                  # {{ wallet.identifier }}
                </p>
              </div>
            </div>
            <div class="text-[18x] leading-[18px] font-bold">
              {{ numberToCurrencyString(wallet.totalUsdValue) }} USD
            </div>
          </header>
          <div role="presentation" class="min-h-[1px] bg-tresBlue-300" />
          <div class="p-[16px] flex gap-[8px]">
            <p>Added: {{ addedDate }}</p>
            <div role="presentation" class="min-w-[1px] bg-tresBlue-300"></div>
            <p
              class="bg-tresNeutral-400 px-[8px] py-[4px] rounded-[4px] text-[12px] leading=[16.8x]"
            >
              {{ wallet.assets?.length || 'N/A' }}
              {{ wallet.assets?.length === 1 ? 'asset' : 'assets' }}
            </p>
          </div>
        </div>
      </AccordionTitle>
      <AccordionContent>
        <table class="w-full">
          <thead>
            <tr>
              <th
                class="text-[12px] px-[16px] py-[14px] text-tresNeutral-700 border border-tresBlue-300"
              >
                ASSETS
              </th>
              <th
                class="text-[12px] px-[16px] py-[14px] text-tresNeutral-700 border border-tresBlue-300"
              >
                NETWORK
              </th>
              <th
                class="text-[12px] px-[16px] py-[14px] text-tresNeutral-700 border border-tresBlue-300"
              >
                <div class="flex gap-[8px] items-center">CURRENT BALANCE <IconInfo /></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="asset in wallet.assets || []">
              <td class="p-[12px] border border-tresBlue-300">
                <div class="flex items-center gap-[5px]">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/caa4/4a2e/319ab2951945df8b3c6c347c13e7be1d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A9NjAh~QrN1cDf-VBpJ8JaSb1aV0APGEuX~x~nlnWfJse0XbgENnOXv3Yt4-nSra5fvA9ZilsdEf72vc0if~mNF7dKpTkxZ1GHsYnHHYgnNXvnY37q13ytQpJcom22Pxy7WPeBGeVMIuusJsX9HhAON6j-cJbwl0NGVdiwnviZDJ7gp7nh92EUjht9dYCtLSjdMhQyMOSGE-Mli9T10cM1SqjwrQPjFtugyQrdD7t54FhQpG3FZz7NcdsA1-Oszs8gfiaBdaqqPTCDNtM-PYM~YpjqbRImYJ9F1AWf2BorZKLi3cmSNh0yJNfdQg53N2eZO1CeImVQByt9~ryTRFyQ__"
                    alt="asset logo"
                    width="16"
                    height="16"
                    class="max-h-[16px]"
                  />
                  <p>
                    {{ asset.name }}
                  </p>
                </div>
              </td>
              <td class="p-[12px] border border-tresBlue-300">{{ asset.asset.network }}</td>
              <td class="p-[12px] border border-tresBlue-300">
                <div class="flex flex-col">
                  <p>{{ numberToCurrencyString(asset.assetAmount) }} {{ asset.asset.symbol }}</p>
                  <div class="flex gap-[4px] items-center">
                    <IconUsd />
                    <p class="text-tresNeutral-700">
                      {{ numberToCurrencyString(asset.assetUsdValue?.value || 0) }} USD
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="bg-tresBlue-200">
              <td class="p-[12px] font-bold border border-tresBlue-300">
                <div class="flex gap-[8px]">
                  <p class="font-bold text-[16px]">{{ wallet.assets.length }} assets</p>
                  <p class="text-[12px] py-[4px] px-[8px] bg-tresBlue-300">Summary</p>
                </div>
              </td>
              <td class="p-[12px] border border-tresBlue-300">
                <img
                  src="https://s3-alpha-sig.figma.com/img/caa4/4a2e/319ab2951945df8b3c6c347c13e7be1d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A9NjAh~QrN1cDf-VBpJ8JaSb1aV0APGEuX~x~nlnWfJse0XbgENnOXv3Yt4-nSra5fvA9ZilsdEf72vc0if~mNF7dKpTkxZ1GHsYnHHYgnNXvnY37q13ytQpJcom22Pxy7WPeBGeVMIuusJsX9HhAON6j-cJbwl0NGVdiwnviZDJ7gp7nh92EUjht9dYCtLSjdMhQyMOSGE-Mli9T10cM1SqjwrQPjFtugyQrdD7t54FhQpG3FZz7NcdsA1-Oszs8gfiaBdaqqPTCDNtM-PYM~YpjqbRImYJ9F1AWf2BorZKLi3cmSNh0yJNfdQg53N2eZO1CeImVQByt9~ryTRFyQ__"
                  width="16"
                  height="16"
                />
              </td>
              <td class="p-[12px] border border-tresBlue-300">
                {{ numberToCurrencyString(wallet.totalUsdValue) }} USD
              </td>
            </tr>
          </tbody>
        </table>
      </AccordionContent>
    </Accordion>
  </article>
</template>
