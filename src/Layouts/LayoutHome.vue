<template>

  
 
        <div class="row">
          <div class="col-lg-2">
            
            <NavLeft/>
            <component :is="layout">  
              <router-view />
            </component>
          </div>
        
          <div class="col-lg-10">
            <slot/>
        </div>
      </div>
  
  </template>
  
  <script>
  import NavLeft from '../components/NavLeft.vue'
  export default {
    name: "LayoutHome",
    components:{NavLeft},
  };
  </script>