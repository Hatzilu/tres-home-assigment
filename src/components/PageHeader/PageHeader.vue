<script setup></script>

<template>
  <h1 class="header"><slot /></h1>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  padding: 12px 24px 12px 24px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}

.header::after {
  display: block;
  border: 1px solid #212121;
}
</style>
