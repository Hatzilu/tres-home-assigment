<script setup lang="ts">
import type { WalletType } from '@/types/generic.types'
import Accordion from '../Accordion/Accordion.vue'
import AccordionTitle from '../Accordion/AccordionTitle.vue'
import AccordionContent from '../Accordion/AccordionContent.vue'
import IconUsd from '../icons/IconUsd.vue'
import { numberToCurrencyString as numberToCurrencyString } from '@/utils/currency.utils'
import IconInfo from '../icons/IconInfo.vue'
import { computed } from 'vue'
import TooltipProvider from '../ui/tooltip/TooltipProvider.vue'
import Tooltip from '../ui/tooltip/Tooltip.vue'
import TooltipTrigger from '../ui/tooltip/TooltipTrigger.vue'
import TooltipContent from '../ui/tooltip/TooltipContent.vue'
import CopyButton from '../CopyButton/CopyButton.vue'
import FormattedCurrency from '../FormattedCurrency/FormattedCurrency.vue'

const props = defineProps<{ data: WalletType; open: boolean }>()

const wallet = props.data
const isOpen = computed(() => props.open)

const addedDate = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: '2-digit',
  day: '2-digit',
}).format(new Date(props.data.createdAt))

const truncatedIdentifier = `${wallet.identifier.slice(0, 5)}...${wallet.identifier.slice(wallet.identifier.length - 1 - 5, wallet.identifier.length - 1)}`
</script>

<template>
  <article class="border-collapse">
    <Accordion :open="isOpen" class="max-w-full">
      <AccordionTitle>
        <div class="flex flex-col w-full">
          <header class="flex justify-between w-full p-[16px]">
            <div class="flex gap-[16px] max-w-[70%] items-center">
              <div class="relative flex">
                <img
                  src="https://s3-alpha-sig.figma.com/img/b059/f2eb/3aaf93145fd62647cb908c5532e06795?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYsQP9jwJ73mUFklQMJoZRTGD6L4gzfsqJxgNWXiXtowHvSUcSdhfjrMWrzd3CpQfUXXA3igwRD00KzOEuRYwsm5wR6PhBFthOpmlXf3JNTZ8dQvgKEGg0~sOQ1KKaF5E2OZvLsjzxCgsBcczlNE8CGurS71MUcjGJzfQ-~WunpaawOWS2kcKy4XinkM-iR9QCn9NcKe~O2cG1WPxzShF10Cn2YaFs2lWCqpYtbhaQnFfVz5Ph9buEwbpTmwEPc4V5S62~aKpiTtYWT7wJxrVFN9hSOySuDKfNkf7jf9qKd81i06qV9-ZugW0OBfqvEZKL9oL7ZkdK7mpd3fvy4t9A__"
                  alt="Binance logo"
                  width="24"
                  height="24"
                  class="min-w-[24px] min-h-[24px]"
                />
                <img
                  v-if="wallet.assets.length > 1"
                  src="https://s3-alpha-sig.figma.com/img/b059/f2eb/3aaf93145fd62647cb908c5532e06795?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYsQP9jwJ73mUFklQMJoZRTGD6L4gzfsqJxgNWXiXtowHvSUcSdhfjrMWrzd3CpQfUXXA3igwRD00KzOEuRYwsm5wR6PhBFthOpmlXf3JNTZ8dQvgKEGg0~sOQ1KKaF5E2OZvLsjzxCgsBcczlNE8CGurS71MUcjGJzfQ-~WunpaawOWS2kcKy4XinkM-iR9QCn9NcKe~O2cG1WPxzShF10Cn2YaFs2lWCqpYtbhaQnFfVz5Ph9buEwbpTmwEPc4V5S62~aKpiTtYWT7wJxrVFN9hSOySuDKfNkf7jf9qKd81i06qV9-ZugW0OBfqvEZKL9oL7ZkdK7mpd3fvy4t9A__"
                  :alt="wallet.assets[0].name"
                  width="24"
                  height="24"
                  class="relative top-0 right-[25%] min-w-[24px] min-h-[24px]"
                />
                <div
                  v-if="wallet.assets.length > 2"
                  src="https://s3-alpha-sig.figma.com/img/b059/f2eb/3aaf93145fd62647cb908c5532e06795?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYsQP9jwJ73mUFklQMJoZRTGD6L4gzfsqJxgNWXiXtowHvSUcSdhfjrMWrzd3CpQfUXXA3igwRD00KzOEuRYwsm5wR6PhBFthOpmlXf3JNTZ8dQvgKEGg0~sOQ1KKaF5E2OZvLsjzxCgsBcczlNE8CGurS71MUcjGJzfQ-~WunpaawOWS2kcKy4XinkM-iR9QCn9NcKe~O2cG1WPxzShF10Cn2YaFs2lWCqpYtbhaQnFfVz5Ph9buEwbpTmwEPc4V5S62~aKpiTtYWT7wJxrVFN9hSOySuDKfNkf7jf9qKd81i06qV9-ZugW0OBfqvEZKL9oL7ZkdK7mpd3fvy4t9A__"
                  :alt="wallet.assets[1].name"
                  width="24"
                  height="24"
                  class="absolute right-0 top-0 flex items-center justify-center border rounded-full border-tresBlue-300 bg-white min-w-[24px] min-h-[24px]"
                >
                  <p class="text-[10px]">+{{ wallet.assets.length - 2 }}</p>
                </div>
              </div>
              <div class="flex flex-col max-w-full">
                <h2 class="font-bold w-fit">
                  {{ wallet.name }}
                </h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <p
                        class="text-[14px] w-fit whitespace-nowrap text-tresNeutral-700 max-w-full overflow-hidden text-ellipsis"
                      >
                        # {{ truncatedIdentifier }}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div class="flex gap-[8px] items-center">
                        <p class="leading-[21px] text-[14px]">
                          {{ wallet.identifier }}
                        </p>
                        <CopyButton :content="wallet.identifier" />
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <FormattedCurrency
              class="text-[18x] leading-[18px] font-bold"
              :currency="wallet.totalUsdValue"
            />
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
              <td class="p-[12px] border border-tresBlue-300">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <p>{{ asset.asset.network }}</p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div class="flex items-center">
                        <p class="text-[14px] leading-[21px]">
                          Contract: {{ asset.asset.identifier }}
                        </p>
                        <CopyButton :content="asset.asset.identifier" />
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </td>
              <td class="p-[12px] border border-tresBlue-300">
                <div class="flex flex-col">
                  <p>{{ numberToCurrencyString(asset.assetAmount) }} {{ asset.asset.symbol }}</p>
                  <div class="text-tresNeutral-700 flex gap-[4px] items-center h-fit">
                    <IconUsd />
                    <p class="text-[14px] leading-[21px]">
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
                <div class="text-[#1F1F1F] flex gap-[8px] items-center h-fit">
                  <IconUsd />
                  <FormattedCurrency
                    class="font-bold text-[14px] leading-[21px]"
                    :currency="wallet.totalUsdValue"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </AccordionContent>
    </Accordion>
  </article>
</template>
