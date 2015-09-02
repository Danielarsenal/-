
// 省钱控页面
$(function () {
    // 获取url
    var config = {
        proto: 'http://',        //协议
        host: '139.199.192.48',  //IP
        port: ':9090/',          //端口
        getUrl: function (api) {
            return this.proto + this.host + this.port + api;
        }
    }





    var n = 1;
    // 商品列表页面渲染
    function getPage(n) {
        $.ajax({
            url: config.getUrl('api/getmoneyctrl'),
            type: 'get',
            data: {
                pageid: n
            },
            success: function (info) {
                // console.log(info);
                var htmlStr = template('sm_list_tpl', info)
                $('#commodity').html(htmlStr);
                $('#commodity').on('click', 'a', function () {
                    location.href = 'moneyctrl_details.html?productId=' + $(this).attr("data-id");
                })
            }
        })
    }
    getPage();

    $('.next').on('click', function () {
        console.log(1);
        n++;
        getPage(n);
        $("#selectVal").val(n);
        return false;
    });

    $('.previous').on('click', function () {
        console.log(1);
        if (n == 1) {
            alert('当前已是第一页');
            return false;
        } else {
            n--;
            $("#selectVal").val(n);
            getPage(n);
            return false;
        }
    })

    //选中select跳转页面
    $("#selectVal").change(function () {
        var opt = $("#selectVal").val();
        console.log(opt);
        n = opt;
        getPage(opt);
        $("#selectVal").val(opt);
    })





})  