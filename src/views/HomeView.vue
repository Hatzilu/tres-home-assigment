<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import Accordion from '@/components/Accordion/Accordion.vue'
import AccordionTitle from '@/components/Accordion/AccordionTitle.vue'
import AccordionContent from '@/components/Accordion/AccordionContent.vue'
import IconChevron from '@/components/icons/IconChevron.vue'
import wallets from '@/assets/data.json'
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
        <button class="flex items-center gap-[11.5px] w-fit">
          <IconChevron />
          <p class="text-tresNeutral-800 text-[14px]">Expand all</p>
        </button>
        <p class="text-tresNeutral-800 text-[12px] font-normal leading-[16.8px]">
          {{ wallets.length }} wallets
        </p>
      </section>
      <Suspense>
        <ul class="list-none">
          <li class="my-[8px] max-w-full bg-white" v-for="wallet in wallets">
            <Accordion class="max-w-full">
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
                      {{ wallet.totalUsdValue }} USD
                    </div>
                  </header>
                  <div role="presentation" class="min-h-[1px] bg-tresBlue-300" />
                  <div class="p-[16px] flex gap-[8px]">
                    <p>Added: {{ new Date(wallet.createdAt).toLocaleDateString() }}</p>
                    <div role="presentation" class="min-w-[1px] bg-tresBlue-300"></div>
                    <p
                      class="bg-tresNeutral-400 px-[8px] py-[4px] rounded-[4px] text-[12px] leading=[16.8x]"
                    >
                      {{ wallet.assets.length }}
                      {{ wallet.assets.length === 1 ? 'asset' : 'assets' }}
                    </p>
                  </div>
                </div>
              </AccordionTitle>
              <AccordionContent>
                {{ wallet.identifier }}
              </AccordionContent>
            </Accordion>
          </li>
        </ul>
      </Suspense>
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
