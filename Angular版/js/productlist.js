/*
 * @Author: zhengwei
 * @Date:   2016-11-23 23:23:00
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-12-17 11:45:51
 */

'use strict';
// $(function() {
//     //需要拿到传进来的分类 因为在分类标题导航(面包屑导航) 里面需要分类名称
//     //由于地址栏这里获取中文的乱码不能直接把中文 的分类名称传过来 
//     // 所以只能把 分类名称对应的分类id传过来 根据这个分类id去拿到分类名称
//     //根据地址栏的categoryid参数 拿到 categoryid 的值
//     // 为什么要这个值是为了获取这个categoryid 对应的 分类名称
//     var categoryId = getQueryString("categoryid") || 0;
//     //获取地址栏的pageid参数 也就是当前的页码数
//     var pageid = getQueryString("pageid") || 1;
//     getCategory(categoryId);
//     //调用获取商品列表的时候 同时把pageid传入 获取到第几页的数据
//     setProdcutList(categoryId, pageid);
//     //获取商品分类名称函数
//     function getCategory(categoryId) {
//         $.ajax({
//             url: "http://mmb.ittun.com/api/getcategorybyid?categoryid=" + categoryId,
//             success: function(data) {
//                 console.log(data.result[0].category);
//                 // var html = template("categoryTitleTmp",data);
//                 // console.log(html);
//                 // $('.breadcrumb').html(html);
//                 // $('#productList > .category-title > ol > li:last-child') 获取到分类名称所在的li标签
//                 // data.result[0].category 是获取返回的数据的result属性里面的第一个对象里面的category属性
//                 $('.breadcrumb > li:last-child').html(data.result[0].category);
//             }
//         });
//     }
//     //获取商品列表的函数
//     function setProdcutList(categoryId, pageid) {
//         // pageid = ;
//         $.ajax({
//             url: "http://mmb.ittun.com/api/getproductlist",
//             data: {
//                 "categoryid": categoryId,
//                 "pageid": pageid || 1
//             },
//             success: function(data) {
//                 console.log(data);
//                 // console.log(data.totalCount +"-----"+ data.pagesize);
//                 //页码数 用总条数 /  每页大小
//                 var page = data.totalCount / data.pagesize;
//                 // console.log(page);
//                 var pageli = "";
//                 for (var i = 0; i < page; i++) {
//                     //循环生成 第几页的li标签
//                     // var url = "productlist.html?categoryid=" + categoryId + "pageid=" + pageid;
//                     // var url = "productlist.html?categoryid=" + categoryId + "&pageid=" + (i+1);
//                     var url = "productlist.html?categoryid=" + categoryId + "&pageid=" + (i + 1);
//                     pageli += "<li><a href=" + url + ">第" + (i + 1) + "/" + (page) + "页</a></li>";
//                 }
//                 $('#dLabel').html("第" + pageid + "页" + '<span class="caret"></span>');
//                 //如果当前页数已经到了第一页 给当前页面数变成2  2 -1 就只能 == 1
//                 if (pageid <= 1) {
//                     pageid = 2;
//                 } else if (pageid >= page) {
//                     //如果当前页数已经到了第最后一页 给当前页数变成最后一页 - 1  3+1 == 4
//                     pageid = page - 1;
//                 }
//                 var prevUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (pageid - 1);
//                 var nextUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (parseInt(pageid) + 1);
//                 $('.page-prev').attr("href", prevUrl);
//                 $('.page-next').attr("href", nextUrl);
//                 // $('#dLabel').append('<span class="caret"></span>');
//                 $('.dropdown-menu').html(pageli);
//                 var html = template("productListTmp", data);
//                 $('.product-list').html(html);
//             }
//         })
//     }
//     //是用来获取url中的参数的值的 根据参数名获取参数值
//     function getQueryString(name) {
//         var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
//         var r = window.location.search.substr(1).match(reg);
//         if (r != null) {
//             return unescape(r[2]);
//         }
//         return null;
//     }
// });
//在这个js文件 拿到 categoryid pageid
myApp.controller("productlistController", ['$scope', '$http', '$sce', '$routeParams',
    function($scope, $http, $sce, $routeParams) {

        $scope.getProductlist = function() {
            $http({
                url: "http://139.199.192.48:9090/api/getproductlist",
                params: { "categoryid": $routeParams.categoryid, "pageid": $routeParams.pageid }
            }).success(function(data) {
                for (var i = 0; i < data.result.length; i++) {
                    // $sce 解决 图片在页面上不能显示 转成angular 认识的html编码格式
                    data.result[i].productImg = $sce.trustAsHtml(data.result[i].productImg);
                }
                $scope.productlists = data.result;
                //上一页的页码数
                $scope.prevpage = $routeParams.pageid - 1;
                //判断如果上一页的页码数小于1 
                if ($scope.prevpage < 1) {
                    // 就让上一页的页码数等于1
                    $scope.prevpage = 1;
                }
                //下一页的页码数
                $scope.nextpage = $routeParams.pageid - 0 + 1;
                //求得总页数 等于  总的数据条数 / 每页大小  30 / 10  3 totalCount / pagesize
                var pageCount = Math.ceil(data.totalCount / data.pagesize);
                // console.log(pageCount);
                //判断 下一页的页码数 是否超过了总页数 如果超过了就等于总页数
                if ($scope.nextpage > pageCount) {
                    $scope.nextpage = pageCount;
                }
                //创建一个总页数的数组

                $scope.pages = new Array();
                //循环遍历总页数 
                for (var i = 0; i < pageCount; i++) {
                    $scope.pages.push(i+1);
                }
                console.log($scope.pages);
                // console.log($scope.pages.length);
                //模板里面需要绑定 categoryid 所以需要在后台去爆露给模板
                $scope.categoryid = $routeParams.categoryid;
                $scope.pageid = $routeParams.pageid;
            })
        }
        $scope.getProductlist();
        $scope.getcategorytitle = function() {
            $http({
                url: "http://139.199.192.48:9090/api/getcategorybyid",
                params: { "categoryid": $routeParams.categoryid }
            }).success(function(data) {
                $scope.category = data.result[0].category;
            })
        }
        $scope.getcategorytitle();
    }
])
