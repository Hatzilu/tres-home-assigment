<script setup>
const walletsRes = await fetch('../../assets/data.json', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
})
let wallets = []
if (walletsRes.ok) {
  wallets = await walletsRes.json()
}
console.log({ walletsRes, wallets })
</script>

<template>
  <h1>hi</h1>
</template>
