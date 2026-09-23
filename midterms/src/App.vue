<template>
  <div class="app-shell">
    <header class="topbar">
      <RouterLink class="brand" to="/">WAD II Cheat Sheet</RouterLink>
      <RouterLink class="home-link" to="/">All Topics</RouterLink>
    </header>

    <main class="page-shell">
      <RouterView />
    </main>
  </div>
</template>
