<template>
  
<div class="col-lg-2 h-80 d-inline-block  d-flex align-items-center justify-content-center">
<router-link to="/home" @click="hidden_home()">

<img  class="img-fluid p-2 btn"
    src="https://drive.google.com/uc?export=download&id=1fxiw5davvlb3IKAvaBJDuad5pkr7U7Vn" 
    alt="Responsive image" 
    width="70px" 
    height="70px"
>

</router-link>
</div>
  

<div class="col-lg-8 h-80 d-flex d-flex align-items-center justify-content-center h3">
APLICACIONES DEL SERVICIO MEDICO
</div>


<div class="col-lg-2 h-80  d-flex flex-row-reverse">

<router-link to="/login" @click="logout()">

  <img  class="img-fluid p-2 btn"
        src="https://drive.google.com/uc?export=download&id=14M2PmG8eS1zv-uQbSOXj5YQa62j2ACHH"
        alt="Responsive image"
        width="70px"
        height="70px"
  >
  <span>{{$store.state.session}}</span>

</router-link>            
</div>

<router-view/>

</template>




 
   

<script>
export default {
      data() {
        return {

          home:true
  
              }
        }
      ,
      components:{ },
      methods: {
        hidden_home(){
          this.home= false

        },
        logout(){
                this.home= false
                this.$store.commit("status_session")
           
            },
      }
    }
    
</script>
   