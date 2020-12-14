import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'; 

import '@mdi/font/css/materialdesignicons.css' 


Vue.use(Vuetify);

const iconsMdi ={
    iconfont:'mdi'
}

const theme={

    theme:{
        primary: '#fff',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      }
}

const vuetify = new Vuetify({
    iconsMdi,
    theme
});

export default vuetify;


