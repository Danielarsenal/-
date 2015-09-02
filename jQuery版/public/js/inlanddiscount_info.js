/**
 * Created by LIULIN on 2017/7/19.
 */
var search = location.search;
var search = search.slice(1);
// console.log(search);
var searchArr = search.split("&");
// console.log(searchArr);
var obj = {};
for (var i = 0; i < searchArr.length; i++) {
    var temp = searchArr[i].split("=");
    obj[temp[0]] = temp[1];
}
// console.log(obj);
var id = Number(obj.productId);
// console.log(id);

$.ajax({
    // url:'http://192.168.50.2:9090/api/getdiscountproduct?productid='+id,
    url:'http://139.199.192.48:9090/api/getdiscountproduct?productid='+id,
    dataType:'JSON',
    type:'get',
    data:{productId:id},
    success:function (info) {
        // console.log(info);
        var htmlStr = template('cs_list_tp',info);
        $('#cs_list').html(htmlStr);
        // console.log(htmlStr);
        //点击按钮发表评论
        $('#cs_list').on('click', '#btnSub', function () {
            var txt = $('#cm_content').val();
            $(".content").html(txt);
            $('#cm_content').val("");//评论完清空内容
        })
    }
})

// 点击按钮回退到上一个页面
$('.back').on('click',function () {
    location.href = 'inlanddiscount.html';
})

