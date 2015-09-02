$(function () {
    var url = config.setApi('api/getcategorytitle');
    var url1 = config.setApi('api/getcategory');
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'JSON',
        success: function (info) {
            var obj = {};
            for (var i = 0; i < info.result.length; i++) {
                obj[info.result[i].titleId] = info.result[i].title;
            }
            var htmlStr = template('ps_classify', obj);
            $('#brief').html(htmlStr);
            // $('#brief').on('click', 'button', function () {
            var _this = $(this);
            var id = Number(_this.attr('name'));
            for (var i = 0; i < 8; i++) {
                myAjax(i);
            }
            function myAjax(i) {
                $.ajax({
                    url: url1 + '?titleid=' + i,
                    type: 'get',
                    // data: id,
                    dataType: 'JSON',
                    success: function (info) {
                        var obj1 = {};
                        for (var j = 0; j < info.result.length; j++) {
                            obj1[info.result[j].categoryId] = info.result[j].category;
                        }
                        var htmlStr = template('dropdown_list_name', obj1);
                        console.log(htmlStr);
                        console.log($('#dropdown_list' + i))
                        $('#dropdown_list' + i).html(htmlStr);
                    }
                });
            }
            // });
        }
    });
});