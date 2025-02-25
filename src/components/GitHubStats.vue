<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Dodaj prop 'display', który może przyjmować wartości 'stats' lub 'description'
const props = defineProps<{
  owner: string
  repo: string
  display: 'stats' | 'description'
}>()

const stars = ref(0)
const forks = ref(0)
const projectDescription = ref('')

const animateNumber = (target: number, refValue: { value: number }) => {
  const start = refValue.value
  const duration = 1000
  const startTime = performance.now()

  const update = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    refValue.value = Math.floor(start + progress * (target - start))
    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }
  requestAnimationFrame(update)
}

const fetchRepoStats = async () => {
  try {
    console.log(`Fetching stats for ${props.owner}/${props.repo}`)
    const response = await fetch(`https://api.github.com/repos/${props.owner}/${props.repo}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    // Animacja liczb dla gwiazdek i forków
    animateNumber(data.stargazers_count, stars)
    animateNumber(data.forks_count, forks)

    // Pobranie opisu projektu
    projectDescription.value = data.description || 'Brak opisu.'
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(fetchRepoStats)
</script>

<template>
  <div class="github-stats">
    <template v-if="props.display === 'stats'">
      <font-awesome-icon icon="star" /> {{ stars }} Stars | <font-awesome-icon icon="code-fork" />
      {{ forks }} Forks
    </template>
    <template v-else-if="props.display === 'description'">
      <i>{{ projectDescription }}</i>
    </template>
  </div>
</template>
