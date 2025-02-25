<template>
  <div class="header-container">
    <h1 class="header-title">erpix.dev</h1>
    <p>> Haii! I'm erpix, a 21-year-old developer from <span class="emoji">🇵🇱</span> Poland</p>
  </div>
</template>

<style lang="css" scoped>
.header-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  user-select: none;
}

.header-title {
  animation: var(--main-gradient-anim);
  background: var(--main-gradient);
  background-clip: text;
  background-size: 200%;
  display: inline-block;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 5em;
  font-weight: 900;
}

.header-container > p {
  margin: 0.33em 0;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
