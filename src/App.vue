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
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
}

.wrapper header,
.wrapper main {
  padding: 5vh 5vw;
}

.wrapper > :first-child {
  border-right: 1px solid var(--vt-c-divider-dark-2);
}

@media (max-width: 1260px) {
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .wrapper header,
  .wrapper main {
    padding: 0;
  }
  .wrapper > :first-child {
    border-right: 0;
  }
}
</style>
