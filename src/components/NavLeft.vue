<template>

<ul>
  <li  @click="show=!show">Cuentas</li>
  <transition  name="fade">
    <NavApp v-show="show"/>
  </transition>

  <li @click="show_2=!show_2">Pyp</li>
  <transition  name="fade">
    <NavApp2 v-show="show_2"/>
  </transition>

  <li @click="show_3=!show_3">Soporte</li>
  <transition  name="fade">
    <NavApp3 v-show="show_3"/>
  </transition>
 
</ul>

</template>


<script>
import NavApp from '../components/NavApp.vue'
import NavApp2 from'../components/NavApp2.vue'
import NavApp3 from'../components/NavApp3.vue'
export default{
    components: { NavApp,NavApp2,NavApp3 },
    data() {
        return {
           show:false, 
           show_2:false,
           show_3:false
        };
       
    },
  }
</script>