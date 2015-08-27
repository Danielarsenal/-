require.config({
    baseUrl:'/view',
    paths: {
        'jquery':'public/assets/jquery/jquery.min',
        'bootstrap':'public/assets/bootstrap/js/bootstrap.min',
        'template':'public/assets/artTemplate/template'
    },
    shim: {
        'bootstrap':{
            deps:['jquery'],
        }
    }
});