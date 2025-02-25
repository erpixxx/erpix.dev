<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AboutItem from '../components/about/AboutItem.vue'

const isTitleVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isTitleVisible.value = true
  }, 200)
})
const items: { icon: [string, string]; content: string }[] = [
  {
    icon: ['fas', 'heart'],
    content: 'My favorite programming language is <b class="color-primary">Java</b>',
  },
  {
    icon: ['fas', 'hammer'],
    content:
      'Projects I\'m currently working on: <b class="color-primary">Exvoid Network</b> and <b class="color-primary">Tiruka</b>',
  },
  {
    icon: ['fas', 'book'],
    content:
      'I want to learn / learning: <b class="color-primary">C/C++</b>, <b class="color-primary">C#</b>, and <b class="color-primary">Kotlin</b>',
  },
  {
    icon: ['fas', 'server'],
    content:
      'I\'m an enthusiast of self-hosting and am running <b class="color-primary">Debian 12</b> on my homelab',
  },
  {
    icon: ['fas', 'globe'],
    content:
      'I\'m a fan of <b class="color-primary">open-source</b> software and <b class="color-primary">Linux</b>',
  },
  {
    icon: ['fab', 'discord'],
    content: 'Feel free to reach me on Discord: <b class="color-primary">erpix</b>',
  },
]
</script>

<template>
  <h2 class="about-title" :class="{ visible: isTitleVisible }">A little about me...</h2>
  <AboutItem
    v-for="(item, index) in items"
    :key="index"
    :icon="item.icon"
    :delay="600 + index * 400"
  >
    <p v-html="item.content"></p>
  </AboutItem>
</template>

<style lang="css" scoped>
.about-title {
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateX(-40px);
}
.about-title.visible {
  opacity: 1;
  transition: all 0.5s ease;
  transform: translateX(0px);
}
</style>
