<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main-container">
    <nav>
      <RouterLink to="/">
        <span>About</span>
      </RouterLink>
      <RouterLink to="/projects">
        <span>Projects</span>
      </RouterLink>
    </nav>
    <div class="main-container-bg">
      <div class="main-container-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
main {
  display: flex;
  place-items: center;
}

.main-container {
  animation: var(--main-gradient-anim);
  background: var(--main-gradient);
  background-size: 400%;
  height: 100%;
  width: 600px;
  word-wrap: break-word;
}
.main-container-bg {
  background-color: var(--color-background);
}
.main-container-content {
  background-color: var(--color-background-soft);
  padding: 1rem;
  height: 400px;
  overflow: hidden;
}

nav {
  width: 100%;
  text-align: center;
}
nav a {
  width: 50%;
  display: inline-block;
  padding: 0.8rem;
}
nav a > span {
  font-weight: 700;
}
nav :not(a.router-link-exact-active) {
  background-color: var(--color-background);
  background-clip: padding-box;
  border-bottom: 2px solid transparent;
}
nav :not(a.router-link-exact-active) > span {
  animation: var(--main-gradient-anim);
  background: var(--main-gradient);
  background-clip: text;
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
nav a.router-link-exact-active > span {
  background-color: transparent;
  background-clip: text;
}

nav a.router-link-exact-active {
  color: var(--color-background);
}

nav :not(a.router-link-exact-active):hover {
  background-color: var(--color-background-mute);
}

@media (max-width: 1260px) {
  .main-container {
    width: 100%;
    margin-bottom: 2rem;
  }
  .main-container-content {
    height: 100%;
  }
  nav a {
    border: 2px solid transparent;
    width: 100%;
  }
  nav :not(a.router-link-exact-active):hover {
    background-color: var(--color-background);
  }
}
</style>
