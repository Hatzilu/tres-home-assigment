<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import Accordion from '@/components/Accordion/Accordion.vue'
import AccordionTitle from '@/components/Accordion/AccordionTitle.vue'
import AccordionContent from '@/components/Accordion/AccordionContent.vue'
import wallets from '@/assets/data.json'
</script>

<template>
  <div class="wrapper">
    <header>
      <PageHeader>Accounts</PageHeader>
    </header>
    <main>
      <section>
        <p>Name/Identifier</p>
        <p>Asset</p>
        <p>Network</p>
      </section>
      <button class="expand-btn">Expand all</button>
      <Suspense>
        <ul>
          <li v-for="wallet in wallets">
            <Accordion>
              <AccordionTitle>
                <header class="wallet-title">
                  <div class="wallet-title-info">
                    <div>
                      <img
                        src="https://s3-alpha-sig.figma.com/img/b059/f2eb/3aaf93145fd62647cb908c5532e06795?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYsQP9jwJ73mUFklQMJoZRTGD6L4gzfsqJxgNWXiXtowHvSUcSdhfjrMWrzd3CpQfUXXA3igwRD00KzOEuRYwsm5wR6PhBFthOpmlXf3JNTZ8dQvgKEGg0~sOQ1KKaF5E2OZvLsjzxCgsBcczlNE8CGurS71MUcjGJzfQ-~WunpaawOWS2kcKy4XinkM-iR9QCn9NcKe~O2cG1WPxzShF10Cn2YaFs2lWCqpYtbhaQnFfVz5Ph9buEwbpTmwEPc4V5S62~aKpiTtYWT7wJxrVFN9hSOySuDKfNkf7jf9qKd81i06qV9-ZugW0OBfqvEZKL9oL7ZkdK7mpd3fvy4t9A__"
                        alt="Binance logo"
                        width="24"
                        height="24"
                      />
                    </div>
                    <div class="wallet-title-name">
                      <h2>
                        {{ wallet.name }}
                      </h2>
                      <p class="wallet-title-id"># {{ wallet.identifier }}</p>
                    </div>
                  </div>
                  <div class="usd">{{ wallet.totalUsdValue }} USD</div>
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

<style lang="css" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

li {
  margin: 8px 0px;
}
.usd {
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
}
.wallet-title {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
}

.wallet-title-info {
  display: flex;
  gap: 16px;
  align-items: center;
}

.wallet-title-id {
  font-size: 14px;
  color: #8e8f98;
}
.wallet-title-name {
  display: flex;
  flex-direction: column;
}

.wallet-title-name > h2 {
  font-weight: 700;
}
ul {
  list-style-type: none;
}
main {
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
main > section {
  display: flex;
  gap: 10px;
}

.expand-btn {
  width: fit-content;
}
</style>
