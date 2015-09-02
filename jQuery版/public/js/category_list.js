$(function () {
    var url = config.setApi('api/getcategorybyid');
    var url1 = config.setApi('api/getproductlist');
    var id = Number(utils.queryString()['categoryid']);
    var page = Number(utils.queryString()['pageid']);
    var totalCountPage = 0;
    $.ajax({
        url: url + '?categoryid=' + id,
        type: 'get',
        dataType: 'JSON',
        success: function (info) {
            var htmlStr = template('priceSearch_list_title', info.result[0]);
            $('#priceSearch_list_title_body').html(htmlStr);
        }
    });
    // if (!page) { var page = 1 };
    $.ajax({
        url: url1 + '?categoryid=' + id + '&pageid=' + page,
        type: 'get',
        dataType: 'JSON',
        success: function (info) {
            var details = {};
            for (var i = 0; i < info.result.length; i++) {
                details[i] = info.result[i];
            }
            info.result = details;
            var htmlStr = template('priceSearch_list_detail', info.result);
            $('#product-list-details').html(htmlStr);
            info.totalCount = Number(info.totalCount);
            var arr = [];
            var pagenum = Math.ceil(info.totalCount / info.pagesize);
            for (var i = 0; i < pagenum; i++) {
                arr[i] = i + 1;
            }
            info.arr = arr;
            info.pagenum = pagenum;
            totalCountPage = pagenum;
            var htmlStr1 = template('priceSearch_list_detail_changePage', info);
            $('#page').html(htmlStr1);
            $('#page').val(page);
        }
    });
    $('.next_page').on('click', function () {
        if (page < totalCountPage) {
            page += 1;
            $.ajax({
                url: url1 + '?categoryid=' + id + '&pageid=' + page,
                type: 'get',
                dataType: 'JSON',
                success: function (info) {
                    var details = {};
                    for (var i = 0; i < info.result.length; i++) {
                        details[i] = info.result[i];
                    }
                    info.result = details;
                    var htmlStr = template('priceSearch_list_detail', info.result);
                    $('#product-list-details').html(htmlStr);
                    info.totalCount = Number(info.totalCount);
                    var arr = [];
                    var pagenum = Math.ceil(info.totalCount / info.pagesize);
                    for (var i = 0; i < pagenum; i++) {
                        arr[i] = i + 1;
                    }
                    info.arr = arr;
                    info.pagenum = pagenum;
                    var htmlStr1 = template('priceSearch_list_detail_changePage', info);
                    $('#page').html(htmlStr1);
                    location.href = './category_list.html?categoryid=' + id + '&pageid=' + page;
                }
            });
        } else {
            alert('已经是最后一页了');
        }
    });
    $('.front_page').on('click', function () {
        if (page > 1) {
            page -= 1;
            $.ajax({
                url: url1 + '?categoryid=' + id + '&pageid=' + page,
                type: 'get',
                dataType: 'JSON',
                success: function (info) {
                    var details = {};
                    for (var i = 0; i < info.result.length; i++) {
                        details[i] = info.result[i];
                    }
                    info.result = details;
                    var htmlStr = template('priceSearch_list_detail', info.result);
                    $('#product-list-details').html(htmlStr);
                    info.totalCount = Number(info.totalCount);
                    var arr = [];
                    var pagenum = Math.ceil(info.totalCount / info.pagesize);
                    for (var i = 0; i < pagenum; i++) {
                        arr[i] = i + 1;
                    }
                    info.arr = arr;
                    info.pagenum = pagenum;
                    var htmlStr1 = template('priceSearch_list_detail_changePage', info);
                    $('#page').html(htmlStr1);
                    location.href = './category_list.html?categoryid=' + id + '&pageid=' + page;
                }
            });
        } else {
            alert('已经是最前一页了');
        }
    });
    $('#page').change(function () {
        page = $("#page").val();
        $.ajax({
            url: url1 + '?categoryid=' + id + '&pageid=' + page,
            type: 'get',
            dataType: 'JSON',
            success: function (info) {
                var details = {};
                for (var i = 0; i < info.result.length; i++) {
                    details[i] = info.result[i];
                }
                info.result = details;
                var htmlStr = template('priceSearch_list_detail', info.result);
                $('#product-list-details').html(htmlStr);
                info.totalCount = Number(info.totalCount);
                var arr = [];
                var pagenum = Math.ceil(info.totalCount / info.pagesize);
                for (var i = 0; i < pagenum; i++) {
                    arr[i] = i + 1;
                }
                info.arr = arr;
                info.pagenum = pagenum;
                var htmlStr1 = template('priceSearch_list_detail_changePage', info);
                $('#page').html(htmlStr1);
                location.href = './category_list.html?categoryid=' + id + '&pageid=' + page;
            }
        });
    });

});