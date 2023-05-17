<template>
  <div id="app">
    <b-nav class="navbar-custom">
      <b-nav-item active>Hours tracking</b-nav-item>
      <b-button v-b-toggle.sidebar>Menu</b-button>
    </b-nav>
    <b-sidebar id="sidebar" title="Menu">
      <div class="px-3 py-2">
        <b-list-group>
          <b-list-group-item href="/#/">
            Hours log
          </b-list-group-item>
          <b-list-group-item href="/#/projects">
            Projects
          </b-list-group-item>
        </b-list-group>
        <b-list-group class="mt-2">
          <b-list-group-item href="/">
            Exports
          </b-list-group-item>
          <b-list-group-item href="/#/settings">
            Settings
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-custom {
  background: #3e3e3e;
}
</style>
