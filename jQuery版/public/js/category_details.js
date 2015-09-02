$(function () {
    var url = config.setApi('api/getproduct');
    var url1 = config.setApi('api/getproductcom');
    var id = Number(utils.queryString()['productid']);
    $.ajax({
        url: url + '?productid=' + id,
        type: 'get',
        dataType: 'JSON',
        success: function (info) {
            var htmlStr = template('product_details_body', info.result[0]);
            $('#top').html(htmlStr);
        }
    });
    $.ajax({
        url: url1 + '?productid=' + id,
        type: 'get',
        dataType: 'JSON',
        success: function (info) {
            var obj1 = {};
            for (var i = 0; i < info.result.length; i++) {
                obj1[i] = info.result[i];
            }
            var htmlStr = template('product_commend_body', obj1);
            $('#bottom').html(htmlStr);
        }
    });
});