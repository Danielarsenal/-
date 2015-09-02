$(function () {
    var config = {
        proto: 'http://',
        host: '139.199.192.48',
        port: ':9090/',
        getUrl: function (api) {
            return this.proto + this.host + this.port + api;
        }
    }

    //发送菜单导航栏请求并渲染页面
    $.ajax({
        url: config.getUrl('api/getindexmenu'),
        type: 'get',
        success: function (res) {
            var tpl = template('nav_tpl', res);
            $('.navs .menu_navs').html(tpl);
            //点击更多时改变高度变成460px的现象
            $('.collapse').on('show.bs.collapse', function () {
                $('.collapse').css({'transition':'none','max-height':0});
            })
        }
    })

    //发送请求渲染超值折扣推荐模块
    $.ajax({
        url: config.getUrl('api/getmoneyctrl'),
        type: 'get',
        success: function (res) {
            var tpl = template('discount_tpl', res);
            $('.discount_introduce_content').html(tpl);
        }
    })
})