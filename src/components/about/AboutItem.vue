<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  icon: [string, string]
  delay: number
}

const props = defineProps<Props>()

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, props.delay)
})
</script>

<template>
  <div class="about-item" :class="{ visible: isVisible }">
    <div class="icon">
      <font-awesome-icon class="color-primary" :icon="icon" />
    </div>
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.about-item {
  margin-bottom: 0.66rem;
  display: flex;
  align-items: flex-start;
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.about-item svg {
  margin-right: 0.75rem;
}
.about-item .icon {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-item.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
