/**
 * Created by LIULIN on 2017/7/18.
 */


$.ajax({
    url:'http://139.199.192.48:9090/api/getinlanddiscount',
    // url:'http://192.168.50.2:9090/api/getinlanddiscount',
    type:'get',
    dataType:'JSON',
    success:function (info) {
        // console.log(info);
        var htmlStr = template('cn_commodity_tp',info);
        $('#cs_list_tp').html(htmlStr);
        // console.log(htmlStr);
    }
})

// 点击按钮回退到上一个页面
$('.back').on('click',function () {
    location.href = 'index.html';
})

