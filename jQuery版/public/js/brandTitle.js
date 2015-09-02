$(function(){
    var config = {
        proto: 'http://',
        host: '139.199.192.48',
        port: ':9090/',
        getUrl: function (api) {
            return this.proto + this.host + this.port + api;
        }
    }

    //发送请求后渲染热门品牌排行列表
    $.ajax({
        url:config.getUrl('api/getbrandtitle'),
        type:'get',
        success:function(res){
            var tpl = template('brandTitle_tpl',res);
            $('.hot_rank_content').html(tpl);

            //点击某品牌进行跳转并请求数据进行渲染
            $('.hot_rank_content ul li').on('click',function(){
                var brandtitleid = $(this).attr('data-id');
                location.href = './brandTitle_top10.html?brandtitleid='+brandtitleid;
            })
        }
    })
})