import { createStore } from "vuex"

export default createStore({
    state:{
        session:'Iniciar sesión'
    },
    mutations:{
        ADD_PERSON: function(state){


            if(state.session === 'Iniciar sesión'){
                state.session = 'Cerrar sesión';

            }else{
                state.session = 'Cerrar sesión' 
            }
            

        },
        status_session:function(state){

            if(state.session === 'Cerrar sesión'){
                state.session = 'Iniciar sesión';

            }else{
                state.session = 'Iniciar sesión' 
            }

        },
        DELETE_PERSON: function(state){

            state.session = 'Iniciar sesión';

        },
    },
    actions:{},
    getters:{},
    modules:{},
})
