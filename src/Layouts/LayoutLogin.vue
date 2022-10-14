<template>
    <div>
      <H1>LAYOUT LOGIN</H1>
      <slot />
    </div>
  </template>
  
  <script>
  import Nav from '../components/Nav.vue'
  export default {
    name: "LayoutLogin",
    components:{Nav},
  };
  </script>