<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import Wallets from '@/components/Wallets/Wallets.vue'
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
        <Wallets />
      </Suspense>
    </main>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
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
