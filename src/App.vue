
<template>

<div class="container">

      <div class="row">
          
                <div class="row">
                    <div class="col-lg-12">
                        <nav>
                            <Nav/>
                            <component :is="layout">  
                            <router-view />
                            </component>
                        </nav>

                    </div>

                    <div class="row">
                  <div class="col-lg-12">
                    <Footer/>
                    <h3>hola</h3>
                  </div>
                </div>


                </div>

               

      </div>
</div>


</template>


<script>
import HomeView from './views/HomeView.vue'
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue'


  export default {
      data() {
        return {
          layout: `div`,
              }
        }
      ,
      components:{ HomeView, Nav, Footer },
      computed: {
    layout () {
      return (this.$route.meta.layout || 'div')
    }
  },
    }
    
  
</script>



