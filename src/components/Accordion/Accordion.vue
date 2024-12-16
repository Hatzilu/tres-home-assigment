<template>
  <article>
    <details>
      <slot />
    </details>
  </article>
</template>

<style lang="css" scoped>
details {
  background-color: #fff;
  border: 1px solid #deeaff;
  border-radius: 4px;
}

details[open] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
</style>
