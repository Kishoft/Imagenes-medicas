<template>
  <router-view/>
</template>

<style>
body{
  margin: 0;
  padding: 0;
  background-image: linear-gradient(90deg, rgb(160, 222, 219),rgb(3, 165, 209));
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

}
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
.glass{
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
}
</style>
