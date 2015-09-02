/**
 * Created by xuexin.yang on 2017/7/18.
 */

$(function () {
    var shop = $('.filter').find('a').eq(0);
    var area = $('.filter').find('a').eq(1);
    //页面加载，渲染商品列表
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getgsproduct',
        type: 'get',
        data: {
            shopid: 1,
            areaid: 1
        },
        success: function (data) {
            shop.attr('data-id', 1);
            area.attr('data-id', 1);
            var htmlStr = template('cd_product_tpl', data);
            $('.product').html(htmlStr);
        }
    })
    //店铺下拉功能实现
    shop.on('click', function () {
        // console.log($('.dd-shop ul').children().length)
        var _this = $(this);
        if (!$('.dd-shop ul').children().length) {
            $.ajax({
                url: 'http://139.199.192.48:9090/api/getgsshop',
                type: 'get',
                success: function (data) {
                    data.areaId = obj.queryString().area || 1;
                    var htmlStr = template('cd_shop_tpl', data);
                    $('.dd-shop ul').html(htmlStr);
                    var lis = $('.dd-shop').find('a');
                    lis.each(function (i, v) {
                        //点击选择店铺按钮，把下拉对应的商店打勾
                        if ($(v).text().indexOf(_this.text().trim().slice(0, 2)) != -1) {
                            // console.log($(lis[i]));
                            $(lis[i]).parent().addClass('active');
                        }
                    })
                }
            })
        }
        if ($('.dd-shop').css('display') == "none") {
            $('.drop-down').css('display', 'none').removeClass('on');
            $('.dd-shop').addClass('on');
            $(this).children().html('&#xe600;');
            $('.dd-shop').css('display', 'block');
        }
        else {
            $('.dropdown.on').removeClass('on');
            $(this).children().html('&#xe615;');
            $('.dd-shop').css('display', 'none');
        }
    })

    //地区下拉功能实现
    area.on('click', function () {
        var _this = $(this);
        $.ajax({
            url: 'http://139.199.192.48:9090/api/getgsshoparea',
            type: 'get',
            success: function (data) {
                var htmlStr = template('cd_area_tpl', data);
                $('.dd-area ul').html(htmlStr);
                var lis = $('.dd-area').find('a');
                lis.each(function (i, v) {
                    //点击选择店铺按钮，把下拉对应的商店打勾
                    if ($(v).text().indexOf(_this.text().trim().slice(0, 2)) != -1) {
                        // console.log($(lis[i]));
                        $(lis[i]).parent().addClass('active');
                    }
                })
            }
        })
        // debugger;
        if ($('.dd-area').css('display') == "none") {
            $('.drop-down').css('display', 'none').removeClass('on');
            $('.dd-area').addClass('on');
            $(this).children().html('&#xe600;');
            $('.dd-area').css('display', 'block');
        }
        else {
            $('.dropdown.on').removeClass('on');
            $(this).children().html('&#xe615;');
            $('.dd-area').css('display', 'none');
        }
    })
    //价格下拉功能实现
    $('.filter').find('a').eq(2).on('click', function () {
        if ($('.dd-price').css('display') == "none") {
            $('.drop-down').css('display', 'none').removeClass('on');
            $('.dd-price').addClass('on');
            $(this).children().html('&#xe600;');
            $('.dd-price').css('display', 'block');
        }
        else {
            $(this).children().html('&#xe615;');
            $('.dd-price').css('display', 'none');
        }
    })

    //搜索下拉功能实现
    $('.filter+div.search').on('click', function () {
        if ($('.dd-search').css('display') == "none") {
            $('.drop-down').css('display', 'none').removeClass('on');
            $('.dd-search').addClass('on');
            $('.dd-search').css('display', 'block');
        }
        else {
            $('.dd-search').css('display', 'none');
        }
    })

    //选择某个店铺，商品列表对应刷新
    $('.dd-shop').on('click', 'a', function () {
        // alert('点击成功')
        var shopId = $(this).attr('data-id');
        var areaId = area.attr('data-id');
        shop.attr('data-id', shopId);
        var _this = $(this);
        $.ajax({
            url: 'http://139.199.192.48:9090/api/getgsproduct',
            type: 'get',
            data: {
                shopid: shopId,
                areaid: areaId
            },
            success: function (data) {
                $('.dd-shop').css('display', 'none');
                var htmlStr = template('cd_product_tpl', data);
                $('.product').html(htmlStr);
                shop.html(_this.text() + '<i class="iconfont">&#xe615;</i>');
                $('.dd-shop').find($('li.active')).removeClass('active');
                _this.parent().addClass('active');
            }
        })
        return false;
    })

    //选择某个区域，商品列表对应刷新
    $('.dd-area').on('click', 'a', function () {
        var shopId = shop.attr('data-id');
        var areaId = $(this).attr('data-id');
        area.attr('data-id', areaId);
        var _this = $(this);
        $.ajax({
            url: 'http://139.199.192.48:9090/api/getgsproduct',
            type: 'get',
            data: {
                shopid: shopId,
                areaid: areaId
            },
            success: function (data) {
                $('.dd-area').css('display', 'none');
                var htmlStr = template('cd_product_tpl', data);
                $('.product').html(htmlStr);
                area.html(_this.text().slice(0, 2) + '<i class="iconfont">&#xe615;</i>');
                $('.dd-area').find($('li.active')).removeClass('active');
                _this.parent().addClass('active');
            }
        })
        return false;
    })
})