<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import type { Component } from 'vue'

const projects = [
  { name: 'Exvoid Network', component: 'ExvoidNetworkProject' },
  { name: 'Tiruka', component: 'TirukaProject' },
  { name: 'Whisperer', component: 'WhispererProject' },
]

const activeProject = ref(projects[0])
const currentComponent = shallowRef<Component | null>(null)
const isLoading = ref(false)

const loadComponent = async (name: string) => {
  isLoading.value = true
  try {
    const component = await import(`../components/projects/${name}.vue`)
    currentComponent.value = component.default
  } catch (error) {
    console.error('Błąd ładowania komponentu:', error)
    currentComponent.value = null
  } finally {
    isLoading.value = false
  }
}

loadComponent(activeProject.value.component)

const setActiveProject = async (project: (typeof projects)[number]) => {
  activeProject.value = project
  await loadComponent(project.component)
}
</script>

<template>
  <div class="projects">
    <nav>
      <a
        v-for="project in projects"
        :key="project.name"
        href="#"
        :class="{ active: project.name === activeProject.name }"
        @click.prevent="setActiveProject(project)"
      >
        {{ project.name }}
      </a>
    </nav>

    <transition name="fade" mode="out-in">
      <div class="project-container" v-if="!isLoading" key="content">
        <component :is="currentComponent" v-if="currentComponent" />
      </div>
    </transition>
  </div>
</template>

<style lang="css" scoped>
.projects {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.projects :deep(p) {
  text-align: justify;
}

.project-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.project-container :deep(.project-bottom) {
  margin-top: auto;
}

nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

nav a {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  color: var(--color-text);
  padding: 0.2rem 1rem;
  transition: background-color 0.2s ease;
}

nav a.active {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--color-text);
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
