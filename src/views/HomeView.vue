<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import Accordion from '@/components/Accordion/Accordion.vue'
import AccordionTitle from '@/components/Accordion/AccordionTitle.vue'
import AccordionContent from '@/components/Accordion/AccordionContent.vue'
import wallets from '@/assets/data.json'
</script>

<template>
  <div class="flex flex-col">
    <header>
      <PageHeader>Accounts</PageHeader>
    </header>
    <main class="flex gap-[16px] flex-col py-[16px] px-[24px]">
      <section class="flex gap-[10px]">
        <p>Name/Identifier</p>
        <p>Asset</p>
        <p>Network</p>
      </section>
      <button class="w-fit">Expand all</button>
      <Suspense>
        <ul class="list-none">
          <li class="my-[8px]" v-for="wallet in wallets">
            <Accordion>
              <AccordionTitle>
                <header class="flex justify-between w-full p-[16px]">
                  <div class="flex gap-[16px] items-center">
                    <div>
                      <img
                        src="https://s3-alpha-sig.figma.com/img/b059/f2eb/3aaf93145fd62647cb908c5532e06795?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYsQP9jwJ73mUFklQMJoZRTGD6L4gzfsqJxgNWXiXtowHvSUcSdhfjrMWrzd3CpQfUXXA3igwRD00KzOEuRYwsm5wR6PhBFthOpmlXf3JNTZ8dQvgKEGg0~sOQ1KKaF5E2OZvLsjzxCgsBcczlNE8CGurS71MUcjGJzfQ-~WunpaawOWS2kcKy4XinkM-iR9QCn9NcKe~O2cG1WPxzShF10Cn2YaFs2lWCqpYtbhaQnFfVz5Ph9buEwbpTmwEPc4V5S62~aKpiTtYWT7wJxrVFN9hSOySuDKfNkf7jf9qKd81i06qV9-ZugW0OBfqvEZKL9oL7ZkdK7mpd3fvy4t9A__"
                        alt="Binance logo"
                        width="24"
                        height="24"
                      />
                    </div>
                    <div class="flex flex-col">
                      <h2 class="font-bold">
                        {{ wallet.name }}
                      </h2>
                      <p class="text-[14px] text-tresNeutral-700"># {{ wallet.identifier }}</p>
                    </div>
                  </div>
                  <div class="text-[18x] leading-[18px] font-bold">
                    {{ wallet.totalUsdValue }} USD
                  </div>
                </header>
              </AccordionTitle>
              <AccordionContent>
                {{ wallet.identifier }}
              </AccordionContent>
            </Accordion>
          </li>
        </ul>
      </Suspense>
    </main>
  </div>
</template>
