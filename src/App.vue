<script setup lang="ts">
import HeaderItem from './components/HeaderItem.vue'
import MainItem from './components/MainItem.vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <HeaderItem />
    </header>
    <main>
      <MainItem />
    </main>
  </div>
  <footer></footer>
</template>

<style lang="css" scoped>
@media (min-width: 1024px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    margin: 0 auto;
  }

  .wrapper > * {
    padding: 5rem calc(var(--section-gap) / 2);
  }

  .wrapper > :first-child {
    border-right: 1px solid var(--vt-c-divider-dark-2);
  }
}
</style>
