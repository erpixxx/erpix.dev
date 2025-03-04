<script setup lang="ts">
import GitHubStats from '../GitHubStats.vue'
</script>

<template>
  <h1>Whisperer</h1>
  <GitHubStats owner="erpixxx" repo="Whisperer" display="description" />
  <div class="project-bottom">
    <div class="project-bottom__spacer">
      <a class="a-emote" href="https://github.com/erpixxx/Whisperer" target="_blank" rel="noopener">
        <font-awesome-icon class="fa-emote" :icon="['fab', 'github']" />
        <span>GitHub</span>
      </a>
      <GitHubStats owner="erpixxx" repo="Whisperer" display="stats" />
    </div>
  </div>
</template>
