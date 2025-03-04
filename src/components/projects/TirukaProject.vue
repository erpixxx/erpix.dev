<script setup lang="ts">
import GitHubStats from '../GitHubStats.vue'
</script>

<template>
  <h1>Tiruka</h1>
  <GitHubStats owner="erpixxx" repo="Tiruka" display="description" />
  <div class="project-bottom">
    <div class="project-bottom__spacer">
      <a class="a-emote" href="https://github.com/erpixxx/Tiruka" target="_blank" rel="noopener">
        <font-awesome-icon class="fa-emote" :icon="['fab', 'github']" />
        <span>GitHub</span>
      </a>
      <GitHubStats owner="erpixxx" repo="Tiruka" display="stats" />
    </div>
  </div>
</template>
