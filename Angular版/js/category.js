/*
 * @Author: zhengwei
 * @Date:   2016-11-23 23:23:00
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-12-16 16:33:59
 */

'use strict';
// $(function() {
//     setCategoryTitle();
//     function setCategoryTitle() {
//         $.ajax({
//             url: "http://mmb.ittun.com/api/getcategorytitle",
//             success: function(data) {
//                 var html = template("categoryTitleTmp", data);
//                 $("#category > .panel-group").html(html);
//                 var categoryTitle = $("#category > .panel-group > .panel-default > .panel-heading > h4 > a");
//                 categoryTitle.on("click", function(e) {
//                     var titleId = $(this).data("titleid");
//                     // var titleId = $(this).attr("data-titleid");
//                     $.ajax({
//                         url: "http://mmb.ittun.com/api/getcategory?titleid=" + titleId,
//                         success: function(data) {
//                             var html = template("categoryTmp", data);
//                             var panelBody = $(e.target).parent().parent().parent().find(".panel-collapse").find('.panel-body');
//                             panelBody.html(html);
//                             var categoryList = panelBody.find('.row > div');
//                             var count = categoryList.length % 3 || 3;
//                             panelBody.find(".row > div:nth-last-child(-n+" + count + ")").css("border-bottom", "0");
//                         }
//                     })
//                 });
//             }
//         })
//     }
// })
//定义一个categoryController
var categoryController = myApp.controller('categoryController', ['$scope', '$http',
    function($scope, $http) {
        //获取分类标题的函数
        $scope.getCategoryTitle = function() {
            $http({
                url: "http://139.199.192.48:9090/api/getcategorytitle"
            }).success(function(data) {
                $scope.categorytitles = data.result;
            });
        };
        //调用分类标题函数
        $scope.getCategoryTitle();
        //根据标题id获取对应的分类 需要传入一个titleid
        $scope.getCategory = function(titleid) {
            $http({
                url: "http://139.199.192.48:9090/api/getcategory",
                params: { 'titleid': titleid }
            }).success(function(data) {
                $scope.categorys = data.result;
            })
        }
    }
]);
