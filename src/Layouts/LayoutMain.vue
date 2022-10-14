<template>
    <div>
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