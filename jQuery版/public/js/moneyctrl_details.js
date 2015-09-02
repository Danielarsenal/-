
$(function(){
    // 获取url
    var config = {
        proto:'http://'  ,        //协议
        host:'139.199.192.48',  //IP
        port:':9090/',          //端口
        getUrl:function(api){
            return this.proto+this.host+this.port+api;
        }
    }



        //获取商品id
    var util = {
        queryString:function(){
            var search = location.search;
            search = search.slice(1);
            var searchArr = search.split('&');
            var obj = {};
            for(var i=0;i<searchArr.length;i++){
                var temp = searchArr[i].split('=');
                obj[temp[0]] = temp[1];
            }
            return obj;
        }
    }



// 商品详情渲染
 var c = util.queryString().productId;
    $.ajax({
        url:config.getUrl('api/getmoneyctrlproduct'),
        type:'get',
        data:{
            productid:c
        },
        success:function(info){
            console.log(info);
            var htmlStr = template('sm_details_tpl',info);
            $('.container').html(htmlStr);
            var htmlStr = template('mc_cm_tpl',info);
            $('.cm-new').html(htmlStr);
            var htmlStr = template('mc_city_tpl',info);
            $('.city').html(htmlStr);
        }
    })

})

