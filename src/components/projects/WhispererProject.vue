<script setup lang="ts">
import GitHubStats from '../GitHubStats.vue'
</script>

<template>
  <h1>Whisperer</h1>
  <GitHubStats owner="erpixxx" repo="Whisperer" display="description" />
  <div class="project-bottom">
    <GitHubStats owner="erpixxx" repo="Whisperer" display="stats" />
  </div>
</template>
