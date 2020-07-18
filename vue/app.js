new Vue({
    el:'#vue-app',
    data:{
        name:'Gizem',
        job:'Student'
    },
    methods:{
      greet:function(time){
        return 'Good ' + time ;

      }
    }

});
