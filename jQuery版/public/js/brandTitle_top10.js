$(function(){
    var config = {
        proto: 'http://',
        host: '139.199.192.48',
        port: ':9090/',
        getUrl: function (api) {
            return this.proto + this.host + this.port + api;
        }
    }

    //获取brandtitleid
    var brandtitleid = location.search;
    brandtitleid = brandtitleid.split('=');
    brandtitleid = brandtitleid[1];

    // 发送请求渲染十大品牌排行模块
    $.ajax({
        url:config.getUrl('api/getbrand'),
        type:'get',
        data:{
            brandtitleid:brandtitleid
        },
        success:function(res){
            var tpl = template('brand_rank_tpl',res)
            $('.brand_rank_content .panel-body').html(tpl);
        }
    })

    var productid = null;
    // 发送请求渲染品牌销量排行模块
    $.ajax({
        url:config.getUrl('api/getbrandproductlist'),
        type:'get',
        data:{
            brandtitleid:brandtitleid
        },
        success:function(res){
            var tpl = template('pruduct_sales_tpl',res);
            $('.product_sales_content ul').html(tpl);
            productid = $('.product_sales_content ul li ').eq(1).attr('data-id');
            //评论区渲染
            $.ajax({
                url:config.getUrl('api/getproductcom'),
                type:'get',
                data:{
                    productid :productid,
                },
                success:function(res){
                    var tpl = template('comment_tpl',res);
                    $('.product_comment_content ul').html(tpl);
                }
            })
        }
    })

    
})